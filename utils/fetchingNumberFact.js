// utils/fetchingNumberFact.js

import axios from "axios";

// This file: Used to fetch the external API request
export const fetchedData = async (num, type = "math") => {
  try {
    //   console.log(num);

    const response = await axios.get(`http://numbersapi.com/${num}/${type}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
