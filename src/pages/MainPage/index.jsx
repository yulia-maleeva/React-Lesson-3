import React from "react";
import Poster from "../../components/Poster";

import DollarSvg from "../../assests/icons/dollarSvg.svg";
import CartSvg from "../../assests/icons/cartSvg.svg";
import MessageSvg from "../../assests/icons/messageSvg.svg";
import UserSvg from "../../assests/icons/userSvg.svg";

import {
  revenueList,
  ordersList,
  reviewsList,
  customersList,
} from "../../mockData";

import styles from "./index.module.scss";

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
