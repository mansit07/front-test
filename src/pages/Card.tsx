import React from 'react';
import { Props } from '../lib/collection'; 
import { Link } from 'react-router-dom';
import { CollectionItem,CollectionItemImage } from './CardCss';

const Card: React.FC<Props> = ({ card, formattedDOB, onError }) => {
  return (
    <CollectionItem className="collection-item">
      <Link style={{textDecoration: "none", color: "inherit"}} to={`/view-card/${card.id}`}>
        <CollectionItemImage
          src={card.player.image}
          alt={`${card.player.firstname} ${card.player.lastname}`}
          onError={onError}
        />
        <CollectionItem>
          <strong>{card.player.firstname} {card.player.lastname}</strong>
        </CollectionItem>
        <CollectionItem>Birthdate: {formattedDOB(card.player.birthday)}</CollectionItem>
      </Link>
    </CollectionItem>
  );
};

export default Card;
