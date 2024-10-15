import clsx from "clsx";
const MiletusFeatures = () => {
  const divStyle = clsx("space-y-5 w-fit");
  const hStyle = clsx("text-xl font-bold");
  const ulStyle = clsx("list-disc pr-10 space-y-5");
  return (
    <section className="space-y-10">
      <div className={divStyle}>
        <h1 className={hStyle}>با مایلیتوس شما میتوانید:</h1>
        <ul className={ulStyle}>
          <li>
            بدون توجه به موقعیت مکانی شما، کلاس های آنلاین زنده را با کلاس مجازی
            ما برگزار کنید
          </li>
          <li>
            آکادمی آنلاین خود را برای مدیریت دوره ها، محتوا و فراگیران خود ایجاد
            کنید
          </li>
          <li>
            به راحتی آموزش سنتی سنتی را با یادگیری آنلاین مدیریت و ترکیب کنید
          </li>
        </ul>
      </div>
      <div className={`${divStyle} mr-[50%]`}>
        <h1 className={hStyle}>هدف های دوره های مایلیتوس:</h1>
        <ul className={ulStyle}>
          <li>
            بدون توجه به موقعیت مکانی شما، کلاس های آنلاین زنده را با کلاس مجازی
            ما برگزار کنید
          </li>
          <li>
            آکادمی آنلاین خود را برای مدیریت دوره ها، محتوا و فراگیران خود ایجاد
            کنید
          </li>
          <li>
            به راحتی آموزش سنتی سنتی را با یادگیری آنلاین مدیریت و ترکیب کنید
          </li>
        </ul>
      </div>
      <div className={divStyle}>
        <h1 className={hStyle}>برتری کلاس های مجازی:</h1>
        <ul className={ulStyle}>
          <li>
            بدون توجه به موقعیت مکانی شما، کلاس های آنلاین زنده را با کلاس مجازی
            ما برگزار کنید
          </li>
          <li>
            آکادمی آنلاین خود را برای مدیریت دوره ها، محتوا و فراگیران خود ایجاد
            کنید
          </li>
          <li>
            به راحتی آموزش سنتی سنتی را با یادگیری آنلاین مدیریت و ترکیب کنید
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MiletusFeatures;
