import axios from "axios"

export async function POST(request: Request) {
  console.log("lock")
  const data = await axios.get("http://140.238.188.122:3052/lock").then(response => response.data)
  return Response.json({ data }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
}