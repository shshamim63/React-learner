import axios from "axios";

const baseUel = "http://localhost:8080/questions";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(baseUel);
    return response.data;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
