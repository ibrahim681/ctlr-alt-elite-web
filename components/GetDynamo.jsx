import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetDynamo = () => {
  const [newestItem, setNewestItem] = useState(null);

//   useEffect(() => {
//     results = newestItem
//     console.log(results)
//   }, [newestItem]);

const preprocessResult = (result) => {
    return JSON.stringify(result, (key, value) => {
      if (key === "Name") {
        return `{\n}${JSON.stringify(key)}: ${JSON.stringify(value)}`;
      }
      return value;
    }, 2);
  };

  useEffect(() => {
    const fetchNewestItem = async () => {
      try {
        const response = await axios.get(
          'https://4ml4bdby25.execute-api.us-east-2.amazonaws.com/getRekognitionDetail')

  
        if (response.data && response.data.length > 0) {
          const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
          setNewestItem(sortedData.slice(-1));
          //console.log(sortedData.slice(-1))
        } else {
          console.log('No matching items found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    //need to do a refresh every 20 seconds or so
    const interval = setInterval(fetchNewestItem, 20000);
    // Initial fetch
    fetchNewestItem();

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {newestItem ? (
        <div>
          <h2>Newest Item</h2>
            <img src={newestItem[0].image_source} alt="Newest Item Image" />
          <p>{newestItem[0].name}</p>
          <p>Results: </p>
          <p>{preprocessResult(newestItem[0].result)}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetDynamo;
