<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('kilowhat_audit_log')) {
            return;
        }

        $schema->create('kilowhat_audit_log', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('actor_id')->nullable()->index();
            $table->string('client')->index();
            $table->string('ip_address')->nullable()->index();
            $table->string('action')->index();
            $table->json('payload')->nullable();
            $table->dateTime('created_at');

            // actor_id has no foreign constraints on purpose. We want to preserve deleted user IDs
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('kilowhat_audit_log');
    },
];
