import { DiscountsStateType } from '../../pages/discounts/types';
import { DrinksStateType } from '../../pages/drinks/types';
import { PizzaStateType } from '../../pages/pizza/types';
import { SalatsStateType } from '../../pages/salats/types';
import { AlertsStateType, BasketStateType } from '../../redux/types';

export type AppStateType = {
  pizza: PizzaStateType;
  drinks: DrinksStateType;
  salats: SalatsStateType;
  discounts: DiscountsStateType;
  alerts: AlertsStateType;
  basket: BasketStateType;
};
