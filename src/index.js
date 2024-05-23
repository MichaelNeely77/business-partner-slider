/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('business-partner-slider/business-card-slider', {
	title: 'Business Card Slider',
	icon: 'images-alt2',
	category: 'common',
	attributes: {
		cards: {
			type: 'array',
			default: [],
		},
	},
	edit: Edit,
	save: Save,
});
