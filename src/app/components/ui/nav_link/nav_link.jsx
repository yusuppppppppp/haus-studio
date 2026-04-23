import Image from "next/image";

export default function Nav_link({
  nav_link,
  nav_text,
  nav_icon,
  variant = "text",
}) {
  const baseStyle =
    "flex flex-row justify-start items-end overflow-hidden bg-n-200 rounded-sm border border-n-300";

  const sizeStyle = variant === "icon" ? "p-1.5" : "p-2.5 w-90 h-20";

  return (
    <a
      href={nav_link}
      className={`${baseStyle} ${sizeStyle}`}
    >
      <div className="flex flex-row justify-start items-center gap-2">
        {(variant === "text" || variant === "text-icon") && nav_text && (
          <h2 className="font-secondary font-body-primary text-h6 leading-tight text-n-500 capitalize">
            {nav_text}
          </h2>
        )}

        {(variant === "icon" || variant === "text-icon") && nav_icon && (
          <Image src={nav_icon} alt="icon_nav" width={12} height={12} />
        )}
      </div>
    </a>
  );
}
