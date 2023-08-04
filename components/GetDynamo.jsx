import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetDynamo = () => {
  const [newestItem, setNewestItem] = useState(null);

  useEffect(() => {
    const fetchNewestItem = async () => {
      try {
        const response = await axios.get(
          'https://4ml4bdby25.execute-api.us-east-2.amazonaws.com/getRekognitionDetail',
          {
            params: {  
              origin: 'ctrl-alt-elite-screenshots',
              limit: 1,
              order: 'desc', // To get the newest item, set order to 'desc'
            },
          }
        );

        if (response.data && response.data.length > 0) {
          setNewestItem(response.data[0]);
        } else {
          console.log('No matching items found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNewestItem();
  }, []);

  return (
    <div>
      {newestItem ? (
        <div>
          <h2>Newest Item</h2>
          <p>ID: {newestItem.image_source}</p>
          <p>ID: {newestItem.upload_name}</p>
          <p>ID: {newestItem.timestamp}</p>
          <p>ID: {newestItem.results}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetDynamo;
