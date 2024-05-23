import { useBlockProps, MediaUpload, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment, useEffect } from '@wordpress/element';
import './editor.scss';

const Edit = ({ attributes, setAttributes }) => {
	const { cards } = attributes;

	const updateCard = (index, key, value) => {
		const newCards = cards.slice();
		newCards[index][key] = value;
		setAttributes({ cards: newCards });
	};

	const handleAddCard = (media) => {
		const newCards = [...cards, { imageUrl: media.url, linkUrl: '' }];
		setAttributes({ cards: newCards });
	};

	useEffect(() => {
		const addCardButton = document.querySelector('.add-card-button');
		if (addCardButton) {
			addCardButton.addEventListener('click', function() {
				const event = new Event('bcs:addCard');
				document.dispatchEvent(event);
			});
		}

		const handleRemoveCard = (event) => {
			const newCards = cards.slice();
			newCards.splice(event.detail.index, 1);
			setAttributes({ cards: newCards });
		};

		document.addEventListener('bcs:removeCard', handleRemoveCard);

		return () => {
			if (addCardButton) {
				addCardButton.removeEventListener('click', function() {
					const event = new Event('bcs:addCard');
					document.dispatchEvent(event);
				});
			}

			document.removeEventListener('bcs:removeCard', handleRemoveCard);
		};
	}, [cards]);

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Cards">
					<MediaUpload
						onSelect={handleAddCard}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button className="add-card-button" onClick={open}>
								Add Card
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} className="bcs-slider">
				{cards.map((card, index) => (
					<div className="bcs-card" key={index} data-index={index}>
						<MediaUpload
							onSelect={(media) => updateCard(index, 'imageUrl', media.url)}
							allowedTypes={['image']}
							value={card.imageUrl}
							render={({ open }) => (
								<Button className="select-image-button" onClick={open}>
									{card.imageUrl ? <img src={card.imageUrl} alt="" /> : 'Select Image'}
								</Button>
							)}
						/>
						<URLInputButton
							url={card.linkUrl}
							onChange={(url) => updateCard(index, 'linkUrl', url)}
						/>
						<Button className="remove-card-button">Remove</Button>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default Edit;


export default Edit;
