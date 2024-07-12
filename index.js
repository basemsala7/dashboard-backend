import express from "express";
import cors from "cors";
const app = express();
import jwt from "jsonwebtoken";

import {
  topdeals,
  users,
  totalVisit,
  revenue,
  devices,
  revenueanalytics,
} from "./data.js";

export let products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];
app.use(cors());
app.use(express.json());

// Dashboard
app.get("/api/dashboard/topdeals", (req, res) => {
  res.json(topdeals);
});
app.get("/api/dashboard/visit", (req, res) => {
  res.json(totalVisit);
});
app.get("/api/dashboard/revenue", (req, res) => {
  res.json(revenue);
});
app.get("/api/dashboard/devices", (req, res) => {
  res.json(devices);
});
app.get("/api/dashboard/revenueanalytics", (req, res) => {
  res.json(revenueanalytics);
});

// GET USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET USER
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  console.log(user);
  res.json(user);
});

// ADD USER
app.post("/api/users", (req, res) => {
  users.unshift(req.body);
  res.json(users);
});

// DELETE USER
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json("User deleted!");
});

// GET PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});

// ADD PRODUCT
app.post("/api/products", (req, res) => {
  products.unshift(req.body);
  res.json(products);
});
app.post("/api/login", (req, res) => {
  const { email } = req.body;
  const jwtSecretKey = "P@ssword123";
  const token = jwt.sign(email, jwtSecretKey);
  res.json({ message: "Login Successfuly", token });
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
  products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  );
  res.json("Product deleted!");
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(8800, () => {
  console.log("Connected to backend.");
});
