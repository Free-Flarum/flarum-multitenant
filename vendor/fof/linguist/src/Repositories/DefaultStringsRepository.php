<?php

namespace FoF\Linguist\Repositories;

use FoF\Linguist\TranslationLock;
use Flarum\Locale\LocaleManager;
use Flarum\Settings\SettingsRepositoryInterface;
use FoF\Linguist\Translator\NoOpConfigCacheFactory;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class DefaultStringsRepository
{
    protected $settings;
    protected $events;
    protected $manager;

    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events, LocaleManager $manager)
    {
        $this->settings = $settings;
        $this->events = $events;
        $this->manager = $manager;
    }

    public function allTranslations()
    {
        $translator = $this->manager->getTranslator();

        // Use our own cache factory that will force a fresh catalog load and not write it to file.
        // This allows us to get fresh original strings without the Linguist-defined ones without
        // clearing Flarum's locale cache (which contains Linguist custom strings).
        // If we cleared the cache here, this would clear the cache every time the Linguist tab is visited,
        // even if no translation is modified. This would be an unnecessary performance hit.
        $translator->setConfigCacheFactory(new NoOpConfigCacheFactory());

        $translations = [];

        // We disable our own translation loader so custom strings don't replace original ones
        TranslationLock::stopLoadingTranslations();

        foreach (array_keys($this->manager->getLocales()) as $locale) {
            foreach (Arr::get($translator->getCatalogue($locale)->all(), 'messages', []) as $key => $string) {
                if (!Arr::has($translations, $key)) {
                    $translations[$key] = [
                        'key' => $key,
                        'locales' => [],
                    ];
                }

                // A value could be null if it's defined in the yaml file, but doesn't have any value after the comma
                // We cast everything to string because it's the only type of data Linguist will deal with
                $translations[$key]['locales'][$locale] = (string)$string;
            }
        }

        TranslationLock::continueLoadingTranslations();

        // We don't reset the cache factory because it's not really needed. All catalogs are now already loaded
        // so no need to make Flarum use the cached version again to finish answering this request.
        // We would only miss Linguist-defined strings inside the eventual errors happening later in this very request.

        return collect($translations)->sortBy(function ($value, $key) {
            return $key;
        });
    }

    public function getTranslation($key)
    {
        // For detailed explanations of the different steps, see the `allTranslations`.
        $translator = $this->manager->getTranslator();

        $translator->setConfigCacheFactory(new NoOpConfigCacheFactory());

        $translation = [
            'key' => $key,
            'locales' => [],
        ];

        TranslationLock::stopLoadingTranslations();

        foreach (array_keys($this->manager->getLocales()) as $locale) {
            $string = $translator->getCatalogue($locale)->get($key);
            $translation['locales'][$locale] = (string)$string;
        }

        TranslationLock::continueLoadingTranslations();

        return $translation;
    }
}
