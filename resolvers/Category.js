exports.Category = {
  products: ({ id }, args, {products}) => {;
    return products.filter((product) => product.categoryId === id);
  },
};
