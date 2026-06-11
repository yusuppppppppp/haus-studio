import { supabase } from "../lib/supabase";

export async function getWebsiteData() {
    const [sectionRes, lookbookItemsRes] = await Promise.all([
        supabase.from("web_sections").select("*"),

        supabase
            .from("lookbook_items")
            .select("*")
            .eq("is_published", true),
    ]);

    if (sectionRes.error) throw sectionRes.error;
    if (lookbookItemsRes.error) throw lookbookItemsRes.error;

    console.log(sectionRes.data);

    const sectionMap = {};

    sectionRes.data.forEach((section) => {
        sectionMap[section.section_slug] = {
            id: section.id,
            ...(section.ui_payload || {}),
        };
    });

    if (sectionMap.lookbook) {
        sectionMap.lookbook.items = lookbookItemsRes.data;
    }

    console.log(sectionMap)

    return sectionMap;
}