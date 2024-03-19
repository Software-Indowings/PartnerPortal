import React, { useState } from "react";
import background from "./images/3.png";
import logo from "./images/partner.png";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    type_of_company: "",
    name_of_entity: "",
    date_of_incorporation: "",
    file_incorporation: null,
    pan_number: "",
    file_pan: null,
    gstin: "",
    file_gstin: null,
    bank_details: "",
    ifsc_code: "",
    file_cancelled_cheque: null,
    registered_address: "",
    communication_address: "",
    pincode: "",
    email: "",
    phone_number: "",
    number_of_directors: "0",
    directors: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send formData to your backend here
    console.log(formData);
  };

  const generateDirectorForms = () => {
    const numDirectors = parseInt(formData.number_of_directors);
    const directorForms = [];
    for (let i = 1; i <= numDirectors; i++) {
      directorForms.push(
        <div key={i} className="director-form">
          <h3
            style={{
                fontWeight: "bold",
                fontSize: "19px",
                display: "block",
                marginTop: "5px",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
            }}
          >
            Director {i}
          </h3>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`din_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                DIN Number:
              </label>
              <input
                type="text"
                id={`din_${i}`}
                name={`din_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`name_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Name:
              </label>
              <input
                type="text"
                id={`name_${i}`}
                name={`name_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`address_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Address:
              </label>
              <textarea
                id={`address_${i}`}
                name={`address_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              ></textarea>
            </div>
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`pan_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                PAN Number:
              </label>
              <input
                type="text"
                id={`pan_${i}`}
                name={`pan_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`file_pan_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Upload PAN File:
              </label>
              <input
                type="file"
                id={`file_pan_${i}`}
                name={`file_pan_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`aadhar_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Aadhar Number:
              </label>
              <input
                type="text"
                id={`aadhar_${i}`}
                name={`aadhar_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`file_aadhar_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Upload Aadhar File:
              </label>
              <input
                type="file"
                id={`file_aadhar_${i}`}
                name={`file_aadhar_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`mobile_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Mobile Number:
              </label>
              <input
                type="text"
                id={`mobile_${i}`}
                name={`mobile_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-12">
              <label
                htmlFor={`email_${i}`}
                style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginBottom: "5px",
                    color: "#000",
                }}
              >
                Email Address:
              </label>
              <input
                type="email"
                id={`email_${i}`}
                name={`email_${i}`}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                required
              />
            </div>
            <div className="col-sm-6 col-md-6 col-12"></div>
          </div>
        </div>
      );
    }
    return directorForms;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "max",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <div className="row">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", marginBottom: "20px" }}
            />
          </div>
          <br/>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Partner Registration Form
          </h2>
          <br/><br/><br/>
          <div className="col-sm-6 col-md-6 col-12">
            <label
              htmlFor="type_of_company"
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}
            >
              Type of Company:
            </label>
            <select
              id="type_of_company"
              name="type_of_company"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            >
              <option value=""></option>
              <option value="Proprietor">Proprietor</option>
              <option value="Partner">Partner</option>
              <option value="Private Limited">Private Limited</option>
              <option value="Limited">Limited</option>
              <option value="Limited Liability Partnership">
                Limited Liability Partnership
              </option>
            </select>
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label
              htmlFor="name_of_entity"
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}
            >
              Name of Entity:
            </label>
            <input
              type="text"
              id="name_of_entity"
              name="name_of_entity"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              pattern="[A-Za-z ]+"
              title="Only characters are allowed"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="date_of_incorporation" 
            style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>
              Date of Incorporation:
            </label>
            <input
              type="date"
              id="date_of_incorporation"
              name="date_of_incorporation"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
            <label htmlFor="file_incorporation" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>
              Incorporation Certificate:
            </label>
            <input
              type="file"
              id="file_incorporation"
              name="file_incorporation"
              onChange={handleFileChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="pan_number " style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>PAN Number:</label>
            <input
              type="text"
              id="pan_number"
              name="pan_number"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              pattern="[A-Za-z0-9]{10}"
              title="Should be 10 characters/digits"
              required
            />
            <label htmlFor="file_pan" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Upload PANCARD:</label>
            <input
              type="file"
              id="file_pan"
              name="file_pan"
              onChange={handleFileChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="gstin" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>GSTIN:</label>
            <input
              type="text"
              id="gstin"
              name="gstin"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              pattern="[A-Za-z0-9]{13}"
              title="Should be 13 characters/digits"
              required
            />
            <label htmlFor="file_gstin" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Upload GSTIN File:</label>
            <input
              type="file"
              id="file_gstin"
              name="file_gstin"
              onChange={handleFileChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="bank_details" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Bank Details:</label>
            <input
              type="text"
              id="bank_details"
              name="bank_details"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="ifsc_code" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>IFSC Code:</label>
            <input
              type="text"
              id="ifsc_code"
              name="ifsc_code"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
            <label htmlFor="file_cancelled_cheque" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>
              Upload Cancelled Cheque:
            </label>
            <input
              type="file"
              id="file_cancelled_cheque"
              name="file_cancelled_cheque"
              onChange={handleFileChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="registered_address" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Registered Address:</label>
            <textarea
              id="registered_address"
              name="registered_address"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="communication_address" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>
              Communication Address:
            </label>
            <textarea
              id="communication_address"
              name="communication_address"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            ></textarea>
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="pincode" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="email" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="phone_number" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Phone Number:</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <label htmlFor="number_of_directors" style={{
                fontWeight: "bold",
                fontSize: "14px",
                display: "block",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "5px",
                color: "#000",
              }}>Number of Directors:</label>
            <select
              id="number_of_directors"
              name="number_of_directors"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            >
              <option value="0"></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="col-sm-6 col-md-6 col-12"></div>
        </div>

        {/* Sub forms for each director */}
        <div id="directors_info">{generateDirectorForms()}</div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
