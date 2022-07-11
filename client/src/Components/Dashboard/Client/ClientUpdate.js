import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ClientUpdate = (props) => {
  const [clientId, setClientId] = useState(useParams().id);
  const [clientCIN, setClientCIN] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAge, setClientAge] = useState("");
  const [Submitted, setSubmitted] = useState(false);
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");
    if (isNaN(clientAge)) return setError("Age must be numbers");
    const client = {
      clientId,
      clientCIN,
      clientName,
      clientEmail,
      clientPhone,
      clientAge,
    };
    fetch(`/api/Client/Update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/Dashboard/ClientList");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setError("Error While Updating Client");
      });
  };

  const GetClientById = async () => {
    await fetch(`/api/Client/GetById/${clientId}`)
      .then((res) => res.json())
      .then((data) => {
        setClientCIN(data.CIN);
        setClientName(data.Name);
        setClientEmail(data.Email);
        setClientPhone(data.PhoneNumber);
        setClientAge(data.Age);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const SyncedFN = async () => {
      await GetClientById();
    };
    SyncedFN();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col" />
        <div className="bg1 col pt-5">
          <div className="card card-danger">
            <div className="card-header bg-primary pt-4">
              <h4 className="text-center">Update Client</h4>
            </div>
            <div className="card-body ">
              <form onSubmit={onSubmitHandler}>
                <div className="card-body">
                  <div className="form-group">
                    <label>CIN</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter CIN"
                      required
                      autoFocus
                      value={clientCIN}
                      // onChange={(e) => setClientCIN(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>FullName</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Age"
                      required
                      value={clientAge}
                      onChange={(e) => setClientAge(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="integer"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-50 mt-4">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {Error && (
            <div className="card-footer bg-danger">
              <h5 className="text-center">
                <i className="icon fas fa-ban" />
                &nbsp;&nbsp;{Error}
              </h5>
            </div>
          )}
          {Submitted && (
            <div className="card-footer bg-success">
              <h5 className="text-center">
                <i className="icon fas fa-check-circle" />
                &nbsp;&nbsp;Client Updated
              </h5>
            </div>
          )}
        </div>
        <div className="col" />
      </div>
    </div>
  );
};
