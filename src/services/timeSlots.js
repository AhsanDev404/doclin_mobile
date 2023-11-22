const ApiURL = process.env.EXPO_PUBLIC_API_URL;

export const getTimeSlotsByConsultantId = async (consultantId) => {
  try {
    const response = await fetch(`${ApiURL}/api/v1/time-slots/consultant/${consultantId}`, {
      method: 'GET',
      headers: {

        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error('Error occurred while fetching consultant time slots:', error);
  }
};
