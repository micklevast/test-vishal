import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
const Dashbaord = () => {
    const [data, setdata] = useState([])
    const [Name, setName] = useState("")
    const [Model, setModel] = useState("")
    const [Year, setYear] = useState("")
    const [Time, setTime] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState(0)
    const [toDelete, settoDelete] = useState("")
    const [torerender, settorerender] = useState(false)
    const [logged, setlogged] = useState(true)

    useEffect(() => {
        // dummy data
        const obj = [{
            id: '1',
            name: 'Audi',
            model: 'suv',
            email: 'test@gmail.com',
            year: '2002',
            time: '12:23:09',
            phone: '09876543210'
        }, {
            id: '2',
            name: 'Audi',
            model: 'suv',
            email: 'test@gmail.com',
            year: '2002',
            time: '12:23:09',
            phone: '09876543210'
        }]
        //make axios call here
        setdata(obj)

    }, [])
    useEffect(() => {
        console.log("Rendered")
    }, [torerender])
    // look here
    let navigate = useNavigate();
    useEffect(() => {
        const user = Cookies.get("user")
        if (user.length != 0) {
            // navigate('/login')
            setlogged(false);
        }
    }, [logged])
    const handleEdit = async (e) => {
        e.preventDefault()
        axios.post('some url', {
            Name, Email, Phone, Year, Time, Model
        }).then(res => {
            alert('Data updated successfully!')
            settorerender(!torerender)
        }).catch(err => {
            alert("Error updating data")
        })
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        axios.post('some url', {
            toDelete
        }).then(res => {
            alert('record deleted successfull')
            settorerender(!torerender)
        }).catch(err => {
            alert("Error Deleting data")

        })
    }
    const setEditFeilds = (rw) => {
        setName(rw.name)
        setModel(rw.model)
        setTime(rw.time)
        setYear(rw.year)
        setEmail(rw.email)
        setPhone(rw.phone)
    }
    return (
        <div>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6 ">
                                <h2>Manage <b>Cars</b></h2>
                            </div>


                        </div>
                    </div>
                    {data.length > 0 ? <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Time</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map(rw => {
                                return <tr key={rw.id}>
                                    <td>{rw.email}</td>
                                    <td>{rw.name}</td>
                                    <td>{rw.model}</td>
                                    <td>{rw.year}</td>
                                    <td>{rw.time}</td>
                                    <td>{rw.phone}</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal" onClick={e => setEditFeilds(rw)}><i className="material-icons" data-toggle="tooltip" title="Edit">✏</i></a>
                                        <a href="#deleteEmployeeModal" onClick={e => settoDelete(rw.id)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">X</i></a>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                        : <h1 className='text-center'>Insert records!</h1>}
                </div>
            </div>

            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={e => handleEdit(e)}>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Details</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" value={Email} onChange={e => setEmail(e.target.value)} required readOnly />
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value={Name} onChange={e => setName(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Model</label>
                                        <input type="text" className="form-control" value={Model} onChange={e => setModel(e.target.value)} required />
                                    </div>
                                </div><div className="form-group">
                                    <label>Year</label>
                                    <input type="text" className="form-control" value={Year} onChange={e => setYear(e.target.value)} required />
                                </div><div className="form-group">
                                    <label>Time</label>
                                    <input type="text" className="form-control" value={Time} onChange={e => setTime(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" value={Phone} onChange={e => setPhone(e.target.value)} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={e => handleDelete(e)}>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Record with id  {toDelete}?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Dashbaord;