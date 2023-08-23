import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Substitua pela URL do seu backend

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`
  };
};

const BookService = {
  createBook: async (bookData) => {
    try {
      const response = await axios.post(`${API_URL}/books`, bookData, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllBooks: async () => {
    try {
      const response = await axios.get(`${API_URL}/books`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllNoAuthBooks: async () => {
    try {
      const response = await axios.get(`${API_URL}/booksnoauth`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getBooksByTitle: async (title) => {
    try {
      const response = await axios.get(`${API_URL}/books/search`, {
        params: { title },
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getBookById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/books/${id}`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  purchaseBook: async (id) => {
    try {
      const response = await axios.post(`${API_URL}/books/${id}/purchase`, null, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteBook: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/books/${id}`, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateBook: async (id, bookData) => {
    try {
      const response = await axios.put(`${API_URL}/books/${id}`, bookData, {
        headers: getAuthHeaders() // Adicione o cabeçalho de autenticação
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default BookService;
