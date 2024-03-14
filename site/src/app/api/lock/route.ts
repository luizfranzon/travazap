import axios from "axios"

export async function GET(request: Request) {
  const data = await axios.get("http://140.238.188.122:3052/lock").then(response => response.data)
  return Response.json(data)
}