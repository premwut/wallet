import React from "react";
import { CATEGORIES } from "../constants/transaction.type";

const BalanceDetails = (props: any) => {
  console.log(props)
  const renderCategories = () => {
    const elements: any = [];
    for (let item in CATEGORIES) {
      elements.push(<div key={item}>{item}</div>);
    }
    return elements;
  };

  return (
    <div>
      <div>
        <i className="fa fa-plus"></i>
      </div>
      <h1>Balance: {props.balance}</h1>
      <h2>{renderCategories()}</h2>
    </div>
  );
};

export default BalanceDetails;
