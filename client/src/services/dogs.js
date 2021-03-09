import api from "./apiConfig.js";

export const getDogs = async () => {
  try {
    const response = await api.get("/dogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDog = async (id) => {
  try {
    const response = await api.get(`/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDog = async (dog) => {
  try {
    const response = await api.post("/dogs", dog);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDog = async (id, dog) => {
  try {
    const response = await api.put(`/dogs/${id}`, dog);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDog = async (id) => {
  try {
    const response = await api.delete(`/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
