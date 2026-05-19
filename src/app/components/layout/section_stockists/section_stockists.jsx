import Image from "next/image";
import Stagger_word from "../../ui/stragger_word/stragger_word";

export default function Section_stockists({ stockists }) {
  return (
    <>
      <div className="relative 2xl:h-[500vh] xl:h-[500vh] lg:h-[500vh] md:h-[500vh] sm:h-auto h-auto">
        <section
          id="section_stockists"
          className="bg-foreground px-section overflow-hidden pb-25 pt-8 2xl:h-[130vh] xl:h-[165vh] lg:h-[165vh] md:h-[135vh] sm:h-auto h-auto 2xl:sticky xl:sticky lg:sticky md:sticky sm:relative relative top-0"
        >
          <div className="w-full h-full max-w-400 mx-auto ">
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-start w-full 2xl:gap-40 xl:gap-20 lg:gap-20 md:gap-20 sm:gap-30 gap-30">
              <div className="flex flex-col justify-end item-start 2xl:max-w-75 xl:max-w-85 lg:max-w-75 md:max-w-75 sm:max-w-72 max-w-70">
                <Stagger_word
                  delay={0.3}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 text-end 2xl:pl-23 xl:pl-10 lg:pl-0 md:pl-23 sm:pl-23 pl-23"
                >
                  {stockists.stockists_label1}
                </Stagger_word>
                <Stagger_word
                delay={0.4}
                as="p" 
                className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100">
                  {stockists.stockists_label2}
                </Stagger_word>
              </div>
              <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-stretch items-start gap-5 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto w-full">
                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-50 xl:w-50 lg:w-50 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-0 pt-0">
                  <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-65 h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                      {stockists.stockists_item_label1}
                    </p>
                    <Image
                      src={stockists.stockists_number1}
                      alt="number_1"
                      width={200}
                      height={200}
                      className="2xl:pr-10 xl:pr-10 lg:pr-10 md:pr-10 sm:pr-0 pr-0 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15 self-end"
                    />
                  </div>
                  <div className="flex flex-col justify-stretch items-start gap-5">
                    <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                      {stockists.stockists_heading1}
                    </p>
                    <div className="flex flex-col justify-stretch items-start gap-3.5">
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item1_paragraph1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item1_paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-40 xl:pt-40 lg:pt-40 md:pt-40 sm:pt-0 pt-10">
                  <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-92 w-full pb-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                      {stockists.stockists_item_label2}
                    </p>
                    <Image
                      src={stockists.stockists_number2}
                      alt="number_2"
                      width={240}
                      height={240}
                      className="2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                    />
                  </div>
                  <div className="flex flex-col justify-stretch items-start gap-5">
                    <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                      {stockists.stockists_heading2}
                    </p>
                    <div className="flex flex-col justify-stretch items-start gap-3.5">
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item2_paragraph1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item2_paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-10">
                  <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                      {stockists.stockists_item_label3}
                    </p>
                    <Image
                      src={stockists.stockists_number3}
                      alt="number_3"
                      width={240}
                      height={240}
                      className="2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                    />
                  </div>
                  <div className="flex flex-col justify-stretch items-start gap-5">
                    <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                      {stockists.stockists_heading3}
                    </p>
                    <div className="flex flex-col justify-stretch items-start gap-3.5">
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item3_paragraph1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item3_paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-85 xl:pt-85 lg:pt-85 md:pt-85 sm:pt-0 pt-10">
                  <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-70 w-full pb-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                      {stockists.stockists_item_label4}
                    </p>
                    <Image
                      src={stockists.stockists_number4}
                      alt="number_4"
                      width={240}
                      height={240}
                      className="2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                    />
                  </div>
                  <div className="flex flex-col justify-stretch items-start gap-5">
                    <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                      {stockists.stockists_heading4}
                    </p>
                    <div className="flex flex-col justify-stretch items-start gap-3.5">
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item4_paragraph1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                        {stockists.stockists_item4_paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
