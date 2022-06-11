exports.Query = {
  hello: () => ["Hello world!", "Hello again!", "auf wiedersehen"],
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filteredProducts = products.filter(
          (product) => product.onSale === onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let reviewsCount = 0;
          reviews.forEach((review) => {
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
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { reviews }) => reviews,
};
