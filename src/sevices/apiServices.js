import Toast from 'react-native-toast-message';


export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await fetch(`https://trip-aura-server.vercel.app/booking/api/update/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    const data = await response.json();
    if (data.code === 200) {
      Toast.show({
        type: 'success',
        text1: 'Cập nhật booking thành công',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Cập nhật thất bại',
      });
    }
  } catch (error) {
    console.error('Error updating booking status:', error);
    Toast.show({
      type: 'error',
      text1: 'Có lỗi xảy ra khi cập nhật',
    });
  }
};


export const updateMaxTicket = async (detailId, ticker) => {
  try {
    const response = await fetch(`https://trip-aura-server.vercel.app/detail/api/updateTicket/${detailId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ maxTicket: ticker }),
    });
    console.log('response', response);
    
    const responseData = await response.json();
    console.log('responseData', responseData);
    
    if (responseData.code === 200) {
      return responseData.payload;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error updating max ticket:', error);
    return null;
  }
};


