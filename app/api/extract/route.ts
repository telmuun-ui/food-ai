import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: ` "${prompt}"`,
      }),
    });

    const data = await response.json();

    console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));

    const text =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      "";

    return NextResponse.json({ result: text });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
