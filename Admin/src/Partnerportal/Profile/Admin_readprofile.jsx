import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ReadProfile(props) {
  const { profile_id } = useParams();
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3307/read_profile/${profile_id}`)
      .then((res) => {
        console.log(res);
        setProfile(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [profile_id]);

  const handleDelete = (profile_id) => {
    axios
      .delete(`http://localhost:3307/delete_profile/${profile_id}`)
      .then((res) => {
        navigate("/admin_profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-5">
        <h3 className="mb-4">Profile Details:</h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{profile.profile_id}</td>
            </tr>
            <tr>
              <th>Partner Name(Legal):</th>
              <td>{profile.legal_name}</td>
            </tr>
            <tr>
              <th>Partner Name(Trading):</th>
              <td>{profile.trading_name}</td>
            </tr>
            <tr>
              <th>Registered Email ID:</th>
              <td>{profile.reg_email}</td>
            </tr>
            <tr>
              <th>Partner Tier:</th>
              <td>{profile.partner_tier}</td>
            </tr>
            <tr>
              <th>Company founding date:</th>
              <td>{profile.founding_date}</td>
            </tr>
            <tr>
              <th>Company website:</th>
              <td>{profile.website}</td>
            </tr>
            <tr>
              <th>VAT Number</th>
              <td>{profile.vat_number}</td>
            </tr>
            <tr>
              <th>Total Number of Employees</th>
              <td>{profile.employees}</td>
            </tr>
            <tr>
              <th>Registered Address</th>
              <td>{profile.address}</td>
            </tr>
            <tr>
              <th>Registered Phone</th>
              <td>{profile.reg_phone}</td>
            </tr>
            <tr>
              <th> Key Contacts</th>
              <td>
                Name: {profile.key_name}
                <br />
                Email: {profile.key_email}
                <br />
                Phone: {profile.key_phone}
                <br />
                Position/Dept: {profile.key_position}
              </td>
            </tr>
            <tr>
              <th>Focus Industries</th>
              <td>{profile.industries}</td>
            </tr>
            <tr>
              <th>Comments:</th>
              <td>{profile.comments}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <Link to="/admin_profile" className="btn btn-primary me-2">
            Back
          </Link>
          {/* <Link to={`/update_profiles/${profile.profile_id}`} className='btn btn-primary mx-2'>Edit</Link> */}
          <div className="d-flex justify-content-end">
            <button
              onClick={() => handleDelete(profile.profile_id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadProfile;
