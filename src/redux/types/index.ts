import { DrinkType } from '../../pages/drinks/types';
import { PizzaType } from '../../pages/pizza/types';
import { SalatType } from '../../pages/salats/types';

export type AlertType = {
  type: string;
  message: string;
  key: number;
};

export type AlertsStateType = {
  data: AlertType[];
};

export type BasketStateType = {
  basketData: (PizzaType | DrinkType | SalatType)[];
  isBasketSidebarOpen: boolean;
  error: string | null;
};
