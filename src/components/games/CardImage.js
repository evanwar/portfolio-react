import React from 'react'
import { gameImages } from '../../helpers/imageHelper';
import PropTypes from 'prop-types';

const CardImage = ({ image }) => {
    return (
        <img className="img-thumbnail mt-1" src={gameImages(`./${image}.jpg`).default} alt={image} />
    )
}

CardImage.propTypes = {
    image: PropTypes.number.isRequired
}

export default CardImage;


