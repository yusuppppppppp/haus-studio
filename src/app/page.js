import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <section id="section-hero" className="bg-background w-full">
      <div className="w-full">
        <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full gap-140 uppercase pt-2.5">
              <div className="flex flex-row items-start">
                <h1 className=" font-primary text-[240px] leading-none">
                  haus
                </h1>
                <Image
                  className="pt-3"
                  src="assets/images/®.svg"
                  alt="®"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className=" font-primary text-[240px] leading-none">
                studio
              </h1>
            </div>
          </div>
        </div>
    </section>
  );
}
