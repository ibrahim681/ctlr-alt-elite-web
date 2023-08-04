import React, { useState } from 'react';
import GetDynamo from '../../components/GetDynamo';

const User = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <h1>Auto Feed</h1>
      <button onClick={handleClick}>Show Newest Item</button>
      {showComponent && <GetDynamo />}
    </div>
  );
};

export default User;
