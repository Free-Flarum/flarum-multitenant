<?php

namespace FoF\Masquerade\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Tobscure\JsonApi\Relationship;

class AnswerSerializer extends AbstractSerializer
{
    protected function getDefaultAttributes($model): array
    {
        return $model->toArray();
    }

    public function getType($model): string
    {
        return 'masquerade-answer';
    }

    public function field($model): ?Relationship
    {
        return $this->hasOne(
            $model->field,
            FieldSerializer::class
        );
    }
}
