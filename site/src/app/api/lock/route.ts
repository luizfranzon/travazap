export async function GET(request: Request) {
  // const data = await axios.get("http://140.238.188.122:3052/lock").then(response => response.data)
  const fetchData = await fetch("http://140.238.188.122:3052/lock", { next: { revalidate: 0 } }).then(response => response.json())
  console.log("lock")
  return Response.json({ fetchData })
}