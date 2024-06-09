import React from 'react'
import NavBar from './NavBar'

const DeleteProduct = () => {
  return (
    <div>
        <NavBar/>

<h1 align="center">DELETE</h1>
        <br></br>
        <div className="container">
        <div className="row ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label"></label>
                   
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-6">
                      <center>
                        <label htmlFor="" className="form-label">PRODUCT ID</label>
                        </center>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
                    <label htmlFor="" className="form-label"></label>
                    </div>
                    <center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                        <button className="btn btn-warning">DELETE</button>
                    </div>
                    </center>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct