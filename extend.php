<?php

use Flarum\Extend;
use Flarum\Frontend\Document;

include 'config.php';

$io = popen('/usr/bin/du -sm /data/host/' . $GLOBALS['this_forum']['tag'] . '/public/assets/files 2>/dev/null', 'r');
$size = fgets($io, 4096);
$GLOBALS['fof_upload_size_mb'] = intval(substr($size, 0, strpos($size, "\t")));
pclose($io);

$GLOBALS['max_fof_upload_size'] = 5000;


// Footer selectors randomization
function randomHtmlEntitiesEncoding($inputString) {
    $encodedString = '';

    for ($i = 0, $len = strlen($inputString); $i < $len; $i++) {
        // Decide randomly whether to encode the current character
        $shouldEncode = mt_rand(0, 1) === 1;

        if ($shouldEncode) {
            $encodedString .= htmlentities($inputString[$i], ENT_QUOTES, 'UTF-8');
        } else {
            $encodedString .= $inputString[$i];
        }
    }

    return $encodedString;
}



$extenders = [
    (new Extend\Frontend('forum'))->content(function (Document $document) {
        if ($GLOBALS['this_forum']['donated_amount'] < 7) {
            $document->foot[] = '<p style="text-align: center; padding: 5px 0; line-height: 1.4rem;">' . htmlentities("Powered by: ") . '<a href="' . randomHtmlEntitiesEncoding("https://freeflarum.com/") . '">FreeFlarum</a>.<br/>(<a href="' . randomHtmlEntitiesEncoding("https://freeflarum.com/donate") . '">remove this footer</a>)</p>';
        };
    }),

    (new Extend\Frontend('admin'))->content(function (Document $document) {
        $document->head[] = '<style>.AuditUpgrade { display: none !important; }</style>';
    })
];


if ($GLOBALS['fof_upload_size_mb'] > $GLOBALS['max_fof_upload_size']) {
    $extenders[] = (new \FoF\Upload\Extend\Adapters())->disable('local');
};


return $extenders;
