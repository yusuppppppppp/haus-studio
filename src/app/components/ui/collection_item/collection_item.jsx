import Image from "next/image";

export default function Collection_item({images_path}) {
  return (
    <div className="2xl:w-55 xl:w-55 lg:w-55 md:w-70 sm:w-70 w-70 2xl:h-85 xl:h-85 lg:h-85 md:h-130 sm:h-110 h-110">
      <Image
        className="object-contain relative"
        src={images_path}
        alt="collection_item_image"
        fill
      />
    </div>
  );
}
