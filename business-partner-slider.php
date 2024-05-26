<?php
/**
 * Plugin Name: Business Card Slider
 * Description: A custom Gutenberg block to display a slider of business card-sized images with fade transitions.
 * Version: 1.0.0
 * Author: Michael Neely
 * Author URI: https://michaelneely.net
 */

function bcs_register_block() {
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'bcs-block-editor-js',
		plugins_url('build/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	$editor_css = 'build/editor.css';
	if (file_exists(plugin_dir_path(__FILE__) . $editor_css)) {
		wp_register_style(
			'bcs-block-editor-css',
			plugins_url($editor_css, __FILE__),
			array(),
			filemtime(plugin_dir_path(__FILE__) . $editor_css)
		);
	}

	$frontend_css = 'build/style.css';
	if (file_exists(plugin_dir_path(__FILE__) . $frontend_css)) {
		wp_register_style(
			'bcs-frontend-css',
			plugins_url($frontend_css, __FILE__),
			array(),
			filemtime(plugin_dir_path(__FILE__) . $frontend_css)
		);
	}

	register_block_type('business-partners-slider/business-card-slider', array(
		'editor_script' => 'bcs-block-editor-js',
		'editor_style' => 'bcs-block-editor-css',
		'style' => 'bcs-frontend-css',
	));
}
add_action('init', 'bcs_register_block');

function bcs_enqueue_frontend_assets() {
	$frontend_js = 'build/frontend.js';
	if (file_exists(plugin_dir_path(__FILE__) . $frontend_js)) {
		wp_enqueue_script(
			'bcs-frontend-script',
			plugins_url($frontend_js, __FILE__),
			array('jquery'),
			filemtime(plugin_dir_path(__FILE__) . $frontend_js),
			true
		);
	}
}
add_action('wp_enqueue_scripts', 'bcs_enqueue_frontend_assets');
