import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '0',
    images: 'public/img/apartment-01.jpg',
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    type: 'Apartment',
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    owner: {
      avatar: 'public/img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '1',
    images: 'public/img/room.jpg',
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Room',
    rating: 3,
    bedrooms: 1,
    maxAdults: 2,
    price: 80,
    owner: {
      avatar: 'public/img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '2',
    images: 'public/img/apartment-02.jpg',
    title: 'Canal View Prinsengracht',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Apartment',
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    price: 132,
    owner: {
      avatar: 'public/img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '3',
    images: 'public/img/apartment-03.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Apartment',
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 180,
    owner: {
      avatar: 'public/img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },
];
