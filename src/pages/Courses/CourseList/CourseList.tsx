import MediaCard from "../../../design/MediaCard/MediaCard";
import { Course } from "../hooks/useCourses";

import "./CourseList.scss";

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="courseList">
      {courses.map(({ id, bgColor, image, name }) => (
        <div className="courseCard" key={id}>
          <MediaCard key={id} bgColor={bgColor} imgUrl={image} title={name} />
        </div>
      ))}
    </div>
  );
}
