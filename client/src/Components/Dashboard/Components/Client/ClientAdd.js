import React, {useState} from "react";

export const ClientAdd = () => {
  const [clientCIN, setClientCIN] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAge, setClientAge] = useState("");
  const [Submitted, setSubmitted] = useState(0);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const client = {
      clientCIN,
      clientName,
      clientEmail,
      clientPhone,
      clientAge,
    };
    fetch("http://localhost:4000/api/Client/Create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    })
      .then((res) => {
        res.json();
        setSubmitted(1);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(-1);
      });
  };
  return (
    <div className="row">
      <div className="col" />
      <div className="bg1 col pt-5">
        <div className="card card-danger">
          <div className="card-header bg-primary pt-4">
            <h4 className="text-center">Add Client</h4>
          </div>
          <div className="card-body ">
            <form onSubmit={onSubmitHandler}>
              <div className="card-body">
                <div className="form-group">
                  <label>CIN</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter CIN"
                    required
                    autoFocus
                    value={clientCIN}
                    onChange={(e) => setClientCIN(e.target.value)}
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
                    type="number"
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
        {Submitted > 0 && (
          <div className="card-footer bg-success">
            <h5 className="text-center">
              <i className="icon fas fa-check-circle" />
              &nbsp;&nbsp;ClientAdded
            </h5>
          </div>
        )}
        {Submitted < 0 && (
          <div className="card-footer bg-danger">
            <h5 className="text-center">
              <i className="icon fas fa-ban" />
              &nbsp;&nbsp;Error While Adding Client
            </h5>
          </div>
        )}
      </div>
      <div className="col" />
    </div>
  );
};
