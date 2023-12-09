import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import favoriteRestaurant from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenterRestaurant = async (data) => {
  await likeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant,
    data,
  });
};

export { createLikeButtonPresenterRestaurant };
