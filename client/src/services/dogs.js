import api from "./apiConfig.js";

export const getDogs = async () => {
  try {
    const response = await api.get("/dogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdoptedDogs = async () => {
  try {
    const response = await api.get("/adopted-dogs");
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

export const adoptDog = async (id) => {
  try {
    const response = await api.put(`/dogs/adopt/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const unAdoptDog = async (id) => {
  try {
    const response = await api.put(`/dogs/unadopt/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
