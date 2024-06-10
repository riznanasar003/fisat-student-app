import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData] = useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )
        const inputHandler = (event) =>{
            setData({...data,[event.target.name]:event.target.value})
        }
        const readValue = () =>{
            console.log(data)

            axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Successfully Added")
                        
                    } else {
                        alert("Error")
                        
                    }
                }
            ).catch().finally()
        }

    return (
        <div>
            <NavBar/>
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col--lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="fomr-label">FIRST NAME</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">LAST NAME</label>
                                <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">

                                <label htmlFor="" className="form-label">COLLEGE</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">DATE OF BIRTH</label>
                                <input type="date" name="dob" value={data.dob} onChange={inputHandler} id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">COURSE</label>
                                <select name="course" value={data.course} onChange={inputHandler} id="" className="form-control">
                                    <option value="select...">select...</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MTECH">MTECH</option>
                                    <option value="BTECH-CS">BTECH-CS</option>
                                    <option value="BTECH-EC">BTECH-EC</option>
                                    <option value="BTECH-EEE">BTECH-EEE</option>
                                    <option value="BTECH-CIVIL">BTECH-CIVIL</option>
                                    <option value="BTECH-MECH">BTECH-MECH</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">MOBILE NO</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>

                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>

                            </div>
                            <center>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-dark" onClick={readValue}>REGISTER</button>

                            </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent