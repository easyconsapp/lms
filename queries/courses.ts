import { Course, ICourse } from "@/model/course-model";

export async function getCourses(): Promise<ICourse[]> {
  const courses = await Course.find({});
  return courses;
}
