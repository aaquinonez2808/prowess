import React from 'react'
import FormCourse from '../components/courses/FormCourse'

const CoursePageForm = ({claseActiva}) => {
  return (
   <div className={`p-4 my-container ${claseActiva===""? "":claseActiva}`}>
   <h1 className='text-center'>CREAR CURSO</h1>
        <FormCourse className=''/>
    </div>
  )
}

export default CoursePageForm