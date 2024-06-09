import React from 'react'
import NavBar from './NavBar'

const AddProducts = () => {
  return (
    <div>
        <NavBar/>
         <h1 align="center">ADD DETAILS</h1>
         <br></br>
        <div class="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT ID</label>
                        <input type="text" className="form-control" />
                        <br></br>
                    </div>
          
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT TITLE</label>
                        <input type="text" className="form-control" />
                        <br></br>
                    </div>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PRICE</label>
                    <input type="text" className="form-control" />
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">MANUFACTURING DATE</label>
                    <input type="date" name="date" id="date" className="form-control" />
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">DESCRIPTION</label>
                   <textarea name="description" id="description" className="form-control"></textarea>
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">CATEGORY</label>
                    <select name="category" id="category" className="form-control">
                        <option value="">select option</option>
                        <option value="">SHIRT</option>
                        <option value="">ORNAMENTS</option>
                        <option value="">ELECTRONICS</option>
                    </select>
                   
                    <br></br>
                    </div>
                   
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">RATING</label>
                        <input type="text" className="form-control" />
                        <br></br>
                   
             
                    </div>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-12">
                        <center>
                        <button className="btn btn-success">REGISTER</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default AddProducts