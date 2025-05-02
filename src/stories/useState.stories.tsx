import React, {ChangeEvent, useState} from 'react'

export default {
    title: "useState",
}

export const Courses = () => {
    const [courses, setCourses] = useState<Array<string>>([])
    const [value, setValue] = useState("")
    console.log(courses.map(c => 11))

    const addCourseHandler = () => {
        const newCourses = [value, ...courses]
        setCourses(newCourses)
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <input type="text" value={value} onChange={inputHandler}/>
        <button onClick={addCourseHandler}>Add course</button>
        <ul>
            {courses.map((c, index) => <li key={index}>{c}</li>)}
        </ul>
    </>
}

