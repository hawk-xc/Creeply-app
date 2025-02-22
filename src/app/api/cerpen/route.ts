import cerpenData from "./raw.json";
import apiResponseType from "@/types/apiResponseType";
import { NextResponse } from "next/server";

const GET = async () => {
  return NextResponse.json<apiResponseType>({
    status: true,
    data: cerpenData,
  }, {
    status: 200
  });
};

export { GET };
