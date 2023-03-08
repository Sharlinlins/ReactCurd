import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  // const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/employees").then((res) => {
      // setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, [refresh]);

  function handleDelete(id) {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8000/employees/" + id)
        .then((res) => {
          alert("Data deleted Successfully");
          refresh ? setRefresh(false) : setRefresh(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <div className="container mt-2">
        <h3 className="text-center mt-5">Home</h3>
        <div className="row">
          <div className="col">
            <div className="text-end mb-3">
              <Link to="/create">
                <button className="btn btn btn-outline-primary">
                  Add User
                </button>
              </Link>
            </div>
          </div>
          <div className="col-2">
            <div className="text-end mb-3">
              <Link to="/banned">
                <button className="btn btn btn-outline-primary">
                  Banned User
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table border table-striped">
            <thead>
              <tr>
                <th className="border text-capitalize">ID</th>
                <th className="border text-capitalize">Name</th>
                <th className="border text-capitalize">Email</th>
                {/* {columns.map((c, i) => (
                  <th key={i} className="border text-capitalize" scope="col">
                    {c}
                  </th>
                ))} */}
                <th className="border text-capitalize">Status</th>
                <th className="border text-capitalize">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  {r.status === 1 ? (
                    <>
                      <td className="align-middle border">{r.id}</td>
                      <td className="border align-middle text-capitalize text-start ">
                        {r.name}
                      </td>
                      <td className="border align-middle text-start">
                        {r.email}
                      </td>
                      <td className="border align-middle text-center">
                        {r.status === 1 ? "Active" : "InActive"}
                      </td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic mixed styles example"
                        >
                          <Link to={`/view/${r.id}`}>
                            <button type="button" className="btn btn-sm">
                              <i className="text-primary fa fa-eye"></i>
                            </button>
                          </Link>
                          <Link to={`/update/${r.id}`}>
                            <button type="button" className="btn btn-sm">
                              <i className="text-success fa fa-edit"></i>
                            </button>
                          </Link>
                          <button
                            onClick={(e) => {
                              handleDelete(r.id);
                            }}
                            type="button"
                            className="btn btn-sm"
                          >
                            <i className="text-danger fa fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
