import axios from "axios";

const url = `${window.location.protocol}//${window.location.hostname}:5000/api`;

export const fetchProducts = async () => {
  //const owner = JSON.parse(localStorage.getItem("ReactUser")) || {_id: "6248c185edecfe81bbf95d6d"};
  const { data } = await axios.get(`${url}/products`, {
    params: { owner: "6248c185edecfe81bbf95d6d" },
  });
  return data;
};

export const getProduct = async (id) => {
  const { data } = await axios.get(`${url}/products/${id}`);
  return data;
};

export const createProduct = async (product) => {
  await axios.post(`${url}/products`, product);
};

export const uploadFile = async (file) => {
  await axios.post(`${url}/upload`, file);
};

export const updateProduct = (productId, productData) => {
  axios.put(`${url}/products/${productId}`, productData);
};

export const deleteProduct = async (product) => {
  await axios.delete(`${url}/products/${product}`);
};
