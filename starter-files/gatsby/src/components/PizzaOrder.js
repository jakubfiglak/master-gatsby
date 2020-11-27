import React from 'react';
import Img from 'gatsby-image';
import { MenuItemStyles } from '../styles/MenuItemStyles';
import { calculatePizzaPrice } from '../utils/calculatePizzaPrice';
import { formatMoney } from '../utils/formatMoney';

export const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  console.log('aaaaa');

  return (
    <>
      {order.map((orderItem, index) => {
        const pizza = pizzas.find((p) => p.id === orderItem.id);

        return (
          <MenuItemStyles key={orderItem.id}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, orderItem.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${orderItem.size} ${pizza.name} from order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
};
