import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Navbar from "./Navbar";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  // state management
  const [pageOne, setPageOne] = useState([]);
  const [search, onSearch] = useState([]);

  useEffect(() => {
    fetch("https://mobileinsight-server.onrender.com/phones")
      .then((r) => r.json())
      .then((phones) => {
        setPageOne(phones);
      });
  }, []);

  return (
    // main page(landing page)
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Navbar onSearch={onSearch} />
      <Header />
      <h3 className="p-3">SMART PHONES</h3>
      <PhoneCard search={search} pageOne={pageOne} />
      <p className="p-2">
        Would you like to add a device?
        {/* link to the newphone page */}
        <Link to={"/newphone"}>
          <em>click here</em>
        </Link>
      </p>
      <Footer />
    </div>
  );
}

export default Home;
