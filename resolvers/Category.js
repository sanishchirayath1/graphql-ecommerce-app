exports.Category = {
  products: ({ id }, { filter }, { db }) => {
    let filteredProducts = db.products.filter(
      (product) => product.categoryId === id
    );
    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filteredProducts = db.products.filter(
          (product) => product.onSale === onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let reviewsCount = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              reviewsCount++;
            }
          });
          const avgProductRating = sumRating / reviewsCount;
          console.log(sumRating, reviewsCount, avgProductRating, product.name);

          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
};
