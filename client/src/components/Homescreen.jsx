import React from 'react';
import AllPizza from "../pizza-data";
import Pizza from '../components/Pizza';



const Homescreen = () => {
    return (
        <>
            <div class="container">
                <div class='row mt-5' style={{ padding: "5px", margin: "auto" }}>
                    {AllPizza.map((pizza) => (
                        <div class="col-3" >
                            <Pizza pizza={pizza} />
                        </div>
                    )

                    )}


                </div>
            </div>

        </>
    )
}

export default Homescreen;