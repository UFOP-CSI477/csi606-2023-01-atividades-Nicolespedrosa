import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Substitua pela URL do seu backend

const CartService = {
  createCart: async () => {
    try {
      const response = await axios.post(`${API_URL}/cart`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addItemToCart: async (itemId) => {
    try {
      const response = await axios.post(`${API_URL}/cart/add`, { itemId });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeItemFromCart: async (itemId) => {
    try {
      const response = await axios.delete(`${API_URL}/cart/${itemId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCartItemQuantity: async (itemId, quantity) => {
    try {
      const response = await axios.put(`${API_URL}/cart/${itemId}`, { quantity });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserCart: async () => {
    try {
      const response = await axios.get(`${API_URL}/cart`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CartService;
