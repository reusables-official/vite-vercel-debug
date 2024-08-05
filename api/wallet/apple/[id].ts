import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as path from "path";
export const headers = [
  {
    source: "/api/wallet/(.*)",
    headers: [
      { key: "Access-Control-Allow-Credentials", value: "true" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      {
        key: "Access-Control-Allow-Methods",
        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      },
      {
        key: "Access-Control-Allow-Headers",
        value:
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    ],
  },
];

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const imagesDir = path.join(process.cwd(), "api", "wallet", "_img");
    return response
      .status(200)
      .setHeader("Content-Type", "application/json")
      .send({ data: imagesDir });
  } catch (error: any) {
    return response
      .status(400)
      .setHeader("Content-Type", "application/json")
      .json({ error: error.message });
  }
}
