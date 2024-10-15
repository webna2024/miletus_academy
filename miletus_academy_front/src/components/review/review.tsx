import Image from "next/image";
import Title from "@/components/title/title";
import { FetchReviews } from "@/Api/reviewApi";
import { Review as reviewInterface } from "@/interfaces/course";

const Review = async () => {
  const data = await FetchReviews();
  return (
    <section>
      <Title title={"مهارت هایی که دیگران در این اموزش ها بدست اوردند"} />
      <div className="flex flex-row justify-between">
        {data.map((review: reviewInterface) => (
          <div
            key={review.id}
            className="flex flex-col justify-between border rounded-3xl w-60 h-60 p-5">
            <span className="text-4xl  -mt-3">،،</span>
            <p className="text-justify text-sm overflow-hidden ">
              {review.text}
            </p>
            <div className="flex flex-row items-center gap-2">
              <Image
                width={35}
                height={35}
                src=""
                alt=""
                className="border border-black rounded-full"
              />
              <p>{review.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
