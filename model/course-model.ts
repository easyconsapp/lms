import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface ICourse extends Document {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  modules: Types.ObjectId[];
  price: number;
  active: boolean;
  category: Types.ObjectId;
  instructor: Types.ObjectId;
  testimonials: Types.ObjectId[];
  quizSet: Types.ObjectId;
  learning: string[];
  createdOn: Date;
  modifiedOn: Date;
}

const courseSchema: Schema<ICourse> = new Schema({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: {
    required: true,
    type: [Schema.Types.ObjectId],
  },
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  instructor: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  testimonials: {
    required: true,
    type: [Schema.Types.ObjectId],
  },
  quizSet: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  learning: {
    required: true,
    type: [String],
  },
  createdOn: {
    required: true,
    type: Date,
  },
  modifiedOn: {
    required: true,
    type: Date,
  },
});

type CourseModel = Model<ICourse>;

export const Course: CourseModel =
  (mongoose.models.Course as CourseModel) ??
  mongoose.model<ICourse>("Course", courseSchema);
