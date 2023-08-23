import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoryCarouselSchema = new Schema({
	id: Number,
  type: String,
	description: String,
	image: String,
});

const CategoryCarousel = mongoose.model("categorycarouseldatas", categoryCarouselSchema);

export { CategoryCarousel };
