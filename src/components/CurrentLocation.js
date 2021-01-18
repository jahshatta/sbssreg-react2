import React from 'react';
import { useLocation } from 'wouter';

const CurrentLocation = () => {
  const [location, setLocation] = useLocation();

  return (
    <div>
      {`The current page is: ${location}`}
      <button onClick={() => setLocation('/somewhere')}>Click to update</button>
    </div>
  );
};

export default CurrentLocation;
