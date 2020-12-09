/*
 *
 *  This file is part of fof/filter.
 *
 *  Copyright (c) 2020 FriendsOfFlarum..
 *
 *  For the full copyright and license information, please view the license.md
 *  file that was distributed with this source code.
 *
 */

import app from 'flarum/app';
import addWordPane from './addWordPane';

app.initializers.add('fof-filter', (app) => {
    addWordPane();
});
