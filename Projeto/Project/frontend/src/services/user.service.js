import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Substitua pela URL do seu backend

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const UserService = {
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserProfile: async () => {
    try {
      const response = await axios.get(`${API_URL}/userProfile`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async () => {
    try {
      const response = await axios.delete(`${API_URL}/deleteUser`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
