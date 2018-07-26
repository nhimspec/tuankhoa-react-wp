<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_tuankhoa');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'cYHMu>PvQgVi J_?Szu>dF{[;cVk4jAExUcB42MLhf5lNK*P{4eHVw!&00@yk/Dy');
define('SECURE_AUTH_KEY',  'P`M=oXd%a6u;c!tX8<mF#k}=0??Db#w^8=y5{oyT4~ZZ*h5Op6aRsC/^? ]jO?,|');
define('LOGGED_IN_KEY',    'bmh{hYoT{8@H}}^o<J_nV-ql4(uG::>*9v6d)nuc!9{s!ij32+:/28{|i+K .r*J');
define('NONCE_KEY',        '1ZRG:.Smb*fdqagrIH@gj;!DPF$O DE7McXn=Yh `T9DUK8O2WYlLLb24T%%vvig');
define('AUTH_SALT',        'nW x:nk}V9zya}PAk^@^{U +Vz(CDAKUb?]>w i/ubh^o0VE2K*lwL:2v-mi;!2.');
define('SECURE_AUTH_SALT', ']{9.zhE~kY//VzNj+s1>)Am$/+3-G: M @(!Y3kM)OJ; lFf8AJ?MJsKR8^EGgD9');
define('LOGGED_IN_SALT',   ';.4HXe/UW(jTxl0A<,Fl2jUvHk$}-Sa`0#LQqNTsa1Zp{]bR3,*~TCEVC|HG=Z3Z');
define('NONCE_SALT',       '2B9}%*dlZhLh3(743V7pQA5nex]wM6Wxnym,6VCC2[ZrCqtk.^]U~bE) ^KcTYpW');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
