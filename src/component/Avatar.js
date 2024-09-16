import React from 'react';
import { getImageUrl } from './utils'; // Import the getImageUrl function
function Avatar({ person, size }) {

  return (
    <div>
      <img
        src={getImageUrl(person, size)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

export default Avatar;