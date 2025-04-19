import { Category } from "@/model/categoryModel";
import { Course, ICourse } from "@/model/courseModel";
import { User } from "@/model/userModel";

export async function getCourses(): Promise<ICourse[]> {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    });
  return courses;
}
