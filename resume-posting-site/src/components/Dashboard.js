import React, { useState } from "react"
import { Card, Button, Alert, Container} from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import Navbar from "./Navbar"
// import lo from "./pn.jpg"
// import {
//   FaPlay
// } from "react-icons/fa";
// import { AiFillPicture, AiFillVideoCamera, AiFillLike } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs";
// import { RiGalleryUploadFill,RiHistoryLine, RiPlayListFill, RiSettings2Fill } from "react-icons/ri";
// import { MdLocalMovies,MdLiveTv, MdFavorite, } from "react-icons/md";
// import { IoMdLogOut } from "react-icons/io";
// import { VscFeedback, VscChevronDown } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
// import {
//   Nav,
//   NavLink,
//   // Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';

export default function Dashboard() {
  const [error, setError] = useState("")
  // const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    // try {
    //   await logout()
    //   history.push("/login")
    // } catch {
    //   setError("Failed to log out")
    // }
  }

  return (
    <>
  <div className="dash">
    Hello There,<br></br>
    Welcome to Ivan Software Private Limited (Design Interviews) Resume Posting Webiste
    <br></br>
    <br></br>
    Attach your resume here 
    <input type="file" name="Attach your Resume"></input>
  </div>
    </>
  )
}