// src/app/api/route/route.js

import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { profile_link, bonus, flag } = body;

    // console.log("Sending to backend with:", profile_link, bonus);

    const response = await axios.post(process.env.SECRET_BACKEND_URL, {
      profile_link,
      bonus,
      flag
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_SECRET}`,
      },
    });
    

    return new Response(JSON.stringify({ data: response.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Backend call failed:", error.message);
    return new Response(
      JSON.stringify({
        error: "Internal Error",
        details: error.response?.data || error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
