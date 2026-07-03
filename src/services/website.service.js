export async function getWebsiteData() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/website`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to Fetch Website Data");
    }

    return res.json();
}