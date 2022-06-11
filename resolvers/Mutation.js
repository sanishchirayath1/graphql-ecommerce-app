const { v4: uuid } = require("uuid");

function dateFormat(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

exports.Mutation = {
  addCategory: async (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: async (parent, { input }, { db }) => {
    const { name, price, description, quantity, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      price,
      quantity,
      description,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  addReview: async (parent, { input }, { db }) => {
    const { title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date: dateFormat(new Date()),
      title,
      comment,
      rating,
      productId,
    };
    db.reviews.push(newReview);
    return newReview;
  },
  deleteCategory: async (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id) {
        product.categoryId = null;
      }
      return product;
    });
    return true;
  },
  deleteProduct: async (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: async (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: async (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
  updateProduct: async (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },
  updateReview: async (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return db.reviews[index];
  },
};
