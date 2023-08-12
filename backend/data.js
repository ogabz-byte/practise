import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc619e44-0200-4cdf-8d2a-cc843361e62c/pro-dri-fit-mens-slim-fit-long-sleeve-top-9rR6dS.png", // 679px × 829px
      price: 1200,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: '2',
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6de45d80-c065-44d3-8653-d73da4c01f98/jordan-dri-fit-sport-mens-air-fleece-full-zip-hoodie-4q60GS.png",
      price: 8000,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '3',
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8223adad-87dc-4ec3-bc01-afdf1390a8f7/sportswear-club-fleece-mens-pants-jmbdcZ.png",
      price: 1300,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dec230a7-a1ff-4efa-8d71-50f720daa289/sportswear-tech-fleece-mens-joggers-4x29ft.png",
      price: 10000,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
