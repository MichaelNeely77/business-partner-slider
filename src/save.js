import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const Save = ({ attributes }) => {
	const { cards } = attributes;

	return (
		<div {...useBlockProps.save()} className="bcs-slider">
			{cards.map((card, index) => (
				<a href={card.linkUrl} className="bcs-card" key={index}>
					<img src={card.imageUrl} alt="" />
				</a>
			))}
		</div>
	);
};

export default Save;
