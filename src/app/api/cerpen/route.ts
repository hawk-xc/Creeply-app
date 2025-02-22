import cerpenData from "./raw.json";
import { NextResponse } from "next/server";

const GET = async () => {
  return NextResponse.json({
    status: true,
    data: cerpenData,
  });
};

export { GET };
