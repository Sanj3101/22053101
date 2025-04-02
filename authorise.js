import fetch from "node-fetch";

async function getAuthToken() {
  const response = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: '22053101@kiit.ac.in.com',
        name: 'sanjana biswas',
        rollNo: '22053101',
        accessCode: 'nwpwrZ',
        clientID: 'c35b8b0a-6886-4f7b-b78d-7a3f55463d6c',
        clientSecret: 'truNWWXPWRCKvtUY'
      
    })
  });

  if (!response.ok) {
    console.error("Failed to fetch token:", response.status, response.statusText);
    return;
  }

  const data = await response.json();
  console.log("Token:", data["access_token"]);
  return data["access_token"];
}

getAuthToken();