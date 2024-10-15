import { promises as fs } from "fs";

export const FetchCourses = async () => {
  const file = await fs.readFile(process.cwd() + "/src/db/courses.json", "utf8");
  const data = JSON.parse(file);
  return data;
};
