export const getStockistsCard = ({
  stockists,
  stockistsCard1,
  stockistsCard2,
  stockistsCard3,
  stockistsCard4,
}) => {

  const stores = stockists?.stores || [];
  const yValue = [stockistsCard1, stockistsCard2, stockistsCard3, stockistsCard4];

  const classNames = [
    {
      imageWidth: 200,
      imageHeight: 200,
      cardClassName: "lg:w-50 w-full",
      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 md:h-auto sm:h-65 h-50 md:w-auto sm:w-85 w-full pb-5",
      imageClassName:
        "md:pr-10 pr-0 md:pl-0 sm:pl-10 pl-0 sm:w-full w-15 self-end",
    },

    {
      imageWidth: 240,
      imageHeight: 240,
      cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-92 w-full pb-5",
      imageClassName: "sm:pl-10 pl-0 self-end sm:w-full w-15",
    },

    {
      imageWidth: 240,
      imageHeight: 240,
      cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-85 w-full pb-5",
      imageClassName: "sm:pl-10 pl-0 self-end sm:w-full w-15",
    },

    {
      imageWidth: 240,
      imageHeight: 240,
      alt: "number_4",
      cardClassName: "lg:w-53 w-full sm:pt-0 pt-10",
      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 h-auto lg:w-auto md:w-44 sm:w-70 w-full pb-5",
      imageClassName: "md:pl-0 sm:pl-10 pl-0 self-end sm:w-full w-15",
    },
  ];

  return stores.map((store, index) => ({
    y: yValue[index],
    label: store?.label,
    number: store?.icon_or_number_img,
    heading: store?.heading,
    paragraph1: store?.paragraphs[0],
    paragraph2: store?.paragraphs[1],
    alt: `number_$(index + 1)`,
    ...classNames[index],
  }));
}; 
