import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

    const {user}=useContext(UserContext);

    const navigate=useNavigate();

    function handdleBtn(){
        navigate('/')
    }
  return (
    <div className="container">
        <h1>Dashboard</h1>
        {user && <h2>{user.name}</h2>}
        <button className="btn" onClick={handdleBtn}>Bact to Home</button>
    </div>
  )
}
