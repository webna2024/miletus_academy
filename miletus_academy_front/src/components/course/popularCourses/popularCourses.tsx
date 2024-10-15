import { FetchCourses } from "@/Api/coursesApi";
import CourseCard from "../courseCard/courseCard";
import { Course } from "@/interfaces/course";
import Title from "../../title/title";

const PopularCourses = async () => {
  const data: Course[] = await FetchCourses();
  return (
    <section>
      <Title title={'دوره های محبوب'}/>
      <div className="flex flex-row justify-between">
        {data.map((course: Course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
