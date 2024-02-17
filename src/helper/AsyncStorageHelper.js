import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageHelper = {
  storeUserData: async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu người dùng:', error);
    }
  },

  getUserData: async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng:', error);
      return null;
    }
  },

  clearUserData: async () => {
    try {
      await AsyncStorage.removeItem('userData');
    } catch (error) {
      console.error('Lỗi khi xóa dữ liệu người dùng:', error);
    }
  },
};

export default AsyncStorageHelper;
