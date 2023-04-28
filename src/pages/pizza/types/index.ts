export type PizzaType = {
  type: string;
  id: string;
  imgPath: string;
  title: string;
  description: string;
  size: number;
  weight: number;
  price: number;
  category: string;
};

export type PizzaStateType = {
  data: PizzaType[];
  isLoading: boolean;
};
