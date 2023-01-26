import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddPizza from '../../components/Admin/AddPizza';
import AllOrder from '../../components/Admin/AllOrder';
import AllPizzas from '../../components/Admin/AllPizzas';
import AllUsers from '../../components/Admin/AllUsers';
import SideBar from './SideBar';

const AdminScreen = () => {

    return (

        <>
            <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }} >

                <h3 className='text-center bg-dark text-light   p-2 ' style={{ width: "100%", margin: "auto" }}>Admin Panel</h3>

                <div class="row mt-1">

                    <SideBar></SideBar>
                    <div class="col-8 col-lg-8 col-md-8 col-sm-12">

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminScreen
