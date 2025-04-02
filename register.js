import axios from "axios";

const register = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
      email: "22053101@kiit.ac.in.com",
      name: "Sanjana Biswas",
      mobileNo: "9064347556",
      githubusername: "Sanj3101",
      rollNo: "22053101",
      collegeName: "Kalinga Institute of Industrial Technology",
      accessCode: "nwpwrZ"
    });

    console.log("Success", response.data);
  } catch (error) {
    console.error("error", error.response ? error.response.data : error.message);
  }
};

register();
