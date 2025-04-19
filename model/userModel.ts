import mongoose from "mongoose";

interface ISocialMedia {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
}

interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  bio?: string;
  socialMedia?: ISocialMedia;
  profilePicture?: string;
  designation?: string;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  socialMedia: {
    type: Object,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
});

type UserModel = mongoose.Model<IUser>;

export const User: UserModel =
  (mongoose.models.User as UserModel) ||
  mongoose.model<IUser>("User", userSchema);
