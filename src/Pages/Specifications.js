import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function Specifications() {
  // state and use Params
  const [profile, setProfile] = useState({});
  const params = useParams();
  const profileId = params.id;
  console.log(profileId);
  useEffect(() => {
    fetch(`https://mobileinsight-server.onrender.com/phones/${profileId}`)
      .then((r) => r.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, [profileId]);

  if (!profile.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <div  style={{backgroundColor:'#f8f9fa'}}>
      <a type="button" href="/" className="btn  btn-lg">MobileInsight</a>

    <div className="card m-2" key={profile.id} style={{ width: 18 + "rem" ,}}>
        <img
          src={profile.image}
          style={{ width: "200px", height: "200px" }}
          className="card-img-center"
          alt={profile.name}
        />
        {/* device specifications */}
        <div className="card-body">
          <h5 className="card-title"><strong>Name</strong>: {profile.name}</h5>
          <p className="card-text"><strong>Processor</strong>: {profile.processor}</p>
          <p className="card-text"><strong>Memory</strong>: {profile.memory}</p>
          <p className="card-text"><strong>Display</strong>: {profile.display}</p>
          <p className="card-text"><strong>Battery</strong>: {profile.battery}</p>
          <p className="card-text"><strong>Price</strong>: {profile.price}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Specifications;
