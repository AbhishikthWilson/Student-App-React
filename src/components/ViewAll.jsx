import React, { useState } from "react";
import NavBar from "./NavBar";


const ViewAll = ()=> {
  const [data,changeData]=useState(
    [
      {"name":"aju","admNo":101,"rollNo":1},
      {"name":"arjun","admNo":102,"rollNo":2},
      {"name":"ajay","admNo":103,"rollNo":3}
    ]
  )
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg 12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {data.map(
                (value,index)=> {
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg 3 col-xl-3 col-xxl-3">
                  <div class="card">
                  <img
                    src="https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <p class="card-text">{value.name}</p>
                    <p class="card-text">{value.admNo}</p>
                    <p class="card-text">{value.rollNo}</p>
                  </div>
                </div>
              </div>
                }
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
