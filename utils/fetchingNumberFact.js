// utils/fetchingNumberFact.js

import axios from "axios";
import { response } from "express";

// This file: Used to fetch the external API request
export const fectchedData = (num, type = "math") => {
  try {
    axios.get(`http://numbersapi.com/${num}/math`);
    // const answer = response.text;
    return response.data;
    //  console.log(answer);
  } catch (error) {
    throw error;
  }
};
