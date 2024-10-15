import Image from "next/image";
import Title from "../../title/title";
import clsx from "clsx";

const CourseFeatures = () => {
  const divStyle = clsx("w-80 space-y-5");
  const hStyle = clsx("text-xl");
  const pStyle = clsx("text-light text-gray-500");
  return (
    <section>
      <Title title={"ویژگی دوره ها"} />
      <div className="flex flex-row justify-evenly text-center ">
        <div className={divStyle}>
          <Image
            width={50}
            height={50}
            src={""}
            alt={""}
            className="rounded-full mx-auto"
          />
          <h1 className={hStyle}>یادگیری شخصی</h1>
          <p className={pStyle}>
            دانش آموزان با سرعت خود تمرین می کنند، ابتدا شکاف های درک خود را پر
            می کنند و سپس یادگیری خود را تسریع می کنند.
          </p>
        </div>
        <div className={divStyle}>
          <Image
            width={50}
            height={50}
            src={""}
            alt={""}
            className="rounded-full mx-auto"
          />
          <h1 className={hStyle}>محتوای قابل اعتماد</h1>
          <p className={pStyle}>
            کتابخانه مایلیتوس آکادمی از تمرینات و دروس قابل اعتماد که توسط
            کارشناسان ایجاد شده است، ریاضیات، علوم و موارد دیگر را پوشش می دهد.
            همیشه برای زبان آموزان و معلمان رایگان است.
          </p>
        </div>
        <div className={divStyle}>
          <Image
            width={50}
            height={50}
            src={""}
            alt={""}
            className="rounded-full mx-auto"
          />
          <h1 className={hStyle}>ابزارهایی برای توانمندسازی معلمان</h1>
          <p className={pStyle}>
            با آکادمی مایلیتوس، معلمان می‌توانند شکاف‌های درک دانش‌آموزان خود را
            شناسایی کنند، آموزش‌ها را تنظیم کنند و نیازهای هر دانش‌آموزی را
            برآورده کنند.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
