import React from 'react'
import SideBar from '../../screens/admin/SideBar';

const AddPizza = () => {
    return (
        <>
            <div class="container mt-3 p-0" id="admin-container" style={{ backgroundColor: "#8bc34a1c" }} >

                <h3 className='text-center bg-dark text-light   p-2 ' style={{ width: "100%", margin: "auto" }}>Admin Panel</h3>

                <div class="row mt-1">

                    <SideBar />
                    <div class="col-8 col-lg-8 col-md-8 col-sm-12">

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPizza;