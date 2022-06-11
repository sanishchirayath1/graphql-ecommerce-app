const { v4: uuid } = require("uuid");

function dateFormat(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

exports.Mutation = {
  addCategory: async (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: async (parent, { input }, { products }) => {
    const { name, price, description, quantity, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      price,
      quantity,
      description,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: async (parent, { input }, { reviews }) => {
    const { title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date: dateFormat(new Date()),
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
};
