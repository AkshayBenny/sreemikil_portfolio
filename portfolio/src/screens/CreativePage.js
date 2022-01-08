import React from 'react';
import { useParams } from 'react-router-dom';
import { creativeProjectData } from '../data';

function CreativePage() {
  const { id } = useParams();
  creativeProjectData
    .find((item) => item.id === id)
    .map((i) => {
      return 
    });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default CreativePage;
