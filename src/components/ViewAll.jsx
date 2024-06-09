import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [shop,changeshop] =useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (Response)=>{
                changeshop(Response.data)
            }
        ).catch().finally()
}
useEffect(() => {fetchData()},[])
  return (
    <div>
        <NavBar/>
         <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">View Products</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {
                                    shop.map(
                                        (value, index) => {
                                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                                <div className="card mb-3">
                                                    <img src={value.image} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <p className="card-text"><b>{value.title}</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    )}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div >
 
  )
}

export default ViewAll