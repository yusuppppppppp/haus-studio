import Image from "next/image";

export default function Collection_item({images_path}) {
  return (
    <div className="w-55 h-85">
      <Image
        className="object-contain relative"
        src={images_path}
        alt="collection_item_image"
        fill
      />
    </div>
  );
}
