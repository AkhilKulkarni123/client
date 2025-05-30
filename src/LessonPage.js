import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LessonPage() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/lessons/${id}`)
      .then((res) => res.json())
      .then((data) => setLesson(data));
  }, [id]);

  if (!lesson) return <div>Loading...</div>;

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
    </div>
  );
}

export default LessonPage;
