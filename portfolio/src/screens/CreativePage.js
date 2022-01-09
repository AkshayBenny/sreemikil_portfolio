import React from 'react';
import { useParams } from 'react-router-dom';
import { creativeProjectData } from '../data';

function CreativePage() {
  const { id } = useParams();
  const param = useParams();
  console.log('hello');

  return (
    <div>
      {creativeProjectData.find((item) => item.id === id)}
      <h1>hello</h1>
    </div>
  );
}

export default CreativePage;
