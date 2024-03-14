export async function GET(request: Request) {
  // const data = await axios.get("http://140.238.188.122:3052/lock").then(response => response.data)
  const fetchData = await fetch("http://140.238.188.122:3052/unlock", { next: { revalidate: 1 } }).then(response => response.json())
  console.log("unlock")
  return Response.json({ fetchData })
}