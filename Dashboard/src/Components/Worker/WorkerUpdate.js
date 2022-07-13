import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const WorkerUpdate = () => {
  const [workerId] = useState(useParams().id);
  const [workerCIN, setWorkerCIN] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [workerEmail, setWorkerEmail] = useState("");
  const [workerPhone, setWorkerPhone] = useState("");
  const [workerAge, setWorkerAge] = useState("");
  const [Submitted, setSubmitted] = useState(false);
  const [Error, setError] = useState("");

  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");
    if (isNaN(workerAge)) return setError("Age must be numbers");
    const worker = {
      workerId,
      workerCIN,
      workerName,
      workerEmail,
      workerPhone,
      workerAge,
    };
    fetch(`/api/Worker/Update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(worker),
    })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/Dashboard/WorkerList");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setError("Error While Updating Worker");
      });
  };

  const GetWorkerById = async () => {
    await fetch(`/api/Worker/GetById/${workerId}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkerCIN(data.CIN);
        setWorkerName(data.Name);
        setWorkerEmail(data.Email);
        setWorkerPhone(data.PhoneNumber);
        setWorkerAge(data.Age);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const SyncedFN = async () => {
      await GetWorkerById();
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
              <h4 className="text-center">Update Worker</h4>
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
                      value={workerCIN}
                      // onChange={(e) => setWorkerCIN(e.target.value)}
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
                      value={workerName}
                      onChange={(e) => setWorkerName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
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
                &nbsp;&nbsp;Worker Updated
              </h5>
            </div>
          )}
        </div>
        <div className="col" />
      </div>
    </div>
  );
};
