import { Container, Col, Row, Button, Form } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"

const Form1 = function () {
  const [date, setDate] = useState({
    nomecognome: "",
    email: "",
    telefono: "",
    comune: "",
    azienda: false,
    messaggio: "",
    privacy: false,
  })
  const [message, setMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "ed5b934d-e7a9-4c9a-b602-e4cf50d7cdd3",
        nomecognome: date.nomecognome,
        email: date.email,
        telefono: date.telefono,
        comune: date.comune,
        azienda: date.azienda ? "Sì" : "No",
        messaggio: date.messaggio,
        privacy: date.privacy ? "Accettata" : "Non accettata",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if (data.success) {
          setMessage("Messaggio inviato con successo ✔️")

          // reset del form
          setDate({
            nomecognome: "",
            email: "",
            telefono: "",
            comune: "",
            azienda: false,
            messaggio: "",
            privacy: false,
          })
          setTimeout(() => setMessage(null), 4000)
        } else {
          setMessage("Errore durante l'invio")
          setTimeout(() => setMessage(null), 4000)
        }
      })
  }

  return (
    <>
      <Container className="mt-5">
        <div className="who-we-are-badge mb-3">
          <span className="text-uppercase fw-semibold">Contatti</span>
        </div>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.633400612489!2d11.863239411855831!3d44.296927610438786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b4e6d53d098fd%3A0x876d96b592b4d09!2sNuovEnergie%20srl!5e0!3m2!1sit!2sit!4v1764922751412!5m2!1sit!2sit"
              style={{ border: 0, width: "100%", height: 450 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Nuovenergie"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container className="contact-section mt-5 mb-5">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={8}>
            <div className="contact-box">
              <h3 className="contact-title text-center mb-4">
                Siamo qui per aiutarti
              </h3>

              <Row className="g-4 text-center">
                <Col xs={12}>
                  <div className="contact-detail">
                    <h5 className="fw-bold mb-1">NUOVENERGIE s.r.l.</h5>
                    <p className="mb-0">Viale Risorgimento, 26</p>
                    <p className="mb-0">48018 Faenza (RA)</p>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className="contact-item">
                    <i className="bi bi-telephone-outbound"></i>
                    <span>Telefono</span>
                    <a href="tel:+390546622095">+39 0546 622095</a>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className="contact-item">
                    <i className="bi bi-fax"></i>
                    <span>Fax</span>
                    <p className="mb-0">+39 0546 3998031</p>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:info@nuovenergie.com">
                      info@nuovenergie.com
                    </a>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className="contact-item">
                    <i className="bi bi-whatsapp"></i>
                    <span>WhatsApp</span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/3429383946"
                    >
                      342 938 3946
                    </a>
                  </div>
                </Col>
              </Row>

              <div className="text-center mt-4">
                <Link
                  to={"https://wa.me/3429383946"}
                  className="btn btn-primary contact-btn"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className=" justify-content-center">
          <Col sm={12} md={6} lg={6}>
            <h3 className="mb-0 text-center">
              Richiedi il tuo preventivo tecnico su misura
            </h3>

            <br />
            <p className="fs-6 fw-light text-center">
              Compila il modulo per un'analisi gratuita basata sul tuo tetto e
              sui tuoi consumi reali. Scopri subito gli incentivi a te dedicati.
            </p>
          </Col>
        </Row>
        <Row className=" justify-content-center pt-4 pb-5 imgcontainer">
          <Col sm={12} md={6} lg={6}>
            {message && <div className="form-message mt-3">{message}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                value={date.nomecognome}
                onChange={(e) => {
                  setDate({
                    ...date,
                    nomecognome: e.target.value,
                  })
                }}
              >
                <Form.Label>Nome e Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome e Cognome"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={date.email}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      email: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Telefono"
                  value={date.telefono}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      telefono: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comune</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Comune"
                  value={date.comune}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      comune: e.target.value,
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Sei un'azienda?"
                  checked={date.azienda}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      azienda: e.target.checked,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={date.messaggio}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      messaggio: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Privacy</Form.Label>
                <Form.Check
                  className="fontinput"
                  type="checkbox"
                  label="Selezionando questa casella, confermi di aver letto e accettato le nostre condizioni d'uso relative alla conservazione dei dati inviati tramite questo modulo. (Mod. GDPR Rev. 0 del 25.05.2018)"
                  checked={date.privacy}
                  onChange={(e) => {
                    setDate({
                      ...date,
                      privacy: e.target.checked,
                    })
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                INVIA LA TUA RICHIESTA
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Form1
