export const getStockistsCard = ({
  stockists,
  stockistsCard1,
  stockistsCard2,
  stockistsCard3,
  stockistsCard4,
}) => [
  {
    y: stockistsCard1,
    label: stockists.stockists_item_label1,
    number: stockists.stockists_number1,
    heading: stockists.stockists_heading1,
    paragraph1: stockists.stockists_item1_paragraph1,
    paragraph2: stockists.stockists_item1_paragraph2,

    imageWidth: 200,
    imageHeight: 200,
    alt: "number_1",
    cardClassName: "lg:w-50 w-full",
    imageWrapperClassName:
      "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 md:h-auto sm:h-65 h-50 md:w-auto sm:w-85 w-full pb-5",
    imageClassName:
      "md:pr-10 pr-0 md:pl-0 sm:pl-10 pl-0 sm:w-full w-15 self-end",
  },

  {
    y: stockistsCard2,
    label: stockists.stockists_item_label2,
    number: stockists.stockists_number2,
    heading: stockists.stockists_heading2,
    paragraph1: stockists.stockists_item2_paragraph1,
    paragraph2: stockists.stockists_item2_paragraph2,

    imageWidth: 240,
    imageHeight: 240,
    alt: "number_2",
    cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
    imageWrapperClassName:
      "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-92 w-full pb-5",
    imageClassName: "sm:pl-10 pl-0 self-end sm:w-full w-15",
  },

  {
    y: stockistsCard3,
    label: stockists.stockists_item_label3,
    number: stockists.stockists_number3,
    heading: stockists.stockists_heading3,
    paragraph1: stockists.stockists_item3_paragraph1,
    paragraph2: stockists.stockists_item3_paragraph2,

    imageWidth: 240,
    imageHeight: 240,
    alt: "number_3",
    cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
    imageWrapperClassName:
      "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-85 w-full pb-5",
    imageClassName: "sm:pl-10 pl-0 self-end sm:w-full w-15",
  },

  {
    y: stockistsCard4,
    label: stockists.stockists_item_label4,
    number: stockists.stockists_number4,
    heading: stockists.stockists_heading4,
    paragraph1: stockists.stockists_item4_paragraph1,
    paragraph2: stockists.stockists_item4_paragraph2,

    imageWidth: 240,
    imageHeight: 240,
    alt: "number_4",
    cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
    imageWrapperClassName:
      "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 h-auto lg:w-auto md:w-44 sm:w-70 w-full pb-5",
    imageClassName: "md:pl-0 sm:pl-10 pl-0 self-end sm:w-full w-15",
  },
];
