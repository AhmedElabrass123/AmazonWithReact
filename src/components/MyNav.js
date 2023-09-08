import React, { useContext } from "react";
import { Button, Container, Navbar, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logoo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { theContext} from "./StateProvider";
import { auth } from "../firebase";
const MyNav = () => {
  const [{basket,user},dispatch]=useContext(theContext);
  const login=()=>{
    auth.signOut();
  }
  return (
    <>
      <Navbar expand="lg" className="bg-dark"style={{zIndex:"100",top:"0",position:"fixed",width:"100%"}} >
        <Container>
          <Link to="/" className="me-5">
            <img
              src={logo}
              alt="Sorry"
              style={{ width: "90px", height: "50px", borderRadius: "2px" }}
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <Form className="d-flex me-3">
            <div className="search" style={{position:"relative"}}> 
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              
              {/* <SearchIcon/> */}
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white position-absolute" 
              style={{right:"0px",top:"0px",backgroundColor:"orange",padding:"11px",
              borderStartEndRadius:"2px",
              borderBottomRightRadius:"2px"}}/>
            </div>
             
            </Form>
            <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
            
            navbarScroll
          >
            <div className="sign" onClick={login}>
                <p>Hello,{user?.email}</p>
                <Link to={!user && "/login"}>{user ? "SignOut":"SignIn"}</Link>
            </div>
            <div className="sign">
                <p>return, </p>
                <Link to="/s">&Order</Link>
            </div>
            <div className="sign">
                <p>Your</p>
                <Link to="/x">Prime</Link>
            </div>
              <div className="basket">
                  <span>{basket?.length}</span>
                  <Link to="/checkout">
                  <FontAwesomeIcon icon={faBasketShopping} />
                  </Link>
              </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* logo image */}
      {/* search par */}
      {/* three Links */}
      {/* basket icon with the number*/}
    </>
  );
};

export default MyNav;
