import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div class="container">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error while fetching pizzas</h1>
        ) : (
          <div class="row mt-5" style={{ padding: "5px", margin: "auto" }}>
            {pizzas.map((pizza) => (
              <div class="col-3">
                <Pizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Homescreen;
