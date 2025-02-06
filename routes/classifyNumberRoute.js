import { Router } from "express";
import fectchedData from "../routes/classifyNumberRoute.js";
import { isArmstrong, isPerfect, isPrime, sumOfDigits } from "../utils/help.js";

const route = Router();

route.get("/api/v1/classify", async (req, res) => {
  const { number } = req.query;

  //  Validating Input
  if (!number || isNaN(number)) {
    return res.status(400).json({
      messsage: "Invalid input. Provide a valid number",
    });
  }

  // Converts the input into a number
  const num = parseInt(number);

  try {
    const funFact = await fectchedData(num, "math");

    const response = {
      number: num,
      isPrime: isPrime(num),
      isPerfect: isPerfect(num),
      properties: [],
      digit_sum: sumOfDigits(num),
      fun_facts: funFact,
    };

    // Adding the properties

    if (num % 2 === 0) response.properties.push("even");
    else response.properties.push("odd");
    if (isArmstrong(num)) response.properties.push("armstrong");

    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
});

export default route;
