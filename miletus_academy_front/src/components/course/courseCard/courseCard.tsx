import { Course } from "@/interfaces/course";
import { StarIcon } from "@heroicons/react/16/solid";
import courseImage from "@/db/pictures/Job-Interview.webp";
import Image from "next/image";
import Link from "next/link";
const CourseCard = ({ course }: { course: Course }) => {
  const persianNumberFormat = new Intl.NumberFormat("fa-IR");
  return (
    <div className="rounded-2xl flex border h-80 w-64 flex-col justify-between gap-4 xs:divide-x-1 xs:py-2 sm:p-5">
      <Link className="flex gap-4 xs:flex-row sm:flex-col" href="">
        <Image
          width={200}
          height={100}
          src={courseImage}
          alt={course.title}
          className="mx-auto w-full object-contain rounded-lg"
        />
        <div className="space-y-1">
          <h1 className="font-bold">{course.title}</h1>
          <p className="text-slate-500">
            <span>مدرس: </span>
            {course.teacher}
          </p>
        </div>
        <div className="text-left">
          <p className="flex flex-row justify-end gap-1 font-semibold">
            <StarIcon className="w-4 text-yellow-500" />
            {persianNumberFormat.format(course.star)}
          </p>
          <p className="font-semibold">
            {persianNumberFormat.format(course.price)}
            <span className="text-slate-500 font-normal text-sm"> تومان</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
