import FavoriteRestaurant from '../../data/favorite-restaurant';

const Favorite = {
  async render() {
    return `
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-content');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += `
            <article class="post">
              <img tabindex="0" class="post-img"
                  src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
                  alt="Gambar Restoran ${restaurant.name}">
              <div class="post-content">
                <h1 tabindex="0" class="post-content-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
              </div>
            </article>`;
    });
  },
};

export default Favorite;
