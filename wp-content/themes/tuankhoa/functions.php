<?php

/**
 * @see Include Modules
 * @link https://github.com/roots/soil
 */
$includes = [
    'inc/modules/setup.php',        // set up
    'inc/helpers.php',
];

foreach ($includes as $file) {
    if (!$filePath = locate_template($file)) {
        trigger_error(sprintf(__('Error locating %s for inclusion', 'twm'), $file), E_USER_ERROR);
    }
    require_once $filePath;
}
unset($file, $filePath);