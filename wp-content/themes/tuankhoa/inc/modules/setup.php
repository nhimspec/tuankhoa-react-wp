<?php

/**
 * @see Init THEME
 */
if (!function_exists('tuankhoa_site_setup_theme')) {
    function tuankhoa_site_setup_theme()
    {
        add_image_size('w1000x600', 1000, 600, true);

        /* Auto Add RSS to <head> */
        add_theme_support('automatic-feed-links');

        /* Add post thumbnail */
        add_theme_support('post-thumbnails');

        /*Add title for site*/
        add_theme_support('title-tag');

        // banners
        add_theme_support('custom-logo');

        /** Enable HTML5 markup support
         * https://developer.wordpress.org/reference/functions/add_theme_support/#html5
         */
        add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);
    }
}
add_action('after_setup_theme', 'tuankhoa_site_setup_theme');

/********* Import Css/Js ***********/
/**
 * @see  front site Js - Css
 */
if (!function_exists('tuankhoa_site_front_layout')) {
    function tuankhoa_site_front_layout()
    {
        // Styles
        wp_enqueue_style('bootstrap-style', get_stylesheet_directory_uri() . "/public/common-css/bootstrap.css");
        wp_enqueue_style('ionicons-style', get_stylesheet_directory_uri() . "/public/common-css/ionicons.css");
        wp_enqueue_style('layerslider-style', get_stylesheet_directory_uri() . "/public/common-css/layerslider.css");
        wp_enqueue_style('swiper-style', get_stylesheet_directory_uri() . "/public/common-css/swiper.css");

        // JavaScripts
        wp_enqueue_script('tether-script', get_stylesheet_directory_uri() . "/public/common-js/tether.min.js", ['jquery'], false, true);
        wp_enqueue_script('bootstrap-script', get_stylesheet_directory_uri() . "/public/common-js/bootstrap.js", ['jquery'], false, true);
        wp_enqueue_script('bundle-script', get_stylesheet_directory_uri() . "/public/bundle.js", [], false, true);
    }
}
add_action('wp_enqueue_scripts', 'tuankhoa_site_front_layout', 5);
