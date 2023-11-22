const ApiURL = process.env.EXPO_PUBLIC_API_URL;

export const getAllConsultants = async (token) => {
    try {
      const response = await fetch(`${ApiURL}/api/v1/consultants`, {
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
      throw new Error('Error occurred while fetching consultants:', error);
    }
  };
  