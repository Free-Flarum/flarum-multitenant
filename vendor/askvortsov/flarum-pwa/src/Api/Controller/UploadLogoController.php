<?php

/*
 * This file is part of askvortsov/flarum-pwa
 *
 *  Copyright (c) 2021 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumPWA\Api\Controller;

use Askvortsov\FlarumPWA\PWATrait;
use Flarum\Api\Controller\UploadImageController;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UploadedFileInterface;
use Tobscure\JsonApi\Document;

class UploadLogoController extends UploadImageController
{
    use PWATrait;

    /**
     * @var string
     */
    protected $size;

    /**
     * {@inheritdoc}
     */
    public function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $size = intval(Arr::get($request->getQueryParams(), 'size'));
        $this->size = $size;

        if (!in_array($size, PWATrait::$SIZES)) {
            throw new RouteNotFoundException();
        }

        $this->filenamePrefix = "pwa-icon-${size}x${size}";
        $this->filePathSettingKey = "askvortsov-pwa.icon_${size}_path";

        return parent::data($request, $document);
    }

    protected function makeImage(UploadedFileInterface $file): Image
    {
        $manager = new ImageManager();

        return $manager->make($file->getStream())->resize($this->size, $this->size)->encode('png');
    }
}
