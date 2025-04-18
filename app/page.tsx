import Text from "@/components/Text";
import { ICourse } from "@/model/course-model";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses: ICourse[] = await getCourses();
  console.log(courses);
  return <Text />;
}
