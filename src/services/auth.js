import axios from 'axios';

const ApiURL = process.env.EXPO_PUBLIC_API_URL;

// api.js

export const loginAPI = async (data) => {
  try {
    const response = await fetch(`${ApiURL}/api/v1/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error occurred while fetching data:', error);
  }
};



