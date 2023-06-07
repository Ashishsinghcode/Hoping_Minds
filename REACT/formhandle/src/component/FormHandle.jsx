import React, { useState } from "react";
import Select from "react-select";
import Cards from "./Cards";



const mystyle = {
  border: "3px solid black",
  padding: "10px",
  borderRadius: "10px"
}
export default function FormHandle() {
  const [user, setUser] = useState([
    {
      name: '',
      address: '',
      phone: 0,
      country: '',
      gender: 'Male',
      Age: 0,
      qualification: ''


    }
  ])
  const [userobj, setUserobj] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false)


  const handleChange = (event) => {
    setUser(
      (prev) => ({ ...prev, [event.target.id]: event.target.value }))
    console.log(user)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setUserobj(
      (prev) => ([...prev, user])
    )
    setisSubmitted(true)
    console.log(user)


  }
  return (
    <>
      {isSubmitted ?
        <div>
          <Cards userdata={userobj} isSubmitted={setisSubmitted} />
        </div>
        :
        <div className='container'>
          <div className='row m-3'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div style={mystyle}>
                <h1 className="text-center">User Data</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="nameHelp"
                      placeholder="Enter name"
                    />

                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="address ">Address</label>
                    <textarea onChange={handleChange} className="form-control" id='address' placeholder="Address">
                    </textarea>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="phone">Phone no.</label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Phone number"
                    />
                  </div>
                  <label htmlFor="country my-2">Country</label>
                  <select onChange={handleChange} className="form-control" id="country">
                    <option selected value="" disabled>Select Country</option>
                    <option value="India">India (+91)</option>
                    <option value="Algeria">Algeria (+213)</option>
                    <option value="Andorra">Andorra (+376)</option>
                    <option value="Angola">Angola (+244)</option>
                    <option value="Anguilla">Anguilla (+1264)</option>
                    <option value="Antigua">Antigua &amp; Barbuda (+1268)</option>
                    <option value="Argentina">Argentina (+54)</option>
                    <option value="Armenia">Armenia (+374)</option>
                    <option value="Aruba">Aruba (+297)</option>
                    <option value="Australia">Australia (+61)</option>
                    <option value="Austria">Austria (+43)</option>
                    <option value="Azerbaijan">Azerbaijan (+994)</option>
                    <option value="Bahamas">Bahamas (+1242)</option>
                    <option value="Behrain">Bahrain (+973)</option>
                    <option value="Bangladesh">Bangladesh (+880)</option>
                    <option value="Barbados">Barbados (+1246)</option>
                    <option value="Belarus">Belarus (+375)</option>
                    <option value="Belgium">Belgium (+32)</option>
                    <option value="Belize">Belize (+501)</option>
                    <option value="Benin">Benin (+229)</option>
                    <option value="Bermuda">Bermuda (+1441)</option>
                    <option value="Bhutan">Bhutan (+975)</option>
                    <option value="Bolivia">Bolivia (+591)</option>
                    <option value="Bosnia Herzegovina">Bosnia Herzegovina (+387)</option>
                    <option value="Botswana">Botswana (+267)</option>
                    <option value="Brazil">Brazil (+55)</option>
                    <option value="Brunei">Brunei (+673)</option>
                    <option value="Bulgaria">Bulgaria (+359)</option>
                    <option value="Burkina Faso">Burkina Faso (+226)</option>
                    <option value="Burundi">Burundi (+257)</option>
                    <option value="Cambodia">Cambodia (+855)</option>
                    <option value="Cameroon">Cameroon (+237)</option>
                    <option value="Canada">Canada (+1)</option>
                  </select>


                  <label htmlFor="gender" className="mt-2">Gender</label>
                  <div className="form-check">
                    <input onChange={handleChange} value="Male" className="form-check-input" type="radio" name="gender" id="gender" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input onChange={handleChange} value="Female" className="form-check-input" type="radio" name="gender" id="gender" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input onChange={handleChange} value="Others" className="form-check-input" type="radio" name="gender" id="gender" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Others
                    </label>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="age">Age</label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Age"
                    />
                  </div>
                  <label htmlFor="qualification" className="mt-2">Qualification</label>
                  <select id="qualification" onChange={handleChange} className="form-control">
                    <option value="" selected disabled>Select Qualification</option>
                    <option value="Matriculation">Matriculation</option>
                    <option value="Intermediate">Intermidiate</option>
                    <option value="BCA">BCA</option>
                    <option value="B.TECH">B.TECH</option>
                    <option value="MCA">MCA</option>
                    <option value="M.TECH">M.TECH</option>
                    <option value="B.A.">B.A.</option>
                    <option value="M.A.">M.A.</option>
                    <option value="P.H.D">P.H.D.</option>
                  </select>
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary form-control my-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
}
