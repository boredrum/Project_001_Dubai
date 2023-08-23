import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogMainSchema = new Schema({
	id: Number,
	name: String,
	description: String,
	image: String,
});

const BlogMain = mongoose.model("blogmaindatas", blogMainSchema);

export { BlogMain };
