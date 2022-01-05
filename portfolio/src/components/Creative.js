import React from 'react';
import CreativeCard from './CreativeCard';
import { creativeData } from '../data';

function Creative() {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <h1>All Creative Works</h1>
      </div>
      {creativeData.map((item) => {
        return (
          <CreativeCard
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
          />
        );
      })}
    </div>
  );
}

export default Creative;
