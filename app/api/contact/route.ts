
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // This URL should be set in your Vercel Environment Variables
        // GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
        const scriptUrl = "https://script.google.com/macros/s/AKfycbxbc2Mvx1a5dHib0hM8D9VqcfzTMsqaEC4iTPF9HqGmEl7ypUce5dbZqGhCb_fntI_P/exec";

        if (!scriptUrl) {
            // Fallback for demo/development if env not set (User needs to configure this)
            console.error("GOOGLE_SCRIPT_URL environment variable is missing");
            return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
        }

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok && data.status === "success") {
            return NextResponse.json({ success: true, id: data.id });
        } else {
            return NextResponse.json({ success: false, message: "Failed to submit to external system" }, { status: 500 });
        }

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
