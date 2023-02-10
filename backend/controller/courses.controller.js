import MoodleConnect from "../utility/moodle-connect.js";

export const getCourses = (req, res) => {
  try {
    MoodleConnect.then((client) => {
      client
        .call({
          wsfunction: "core_course_get_courses_by_field",
          args: {
            field: "",
          },
        })
        .then(function (courses) {
          return res.status(200).json(courses);
        });
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
