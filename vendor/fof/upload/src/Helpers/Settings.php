<?php

namespace FoF\Upload\Helpers;

use FoF\Upload\Adapters\Manager;
use FoF\Upload\Contracts\Template;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Settings
{
    const DEFAULT_MAX_FILE_SIZE = 2048;
    const DEFAULT_MAX_IMAGE_WIDTH = 100;

    /**
     * The templates used to render files.
     *
     * @var array
     */
    protected $renderTemplates = [];

    protected $prefix = 'fof-upload.';

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __get($name)
    {
        return $this->settings->get($this->prefix . $name);
    }

    public function __set($name, $value)
    {
        $this->settings->set($this->prefix . $name, $value);
    }

    public function __isset($name)
    {
        return $this->settings->get($this->prefix . $name) !== null;
    }

    /**
     * @param $name
     * @param null $default
     *
     * @return null
     */
    public function get($name, $default = null)
    {
        return $this->{$name} ?: $default;
    }

    /**
     * @return Collection
     */
    public function getAvailableUploadMethods()
    {
        /** @var Manager $manager */
        $manager = app(Manager::class);

        return $manager->adapters()
            ->filter(function ($available) {
                return $available;
            })
            ->map(function ($available, $item) {
                return app('translator')->trans('fof-upload.admin.upload_methods.' . $item);
            });
    }

    /**
     * @param $field
     * @param null $default
     * @param null $attribute
     *
     * @return Collection|mixed|null
     */
    public function getJsonValue($field, $default = null, $attribute = null)
    {
        $json = $this->{$field};

        if (empty($json)) {
            return $default;
        }

        $collect = collect(json_decode($json, true));

        if ($attribute) {
            return $collect->get($attribute, $default);
        }

        return $collect;
    }

    /**
     * @return Collection
     */
    public function getMimeTypesConfiguration()
    {
        $adapters = $this->getAvailableUploadMethods();

        return $this->getJsonValue(
            'mimeTypes',
            collect(['^image\/.*' => ['adapter' => $adapters->flip()->last(), 'template' => 'image-preview']])
        )->filter();
    }

    /**
     * @param Template $template
     */
    public function addRenderTemplate(Template $template)
    {
        $this->renderTemplates[$template->tag()] = $template;
    }

    /**
     * @return Template[]
     */
    public function getRenderTemplates()
    {
        return $this->renderTemplates;
    }

    /**
     * @param Template[] $templates
     */
    public function setRenderTemplates(array $templates)
    {
        $this->renderTemplates = $templates;
    }

    /**
     * @return Collection|Template[]
     */
    public function getAvailableTemplates()
    {
        $collect = [];

        /**
         * @var string
         * @var Template $template
         */
        foreach ($this->renderTemplates as $tag => $template) {
            $collect[$tag] = [
                'name' => $template->name(),
                'description' => $template->description(),
            ];
        }

        return collect($collect);
    }

    /**
     * @param string $template
     *
     * @return Template|null
     */
    public function getTemplate($template)
    {
        return Arr::get($this->renderTemplates, $template);
    }
}
