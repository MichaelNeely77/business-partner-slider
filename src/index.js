/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

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
