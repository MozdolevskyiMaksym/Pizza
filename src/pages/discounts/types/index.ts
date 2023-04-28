export type DiscountType = {
  id: number;
  imgPath: string;
  title: string;
};

export type DiscountsStateType = {
  data: DiscountType[];
  isLoading: boolean;
  isError: boolean;
};
