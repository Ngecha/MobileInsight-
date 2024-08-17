import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PhoneCard({ pageOne, search }) {
  return (
    <div>
      <div className="d-flex flex-wrap m-4" style={{backgroundColor:'#f8f9fa'}}>
        {pageOne
          .filter((phone) => {
            return search === ""
              ? phone
              : phone.name.includes(search);
          })
          .map((phone) => (
            <div
              className="card m-2"
              key={phone.id}
              style={{ width: 18 + "rem" }}
            >
              <img
                src={phone.image}
                style={{ width: "200px", height: "200px" }}
                className="card-img-center"
                alt={phone.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/specs/${phone.id}`}>{phone.name}</Link>
                </h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PhoneCard;
