import React from "react";

export const WorkerAdd = () => {
  const [workerCIN, setWorkerCIN] = React.useState("");
  const [workerName, setWorkerName] = React.useState("");
  const [workerEmail, setWorkerEmail] = React.useState("");
  const [workerPhone, setWorkerPhone] = React.useState("");
  const [workerAge, setWorkerAge] = React.useState("");
  const [Submitted, setSubmitted] = React.useState(0);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const worker = {
      workerCIN,
      workerName,
      workerEmail,
      workerPhone,
      workerAge,
    };
    fetch("/api/Worker/Create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(worker),
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
            <h4 className="text-center">Add Worker</h4>
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
                    value={workerCIN}
                    onChange={(e) => setWorkerCIN(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                    value={workerName}
                    onChange={(e) => setWorkerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Age"
                    required
                    value={workerAge}
                    onChange={(e) => setWorkerAge(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                    value={workerEmail}
                    onChange={(e) => setWorkerEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="integer"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required
                    value={workerPhone}
                    onChange={(e) => setWorkerPhone(e.target.value)}
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
              &nbsp;&nbsp;Worker Added
            </h5>
          </div>
        )}
        {Submitted < 0 && (
          <div className="card-footer bg-danger">
            <h5 className="text-center">
              <i className="icon fas fa-ban" />
              &nbsp;&nbsp;Error While Adding Worker
            </h5>
          </div>
        )}
      </div>
      <div className="col" />
    </div>
  );
};
