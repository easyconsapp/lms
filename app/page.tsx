import Text from "@/components/Text";
import { ICourse } from "@/model/courseModel";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses: ICourse[] = await getCourses();
  console.log(courses);
  return <Text />;
}
