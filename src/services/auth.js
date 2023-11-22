
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

    

    const responseData = await response.json(); // Parse response JSON
   
    return responseData; // Return parsed response data
  } catch (error) {
    throw new Error('Error occurred while fetching data:', error);
  }
};

export const signupAPI = async (data) => {
  
  try {
   
    const response = await fetch(`${ApiURL}/api/v1/create-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json(); // Parse response JSON
      
    return responseData; // Return parsed response data
  } catch (error) {
    throw new Error('Error occurred while signing up:', error);
  }
};


export const getUserProfile = async (token) => {
  try {
   
    const response = await fetch(`${ApiURL}/api/v1/my-profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error occurred while fetching user profile:', error);
  }
};
export const logoutUser = async (token) => {
  try {
    const response = await fetch(`${ApiURL}/api/v1/signout`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return { success: true, message: 'User logged out successfully' };
  } catch (error) {
    throw new Error('Error occurred while logging out:', error);
  }
};




