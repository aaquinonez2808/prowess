import axios from "axios";

export const getCourses = async () => {
  const courses = await axios.get("http://localhost:3012/mocc/courses/1");
  return courses.data.courses;
};
