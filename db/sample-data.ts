const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    },
    {
      name: "Mike",
      email: "user@example.com",
      password: "123456",
      role: "user",
    },
  ],

  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Classic Polo style with modern comfort",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 59.99,
      brand: "Polo",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg",
    },
  ],
};

export default sampleData;
