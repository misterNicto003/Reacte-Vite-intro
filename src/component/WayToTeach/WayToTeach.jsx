import React from 'react'

const WayToTeach = ({title, description}) => {
  return (
    <li>
        <p>
          <strong>{title} </strong>
          {description}
        </p>
      </li>
    );
  }

export default WayToTeach