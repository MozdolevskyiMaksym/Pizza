export type SalatType = {
  type: string;
  id: string;
  imgPath: string;
  title: string;
  description: string;
  price: number;
};

export type SalatsStateType = {
  data: SalatType[];
  isLoading: boolean;
};
