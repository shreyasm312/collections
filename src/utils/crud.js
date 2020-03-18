///GETAPI
export const getAPI = key => {
  try {
    let response = JSON.parse(localStorage.getItem(key));
    return response;
  } catch (error) {
    throw new error(error);
  }
};

/////POSTAPI
export const postAPI = ({ data }, key) => {
  try {
    let response = localStorage.setItem(key, data);
    return response.data;
  } catch (error) {
    throw new error(error);
  }
};
