import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://20.244.56.144/train/all';
    const clientID = 'your-client-id'; // Replace with your actual clientID
    const clientSecret = 'your-client-secret'; // Replace with your actual clientSecret

    const fetchTrains = async () => {
      try {
        const response = await axios.get(apiUrl, {
          auth: {
            username: "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",
            password: "XOyolORPayKBODAN"
,
          },
        });
        setTrains(response.data.trains);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      {/* Render the train data as before */}
    </div>
  );
};

export default TrainList;
