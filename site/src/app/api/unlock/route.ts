import axios from "axios"

export async function POST(request: Request) {
  console.log("unlock")
  const data = await axios.get("http://140.238.188.122:3052/unlock").then(response => response.data)
  return Response.json({ data })
}