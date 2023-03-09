import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getAllPayments();
  }, []);

  async function getAllPayments() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/payments/all/");
      console.log(response.data)
      setPayments(response.data);
    } catch (exception) {
      console.log(`EROR in getVideoGames EXCEPTION: ${exception}`);
    }
  }
  return (
    <div className="container">
      <SideBar/>
    </div>
  );
};

export default HomePage;
