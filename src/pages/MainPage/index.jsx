import React from "react";
import Poster from "../../components/Poster";

import styles from "./index.module.scss";

import DollarSvg from "../../assests/icons/DollarSvg.svg";
import CartSvg from "../../assests/icons/CartSvg.svg";
import MessageSvg from "../../assests/icons/MessageSvg.svg";
import UserSvg from "../../assests/icons/UserSvg.svg";

import {
  revenueList,
  ordersList,
  reviewsList,
  customersList,
} from "../../mockData";

const MainPage = () => {
  return (
    <div className={styles.posters}>
      <Poster
        src={DollarSvg}
        alt="dollar-icon"
        color="lightblue"
        name="Monthly Revenue"
        data={revenueList}
      />
      <Poster
        src={CartSvg}
        alt="cart-icon"
        color="orange"
        name="New Orders"
        data={ordersList}
      />
      <Poster
        src={MessageSvg}
        alt="message-icon"
        color="coral"
        name="Pending Reviews"
        data={reviewsList}
      />
      <Poster
        src={UserSvg}
        alt="user-icon"
        color="lime"
        name="New Customers"
        data={customersList}
      />
    </div>
  );
};

export default MainPage;
