import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Atualize com a URL correta do seu backend

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: getAuthHeaders(),
});

const handleResponse = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const PersonService = {
  createPerson: (personData) =>
    handleResponse(axiosInstance.post("/pessoas", personData)),
  getPersons: () => handleResponse(axiosInstance.get("/pessoas")),
  getPersonByUserId: async (userId) => {
    console.log("ID do usuário passado para o serviço:", userId);
    try {
      const response = await axiosInstance.get(`/pessoas/byUserId/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updatePerson: (id, personData) =>
    handleResponse(axiosInstance.put(`/pessoas/${id}`, personData)),
  deletePerson: (id) => handleResponse(axiosInstance.delete(`/pessoas/${id}`)),
};

export default PersonService;
