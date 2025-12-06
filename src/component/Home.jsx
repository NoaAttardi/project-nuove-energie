import "bootstrap-icons/font/bootstrap-icons.min.css"
import { Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = function () {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "850px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src="/9789926-uhd_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.3)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "40%",
            transform: "translate(-60%, -10%)",
            color: "white",
            fontSize: "3rem",

            textShadow: "0 0 10px rgba(0,0,0,0.6)",
          }}
        >
          Innovazione sostenibile, progettata intorno alle esigenze del cliente
        </div>
      </div>
      <div className="text-center divscrit d-flex align-items-center justify-content-center">
        <p className="fs-2">
          Da 20 anni ci occupiamo di energia, offrendo soluzioni tecnologiche
          all’avanguardia e personale altamente qualificato per promuovere un
          futuro energetico sostenibile.
        </p>
      </div>
      <Container fluid className="mb-3">
        <Row className=" g-3">
          <Col sm={12} md={12} lg={6}>
            <div className="box-residenziale ">
              <h3 className="ms-3 mb-0 pt-3 colortextcard fs-6">
                NuovEnergie<i className="bi bi-brightness-high-fill ms-1"></i>
              </h3>
              <div className="divinsidecard colortextcard">
                <h3>Residenziale</h3>
                <p className="ms-5 me-5">
                  Impianti fotovoltaici chiavi in mano per abitazioni, per
                  un'energia pulita e conveniente direttamente dai raggi del
                  sole.
                </p>
                <Link
                  to={"/residenziale"}
                  className="buttonscard mt-3 btn btn-primary"
                  size="lg"
                >
                  Impianti residenziali
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className="box-busness">
              <h3 className="ms-3 mb-0 fs-6 pt-3 colortextcard">
                NuovEnergie<i className="bi bi-brightness-high-fill ms-1"></i>
              </h3>
              <div className="divinsidecard colortextcard">
                <h3>Business</h3>
                <p className="ms-5 me-5">
                  Soluzioni fotovoltaiche standard e su misura per le esigenze
                  energetiche delle imprese, con un occhio al risparmio e alla
                  sostenibilità.
                </p>
                <Link
                  to={"/Business"}
                  className="buttonscard mt-3 btn btn-primary"
                  size="lg"
                >
                  Business<i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="why-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold text-secondary">
                Perché scegliere <span className="highlight">NuovEnergie</span>
              </h2>
              <p className="lead text-muted">
                Non installiamo solo pannelli: costruiamo progetti energetici
                che funzionano, durano e fanno risparmiare.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col sm={12} md={4}>
              <div className="why-box">
                <i className="bi bi-award-fill"></i>
                <h5>Esperienza dal 2006</h5>
                <p>
                  Oltre 20 anni di installazioni residenziali, industriali e
                  grandi impianti. Conosciamo il settore, la normativa e le
                  soluzioni migliori.
                </p>
              </div>
            </Col>

            <Col sm={12} md={4}>
              <div className="why-box">
                <i className="bi bi-gear-fill"></i>
                <h5>Soluzioni chiavi in mano</h5>
                <p>
                  Dalla progettazione alle pratiche GSE, dall'installazione al
                  monitoraggio. Ci occupiamo di tutto, senza pensieri per il
                  cliente.
                </p>
              </div>
            </Col>

            <Col sm={12} md={4}>
              <div className="why-box">
                <i className="bi bi-graph-up-arrow"></i>
                <h5>Risparmio garantito</h5>
                <p>
                  Impianti ottimizzati per massimizzare produzione e ritorno
                  economico, con assistenza continua per tutta la vita utile
                  dell’impianto.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-5">
            <Col>
              <Link to="/contatti" className="btn btn-primary btn-lg">
                Parla con un consulente →
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
