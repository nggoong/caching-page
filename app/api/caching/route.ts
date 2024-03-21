import { NextResponse } from "next/server";
export async function GET() {
  const baseurl = process.env.MOCK_DATA_API_URL;
  const res = await fetch(`${baseurl}`);
  const resultData = await res.json();
  
  
  return NextResponse.json({resultData})
}