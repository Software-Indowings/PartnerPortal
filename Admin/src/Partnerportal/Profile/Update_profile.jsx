import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Update_profile(props) {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [values, setValues] = useState({
    legal_name: "",
    trading_name: "",
    partner_tier: "",
    founding_date: "",
    website: "",
    vat_number: "",
    employees: "",
    address: "",
    reg_phone: "",
    key_name: "",
    key_email: "",
    key_phone: "",
    key_position: "",
    industries: "",
    comments: "",
    reg_email: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3307/allpartnersprofile`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (user) {
      setValues((prevValues) => ({
        ...prevValues,
        reg_email: user.username || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const existingProfile = profile.find(
      (partner) => partner.reg_email === user.username
    );
    if (existingProfile) {
      setValues(existingProfile);
    }
  }, [profile, user.username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any fields are empty
    for (const key in values) {
      if (values[key] === "") {
        setError("Please fill in all fields.");
        return;
      }
    }
    // If all fields are filled, submit the form
    axios
      .post("http://localhost:3307/profile_insert/", values)
      .then((res) => {
        console.log(res);
        navigate("/partnerprofile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column vh-200 justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-5">
        <h2 className="mb-4">Update Profile:</h2>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-danger">{error}</p>}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Registered E-mail:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.reg_email}
              disabled
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Registered Category:</label>
            <input
              type="text"
              className="form-control"
              required
              value={user.category}
              disabled
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Partner Name(Legal): </label>
            <input
              type="text"
              className="form-control"
              required
              value={values.legal_name}
              onChange={(e) =>
                setValues({ ...values, legal_name: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Partner Name(Trading):</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.trading_name}
              onChange={(e) =>
                setValues({ ...values, trading_name: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Partner Tier:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.partner_tier}
              onChange={(e) =>
                setValues({ ...values, partner_tier: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Company founding date:</label>
            <input
              type="date"
              className="form-control"
              required
              value={values.founding_date}
              onChange={(e) =>
                setValues({ ...values, founding_date: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Company website:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.website}
              onChange={(e) =>
                setValues({ ...values, website: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">VAT Number:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.vat_number}
              onChange={(e) =>
                setValues({ ...values, vat_number: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Total Number of Employees:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.employees}
              onChange={(e) =>
                setValues({ ...values, employees: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Registered Address:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Registered Phone:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.reg_phone}
              onChange={(e) =>
                setValues({ ...values, reg_phone: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Key Contacts-</strong>
            <br />
            <label htmlFor="">Name:</label>
            <input
              type="text"
              className="form-control"
              required
              value={values.key_name}
              onChange={(e) =>
                setValues({ ...values, key_name: e.target.value })
              }
            />

            <br />
            <label htmlFor="">Email:</label>
            <input
              type="text"
              className="form-control"
               required
              value={values.key_email}
              onChange={(e) =>
                setValues({ ...values, key_email: e.target.value })
              }
            />
            <br />
            <label htmlFor="">Phone:</label>
            <input
              type="text"
              className="form-control"
               required
              value={values.key_phone}
              onChange={(e) =>
                setValues({ ...values, key_phone: e.target.value })
              }
            />
            <br />
            <label htmlFor="">Position/Dept:</label>
            <input
              type="text"
              className="form-control"
               required
              value={values.key_position}
              onChange={(e) =>
                setValues({ ...values, key_position: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Focus Industries:</label>
            <input
              type="text"
              className="form-control"
               required
              value={values.industries}
              onChange={(e) =>
                setValues({ ...values, industries: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="">Focus Comments:</label>
            <input
              type="text"
              className="form-control"
               required
              value={values.comments}
              onChange={(e) =>
                setValues({ ...values, comments: e.target.value })
              }
            />
          </div>
          <div className="mt-4">
            <Link to="/partnerprofile" className="btn btn-primary me-2">
              Back
            </Link>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update_profile;
