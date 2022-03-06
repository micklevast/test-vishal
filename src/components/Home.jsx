import React, { useEffect, useState } from 'react'
import './Home.scss'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [Name, setName] = useState("")
    const [Model, setModel] = useState("")
    const [Year, setYear] = useState("")
    const [Time, setTime] = useState("")
    const [Phone, setPhone] = useState(0)
    const [logged, setlogged] = useState(true)

    let navigate = useNavigate();
    // look here
    // useEffect(() => {
    //     const user = Cookies.get("user")
    //     if (user.length != 0) {
    //         // navigate('/login')
    //         // setlogged(false);
    //     }
    // }, [logged])

    console.log(logged)
    const HandleSubmit = async (e) => {
        e.preventDefault()
        console.table(Name, Model, Year, Time, Phone)
        axios.post('some url', {
            Name, Model, Year, Time, Phone
        }).then(res => {
            alert("Data Uploaded Successfully!")
        }).catch(err => {
            alert("Something went wrong")
        })
    }

    return (<div className=''>
        <div className="" id="form" aria-labelledby="exampleModalLabel" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0 text-center">
                        <h3 className="modal-title p-0 m-0" id="exampleModalLabel">Fill Your Car Details</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span >&times;</span>
                        </button>
                    </div>
                    <form onSubmit={e => HandleSubmit(e)}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="email1">Car Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter car name eg. Audi" value={Name} onChange={e => setName(e.target.value)} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Model no.</label>
                                <input type="text" className="form-control" id="password1" placeholder="Enter model number" value={Model} onChange={e => setModel(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Year</label>
                                <input type="number" className="form-control" id="password2" placeholder="Enter Year of purchase" value={Year} onChange={e => setYear(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email1">Time of booking</label>
                                <input type="time" className="form-control" aria-describedby="emailHelp" value={Time} onChange={e => setTime(e.target.value)} />

                            </div><div className="form-group">
                                <label htmlFor="email1">Phone no</label>
                                <input type="tel" className="form-control" aria-describedby="emailHelp" placeholder="Enter Phone number" value={Phone} onChange={e => setPhone(e.target.value)} />

                            </div>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);


}

export default Home;