import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddUser() {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    status: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employees", inputData)
      .then((res) => {
        console.log(res.data);
        toast.success("Data Added Successfully");
        // alert("Data Added Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="container w-50">
          <div className="card shadow">
            <div className="card-header">
              <div className="card-title">
                <h4 className="text-center">Add New User</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group text-start">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={(e) =>
                          setInputData({ ...inputData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group text-start">
                      <label>Status</label>
                      <select
                        class="form-select"
                        name="status"
                        onChange={(e) =>
                          setInputData({ ...inputData, status: e.target.value })
                        }
                      >
                        <option selected disabled value="">
                          Set the Status
                        </option>
                        <option value="1">Active</option>
                        <option value="0">InActive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group text-start mt-2">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={(e) =>
                      setInputData({ ...inputData, email: e.target.value })
                    }
                  />
                </div>
                <div className="text-start mt-3">
                  <button type="submit" className="btn btn-secondary px-3">
                    Save
                  </button>
                  <Link to={"/"}>
                    <button type="button" className="btn btn-secondary mx-3">
                      Cancel
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
