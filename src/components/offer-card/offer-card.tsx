import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { Card, Bookmark, FavoriteCard } from '../../constants/constants.ts';
import { getRating } from '../../utils';
import { useAppDispatch } from '../../hooks/index.ts';
import { setCurrentMarker } from '../../store/offers-slice/offers-slice.ts';
import FavoriteButton from '../favorite-button/favorite-button.tsx';

type OfferCardProps = {
  offer: Offer;
  cardType: 'typical' | 'near' | 'favorite';
};

function OfferCard({offer, cardType}: OfferCardProps): JSX.Element {
  const {
    id,
    previewImage,
    title,
    isPremium,
    type,
    rating,
    price,
    isFavorite
  } = offer;

  const cardClass = cardType === 'favorite' ? 'favorites__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper';

  const dispatch = useAppDispatch();

  const getClassName = (cityType: string) => {
    if (cityType === 'typical') {
      return 'cities__card place-card';
    } else if (cityType === 'near') {
      return 'near-places__card place-card';
    } else if (cityType === 'favorite') {
      return 'favorites__card place-card';
    }
    return '';
  };

  return (
    <article className={`${getClassName(cardType)}`}
      onMouseOver={() => dispatch(setCurrentMarker({id}))}
      onMouseLeave={() => dispatch(setCurrentMarker(null))}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={cardClass}>
        <img className="place-card__image" src={previewImage}
          width={cardType === 'favorite' ? FavoriteCard.Width : Card.Size}
          height={cardType === 'favorite' ? FavoriteCard.Height : Card.Size}
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            iconWidth={Bookmark.Width}
            iconHeight={Bookmark.Height}
            buttonClass="place-card__bookmark-button"
            activeClass="place-card__bookmark-button--active"
            iconClass="place-card__bookmark-icon"
            buttonText="In bookmarks"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={type} onClick={() => window.scrollTo(0, 0)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
