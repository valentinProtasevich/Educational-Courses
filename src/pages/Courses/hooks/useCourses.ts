import { useState, useEffect } from "react";
import axios from "axios";

export interface Course {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export default function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>(
          "https://logiclike.com/docs/courses.json"
        );

        const uniqueTags = Array.from(
          new Set(
            response.data.reduce((acc, course) => {
              return acc.concat(course.tags);
            }, [] as string[])
          )
        );

        setCourses(response.data);
        setTags(uniqueTags);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, tags, loading, error };
}
