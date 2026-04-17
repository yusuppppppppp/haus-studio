export default function Lookbook_item(lookbook_image, lookbook_name, lookbook_link) {
  return (
    <div className="col-span-1 p-2 flex flex-col gap-13 justify-stretch items-start border-n-300 border">
      <div className="flex flex-col justify-stretch items-start gap-5">
        <div className="w-95 h-100 relative">
          <Image
            src={lookbook_image}
            alt="lookbook-item"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-secondary font-body-primary text-b-l leading-relaxed capitalize">
          {lookbook_name}
        </p>
      </div>
      <a 
      href={lookbook_link}
      >
      <div className="bg-n-200 p-2.5 flex flex-row justify-between items-center w-full">
        <p className="font-secondary font-body-primary text-b-m leading-tight uppercase">
          studi form
        </p>
        <Image
          src="/assets/icons/icon-lookbook-btn.svg"
          alt="icon-lookbook-arrow"
          width={24}
          height={24}
        />
      </div>
      </a>
    </div>
  );
}
