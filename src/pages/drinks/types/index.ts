export type DrinkType = {
  type: string;
  id: string;
  imgPath: string;
  title: string;
  volume: string;
  price: number;
  category: string;
};

export type DrinksStateType = {
  data: DrinkType[];
  isLoading: boolean;
};
