import { NextResponse } from "next/server";
import cerpenData from "../../raw.json";
import apiResponseType from "@/types/apiResponseType";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  if (!slug) {
    return NextResponse.json(
      { status: false, data: "Slug is required" },
      { status: 400 }
    );
  }

  const story = cerpenData.find((item) => item.slug === slug);

  if (story) {
    return NextResponse.json<apiResponseType>(
      { status: true, data: story },
      { status: 200 }
    );
  } else {
    return NextResponse.json<apiResponseType>(
      { status: false, data: "Story not found" },
      { status: 404 }
    );
  }
}
