import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div className="col-lg-4 offset-lg-4 mt-5">
        <div className="container">
          <div className="card shadow">
            <div className="card-header">
              <div className="card-title">
                <h4 className="text-center">View User</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group text-start">
                <label>Id: {data.id}</label>
              </div>
              <div className="form-group text-start mt-2">
                <label>Name: {data.name}</label>
              </div>
              <div className="form-group text-start mt-2">
                <label>Email: {data.email}</label>
              </div>
              <div className="form-group text-start mt-2">
                <label>
                  Status: {data.status === 1 ? "Active" : "InActive"}
                </label>
              </div>
              <div className="text-start mt-3">
                <Link to="/">
                  <button type="button" className="btn btn-secondary">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
