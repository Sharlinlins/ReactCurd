import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8000/employees/" + id, data)
      .then((res) => {
        alert("Data Updated Successfully");
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
                <h4 className="text-center">Update User</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="row">
                  <div className="col">
                    <div className="form-group text-start mt-2">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={data.name}
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group text-start mt-2">
                      <label>Status</label>
                      <select
                        class="form-select"
                        name="status"
                        value={data.status}
                        onChange={(e) =>
                          setData({ ...data, status: e.target.value })
                        }
                      >
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
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="text-start mt-3">
                  <button type="submit" className="btn btn-secondary">
                    Update
                  </button>
                  <Link to="/">
                    <button type="button" className="btn btn-secondary mx-5">
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

export default UpdateUser;
