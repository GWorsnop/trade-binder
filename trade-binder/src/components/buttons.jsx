import { useState, useEffect } from "react";
import axios from "axios";

function Buttons(props) {
  const { setQueryCategory, setSortCategory, order, setOrder } = props;

  function handleButtonClick() {
    setOrder(order === "desc" ? "asc" : "desc");
  }
  return (
    <>
      <hr />
      <div className="sticky-nav">
        <div id="filter-box">
          <h3>Filters:</h3>
          <form
            className="filter-box-field"
            onChange={(e) => {
              setQueryCategory(
                e.target.value === "All" ? null : e.target.value
              );
            }}
          ></form>

          <form
            className="filter-box-field"
            onChange={(e) => {
              setSortCategory(e.target.value);
            }}
          >
            <label>
              <p>Sort By:</p>
              <select>
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </label>
          </form>

          <button
            id="order-button"
            className="filter-box-field"
            onClick={handleButtonClick}
          >
            {order.toUpperCase()}
          </button>

          <form>
            <label>
              Search:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <h3>Items for Sale:</h3>
      </div>
    </>
  );
}

export default Buttons;
