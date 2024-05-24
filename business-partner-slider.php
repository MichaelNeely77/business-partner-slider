<?php
/**
 * Plugin Name: Business Card Slider
 * Description: A custom Gutenberg block to display a slider of business card-sized images with fade transitions.
 * Version: 1.0
 * Author: Michael Neely
 * Author URI: https://michaelneely.net
 */

function bcs_enqueue_assets() {
	wp_enqueue_script(
			'bcs-block-editor-js',
			plugins_url('build/index.js', __FILE__),
			array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components')
	);

	wp_enqueue_style(
			'bcs-block-editor-css',
			plugins_url('build/editor.css', __FILE__)
	);
}
add_action('enqueue_block_editor_assets', 'bcs_enqueue_assets');

function bcs_enqueue_frontend_assets() {
	wp_enqueue_style(
			'bcs-frontend-style',
			plugins_url('build/style.css', __FILE__)
	);

	wp_enqueue_script(
			'bcs-frontend-script',
			plugins_url('src/frontend.js', __FILE__),
			array('jquery'),
			null,
			true
	);
}
add_action('wp_enqueue_scripts', 'bcs_enqueue_frontend_assets');
