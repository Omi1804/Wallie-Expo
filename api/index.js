import axios from "axios";

const API_KEY = "27654973-2f8d76b686059b353c63cee94";
const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

//this will create the url
const formatUrl = (params) => {
  //{q, page, category , order}
  //adding 25 image limit , safe search(recommended) and images only have editor's award--> including these we make the url
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";

  //if no params comes (i.e., no filter)
  if (!params) {
    return url;
  }

  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  // console.log("final url: ", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
