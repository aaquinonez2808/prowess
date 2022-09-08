import React from "react";
import TableCourse from "../components/courses/TableCourse";

const CoursePageList = () => {
  return (
    <div
      className={'p-4 my-container'}
    >
      <h1 className="text-center mb-5">LISTA DE CURSOS</h1>
      <TableCourse />
    </div>
  );
};

export default CoursePageList;
