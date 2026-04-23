import Image from "next/image";

export default function Lookbook_item({
  variant = "span-1",
  lookbook_image,
  lookbook_name,
  lookbook_link,
}) {
  const lookbookVariant = {
    "span-1": "h-100",
    "span-2": "2xl:h-200 xl:h-200 lg:h-200 md:h-200 sm:h-100 h-100",
  };

  return (
    <>
      <div className="flex flex-col justify-stretch items-start gap-5 w-full">
        <div
          className={`w-full ${lookbookVariant[variant]} overflow-hidden relative`}
        >
          <Image
            src={lookbook_image}
            alt="lookbook-item"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-secondary font-body-primary text-b-l leading-relaxed capitalize max-w-95">
          {lookbook_name}
        </p>
      </div>
      <div className="w-full">
        <a href={lookbook_link}>
          <div className="bg-n-200 p-2.5 flex flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-end">
            <p className="font-secondary font-body-primary text-b-m leading-tight uppercase 2xl:block xl:block lg:block md:block sm:block hidden">
              studi form
            </p>
            <Image
              src="/assets/icons/arrow.svg"
              alt="icon-lookbook-arrow"
              width={24}
              height={24}
            />
          </div>
        </a>
      </div>
    </>
  );
}
