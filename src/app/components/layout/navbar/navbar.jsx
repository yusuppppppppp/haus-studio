import Image from "next/image";

export default function Navbar() {
  return (
    <section className="h-screen z-99 fixed left-auto right-0 top-0 bottom-0 translate-x-[89%]">
      <div className="w-full h-full mx-auto border">
        <div className="h-full flex flex-row justify-center items-center">
            <div className="px-3 py-4 border border-t-2 border-l-2 border-r-0 border-b-2 border-n-300 -mr-0.5 bg-background z-1">
                <Image
                src="/assets/icons/nav_menu.svg"
                alt="nav_hamburger_menu"
                width={24}
                height={24}
                />
            </div>
            <div className="border border-l-2 border-n-300 h-screen p-section flex flex-col justify-between items-stretch bg-background">
                <div className="flex flex-col justify-start items-stretch gap-3">
                    <a 
                    href="https://webflow.com/templates/html/hauss-website-template"
                    className="flex flex-row justify-start items-end p-2.5 w-90 h-20 overflow-hidden bg-n-100 rounded-sm border border-n-300">
                        <h2 className="font-secondary font-body-primary text-h6 leading-tight text-n-500 capitalize">
                            home
                        </h2>
                    </a>
                    <a 
                    href="https://webflow.com/templates/html/hauss-website-template"
                    className="flex flex-row justify-start items-end p-2.5 w-90 h-20 overflow-hidden bg-n-100 rounded-sm border border-n-300">
                        <h2 className="font-secondary font-body-primary text-h6 leading-tight text-n-500 capitalize">
                            collections
                        </h2>
                    </a>
                    <a 
                    href="https://webflow.com/templates/html/hauss-website-template"
                    className="flex flex-row justify-start items-end p-2.5 w-90 h-20 overflow-hidden bg-n-100 rounded-sm border border-n-300">
                        <h2 className="font-secondary font-body-primary text-h6 leading-tight text-n-500 capitalize">
                            about
                        </h2>
                    </a>
                    <a 
                    href="https://webflow.com/templates/html/hauss-website-template"
                    className="flex flex-row justify-start items-end p-2.5 w-90 h-20 overflow-hidden bg-n-100 rounded-sm border border-n-300">
                        <h2 className="font-secondary font-body-primary text-h6 leading-tight text-n-500 capitalize">
                            stockists
                        </h2>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
