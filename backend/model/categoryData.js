import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
	id: Number,
  priority: String,
  type: String,
	name: String,
	description: String,
	image: String,
});

const Category = mongoose.model("categorymaindatas", categorySchema);

export { Category };
