export async function sendContact(data) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to Send Email")
    }

    return res.json();
}