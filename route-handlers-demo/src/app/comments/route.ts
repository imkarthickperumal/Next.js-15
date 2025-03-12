import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
  }
  
export async function POST(request: Request) {
  const body = await request.json(); // Extract request body
  const newComment = {
    id: comments.length + 1,
    text: body.text, // Use body.text instead of comments.text
  };

  comments.push(newComment); // Ensure comments is a mutable array

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
