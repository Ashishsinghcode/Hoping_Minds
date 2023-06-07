import React from 'react'

export default function Cards(props) {
    const { userdata, isSubmitted } = props
    return (
        <>
            <button className='btn btn-primary form-control' onClick={() => { isSubmitted(false) }}> Return</button>
            <div className='container'>
                <div className='row'>

                    {userdata.map((data, index) => {
                        return (
                            <div className='col-md-4 text-center'>
                                <div key={index} className="card m-3">
                                    <div className="card-body">
                                        <h2 className="card-title text-danger">Name : {data.name}</h2>
                                        <h5 className="card-subtitle mb-2 text-muted">Address : {data.address}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Phone no : {data.phone}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">Country : {data.country}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">Gender : {data.gender}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">Age : {data.age}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">Qualification :{data.qualification}</h6>


                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
