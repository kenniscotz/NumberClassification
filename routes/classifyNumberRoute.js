import { Router } from "express";
import { fetchedData } from "../utils/fetchingNumberFact.js";
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
    const funFact = await fetchedData(num);

    const response = {
      number: num,
      is_Prime: isPrime(num),
      is_Perfect: isPerfect(num),
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
    throw Error(errors);
  }
});

export default route;
