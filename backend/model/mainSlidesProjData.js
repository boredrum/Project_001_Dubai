import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mainSlidesProjData = new Schema({
	id: Number,
	name: String,
	description: String,
	image: String,
  imagewebp: String,
});

const MainSlidesProj = mongoose.model("mainslidesprojdatas", mainSlidesProjData);

export { MainSlidesProj };
