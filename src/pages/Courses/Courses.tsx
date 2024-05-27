import { useState } from "react";

import useCourses from "./hooks/useCourses";
import NavBar from "../../reusable/NavBar/NavBar";
import CourseList from "./CourseList/CourseList";

import "./Courses.scss";

export default function Courses() {
  const { courses, tags, loading, error } = useCourses();
  const [selectedTag, setSelectedTag] = useState<string>("Все темы");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredCourses =
    selectedTag === "Все темы"
      ? courses
      : courses.filter((course) => course.tags.includes(selectedTag));

  return (
    <div className="courses">
      <div className="navBar">
        <NavBar
          options={["Все темы", ...tags]}
          onSelect={setSelectedTag}
          selectedOption={selectedTag}
        />
      </div>
      <CourseList courses={filteredCourses} />
    </div>
  );
}
