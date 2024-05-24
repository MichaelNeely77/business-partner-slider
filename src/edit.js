import { useBlockProps, MediaUpload, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import './editor.scss';

const Edit = ({ attributes, setAttributes }) => {
	const { cards } = attributes;

	const addCard = () => {
		const newCards = [...cards, { imageUrl: '', linkUrl: '' }];
		setAttributes({ cards: newCards });
	};

	const updateCard = (index, key, value) => {
		const newCards = cards.slice();
		newCards[index][key] = value;
		setAttributes({ cards: newCards });
	};

	const removeCard = (index) => {
		const newCards = cards.slice();
		newCards.splice(index, 1);
		setAttributes({ cards: newCards });
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Cards">
					<Button isPrimary onClick={addCard}>Add Card</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} className="bcs-slider">
				{cards.map((card, index) => (
					<div className="bcs-card" key={index}>
						<MediaUpload
							onSelect={(media) => updateCard(index, 'imageUrl', media.url)}
							allowedTypes={['image']}
							value={card.imageUrl}
							render={({ open }) => (
								<Button isSecondary onClick={open}>
									{card.imageUrl ? <img src={card.imageUrl} alt="" /> : 'Select Image'}
								</Button>
							)}
						/>
						<URLInputButton
							url={card.linkUrl}
							onChange={(url) => updateCard(index, 'linkUrl', url)}
						/>
						<Button isDestructive onClick={() => removeCard(index)}>Remove</Button>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default Edit;
