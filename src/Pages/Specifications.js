import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function Specifications() {
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
        <div className="card-body">
          <h5 className="card-title">Name: {profile.name}</h5>
          <h5 className="card-text">Processor: {profile.processor}</h5>
          <h5 className="card-text">Memory: {profile.memory}</h5>
          <h5 className="card-text">Display: {profile.display}</h5>
          <h5 className="card-text">Battery: {profile.battery}</h5>
          <h5 className="card-text">Price: {profile.price}</h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Specifications;
