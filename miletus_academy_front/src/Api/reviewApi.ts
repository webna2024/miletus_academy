import { promises as fs } from "fs";

export const FetchReviews = async () => {
  const file = await fs.readFile(process.cwd() + "/src/db/review.json", "utf8");
  const data = JSON.parse(file);
  return data;
};
