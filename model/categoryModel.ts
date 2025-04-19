import mongoose from "mongoose";

interface ICategory extends mongoose.Document {
  title: string;
  description?: string;
  thumbnail: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  title: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String, required: true },
});

export const Category =
  (mongoose.models.Category as mongoose.Model<ICategory>) ||
  mongoose.model<ICategory>("Category", categorySchema);
