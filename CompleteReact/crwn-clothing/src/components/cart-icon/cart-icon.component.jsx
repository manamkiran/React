import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//mapStateToProps is called everytime there is a change in state . If the object/value is same as the previous then the props are not changed
//and thus the object is not rerendered. Incase we use filter or any other function which creates a new object. Then Since objects are different
// render is called again.
/*const mapStateToPros = ({ cart: { cartItems } }) => ({
  itemCount: selectCartItemsCount(state),
  itemCount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  ),
});*/

const mapStateToPros = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToPros, mapDispatchToProps)(CartIcon);
