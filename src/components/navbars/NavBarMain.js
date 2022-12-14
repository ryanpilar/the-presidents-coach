import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function NavBarMain(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
            <img alt="..." src={require("assets/img/brand/white.png")}></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
            aria-label={"open menu"}
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
            {/* HOME */}
            <NavItem>
              <Link className='nav-link' to="/" >
                <i className="fa fa-home d-lg-none pr-2"></i>
                <span className="nav-link-inner--text">Home</span>
              </Link>
            </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-favourite-28 d-lg-none pr-2"></i>
                  <span className="nav-link-inner--text">Coaching</span>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      to="/coaching/blue"
                      tag={Link}
                      aria-label={"check out the blue coaching program"}
                    >
                      <div className="icon icon-shape icon-shape-info rounded-circle">
                        {/* <i class="ni ni-check-bold"></i> */}
                        <i className="fab fa-patreon" aria-hidden="true"></i>
                        {/* <i className="ni ni-spaceship"></i> */}
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-info mb-md-1">
                          Mitch's Patreon 
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use compiling Scss, change brand colors
                          and more.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      to="/coaching/green"
                      tag={Link}
                      aria-label={"check out the green coaching program"}
                    >
                      <div className="icon icon-shape icon-shape-success rounded-circle">
                        <i className="ni ni-spaceship" aria-hidden="true"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-success mb-md-1">
                          Green
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use compiling Scss, change brand colors
                          and more.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      to="/coaching/orange"
                      tag={Link}
                      aria-label={"check out the orange coaching program"}
                    >
                      <div className="icon icon-shape icon-shape-warning rounded-circle">
                        <i className="ni ni-palette" aria-hidden="true"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-warning mb-md-1">
                          Orange
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn more about colors, typography, icons and the
                          grid system we used for .
                        </p>
                      </Media>
                    </Media>
                  </div>
                  <div className="dropdown-menu-footer">
                    <DropdownItem href="/coaching">
                      <i className="ni ni-atom"></i> See All Programs
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  aria-label={"see mitch's media types"}
                >
                  <i className="ni ni-button-play d-lg-none pr-2"></i>
                  <span className="nav-link-inner--text">Media</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">

                  <DropdownItem href="https://www.patreon.com/" tag='a' target='_blank' rel="noreferrer">
                    <i className="fab fa-patreon text-danger"></i>
                    Patreon
                  </DropdownItem>
                  <DropdownItem href="https://www.instagram.com/thepresidentscoach/" tag='a' target='_blank' rel="noreferrer">
                    <i className="fab fa-instagram text-red"></i>
                    Instagram
                  </DropdownItem>
                  <DropdownItem to="/media" tag={Link} aria-label={"mitch's media"}>
                    <i className="ni ni-button-play text-info" aria-hidden="true"></i>
                    Mitch's Media 
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <Link className='nav-link' to="/#contact-mitch" >
                  <i className="fas fa-phone-volume d-lg-none pr-2"></i>
                  <span className="nav-link-inner--text">Contact</span>
                </Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBarMain.defaultProps = {
  type: "dark",
};

NavBarMain.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default NavBarMain;
