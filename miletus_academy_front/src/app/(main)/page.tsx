import CourseFeatures from "@/components/course/courseFeatures/courseFeatures";
import MiletusFeatures from "@/components/miletusFeatures/miletusFeatures";
import PopularCourses from "@/components/course/popularCourses/popularCourses";
import Review from "@/components/review/review";
import Slider from "@/components/slider/slider";


export default function Home() {
  return <>
  <Slider/>
  <CourseFeatures/>
  <PopularCourses/>
  <MiletusFeatures/>
  <Review/>
  </>;
}
