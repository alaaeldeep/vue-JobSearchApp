import axios from "axios";

export const getJobs = async () => {
    const response = await axios.get("http://localhost:3000/jobs");
    return response.data;
};
