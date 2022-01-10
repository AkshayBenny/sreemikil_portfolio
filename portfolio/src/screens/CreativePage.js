import React from 'react';
import { useParams } from 'react-router-dom';
import { creativeProjectData } from '../data';

function CreativePage() {
  const { id } = useParams();
  const project = creativeProjectData.find((project) => project.id === id);
  console.log(project);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default CreativePage;
