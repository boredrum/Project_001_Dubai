import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

import { BlogMain } from "./model/blogMainData.js";
import { CategoryCarousel } from "./model/categoryCarouselData.js";
import { Category } from "./model/categoryData.js";
import { MainSlidesProj } from "./model/mainSlidesProjData.js";

const PORT = process.env.PORT || 3001;

const url = "mongodb://localhost:27017/ProjectDubai";

const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

mongoose
	.connect(url)
	.then(() => {
		console.log("Connected to DB ProjectDubai");
		app.listen(PORT, () => {
			console.log(`Server is starting on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(`DB connection error: ${err}`);
	});

app.use(express.json());

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const blogMainDataPath = path.join(__dirname, "data/blogMainData.json");

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/blog_main_data", async (req, res) => {
  try {
    const blogMainData = await BlogMain.find();
    res.json(blogMainData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading data");
  }
});

app.get("/category_carousel_data", async (req, res) => {
  try {
    const categoryCarouselData = await CategoryCarousel.find();
    res.json(categoryCarouselData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading data");
  }
});

app.get("/category_data", async (req, res) => {
  try {
    const categoryData = await Category.find();
    res.json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading data");
  }
});

app.get("/main_slides_proj_data", async (req, res) => {
  try {
    const mainSlidesProjData = await MainSlidesProj.find();
    res.json(mainSlidesProjData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading data");
  }
});