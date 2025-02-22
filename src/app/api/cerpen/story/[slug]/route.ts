import cerpenData from "../../raw.json";
import { NextResponse } from "next/server";
import apiResponseType from "@/types/apiResponseType";

export const GET = async (req: Request, context: { params: { slug?: string } }) => {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { 
        status: false, 
        data: "Slug is required"
      },
      { status: 400 }
    );
  }

  const story = cerpenData.find((item) => item.slug === slug);

  if (story) {
    return NextResponse.json<apiResponseType>({
      status: true,
      data: story
    }, { status: 200 });
  } else {
    return NextResponse.json<apiResponseType>(
      { 
        status: false, 
        data: "Story not found" 
      },
      { status: 404 }
    );
  }
};
