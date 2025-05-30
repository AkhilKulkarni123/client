import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/lessons')
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);

  return (
    <div>
      <h1>Python & Math Lessons</h1>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
