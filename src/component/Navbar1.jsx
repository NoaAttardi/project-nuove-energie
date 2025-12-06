import { Nav, Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar1 = function () {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <Navbar expand="lg" className="navbar pt-3 pb-3">
        <Container fluid>
          <Link to={"/"} className="nav-link m-0">
            <img className="logo" src="nuove-energie_640px.jpg" alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to={"/"}
                className={
                  location.pathname === "/" ? "nav-item active" : "nav-item"
                }
              >
                Home
              </Link>
              <Link
                to={"/chisiamo"}
                className={
                  location.pathname === "/chisiamo"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                Chi siamo
              </Link>
              <Link
                to={"/servizi"}
                className={
                  location.pathname === "/servizi"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                {" "}
                Servizi
              </Link>

              <Link
                to={"/contatti"}
                className={
                  location.pathname === "/contatti"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                Contatti
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar1
