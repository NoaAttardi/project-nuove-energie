import { Container, Row, Col, Card, Accordion } from "react-bootstrap"

const Service1 = function () {
  return (
    <>
      <Container className="mt-5 card-grid-container " fluid>
        <div className="who-we-are-badge mb-3">
          <span className="text-uppercase fw-semibold"> I nostri servizi</span>
        </div>

        <Row className=" justify-content-between g-2 g-md-3 g-lg-4 mt-0 ">
          <Col
            sm={12}
            md={6}
            lg={4}
            className="  d-flex justify-content-center "
          >
            <Card className="cardcontenitore  border-0 ">
              <Card.Img
                variant="top"
                src="Fotovoltaico-800x800.png"
                className="cardimg"
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="p-2 text-start colortextcard2">
                        Fotovoltaico
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      NUOVENERGIE si occupa di tutti gli aspetti legati alla
                      realizzazione dell’impianto fotovoltaico. Con la nostra
                      opzione chiavi in mano seguiamo il cliente dal preventivo
                      iniziale fino all’installazione.
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            className="  d-flex justify-content-center "
          >
            <Card className="cardcontenitore  border-0 ">
              <Card.Img
                variant="top"
                src="0fbe6d59-1a3f-4e3c-a781-dc25226085d7.png"
                className="cardimg"
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="p-2 text-start colortextcard2">
                        Mobilità elettrica
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Progettiamo e installiamo stazioni di ricarica per veicoli
                      elettrici, offrendo soluzioni personalizzate per
                      abitazioni, aziende e infrastrutture pubbliche,
                      all’insegna della mobilità sostenibile.
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className=" d-flex justify-content-center">
            <Card className="cardcontenitore  border-0 ">
              <Card.Img
                variant="top"
                src="Efficienza-Energetica-2-800x726.jpg"
                className="cardimg "
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="p-2 text-start colortextcard2">
                        Efficenza energetica
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Ottimizziamo i consumi della tua azienda attraverso
                      soluzioni avanzate di efficienza energetica. Dall’analisi
                      dettagliata dei fabbisogni fino all’implementazione di
                      tecnologie innovative, ti aiutiamo a ridurre i costi
                      operativi, migliorare le prestazioni degli impianti e
                      garantire un utilizzo intelligente dell’energia. Un
                      approccio mirato, sostenibile e orientato al massimo
                      rendimento.
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={4}
            className="  d-flex justify-content-center "
          >
            <Card className="cardcontenitore border-0 ">
              <Card.Img
                variant="top"
                src="public/Servizi-1-800x726.png"
                className="cardimg "
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="p-0 text-start colortextcard2">
                        Manutenzione e assistenza
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      NUOVENERGIE garantisce un servizio completo di interventi
                      e manutenzione degli impianti fotovoltaici, assicurando
                      efficienza, sicurezza e continuità energetica. Monitoriamo
                      costantemente le prestazioni degli impianti e interveniamo
                      in modo rapido in caso di guasti, cali di rendimento o
                      aggiornamenti necessari. Offriamo manutenzione programmata
                      e straordinaria, pulizia dei moduli, controlli tecnici
                      approfonditi e verifiche delle componenti elettroniche,
                      assicurando al cliente un impianto sempre performante e
                      affidabile nel tempo..
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            className="  d-flex justify-content-center "
          >
            <Card className="cardcontenitore  border-0 ">
              <Card.Img
                variant="top"
                src="Tecnologico-1-800x725.png"
                className="cardimg "
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="text-start colortextcard2">
                        Tecnologico
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      NUOVENERGIE integra sistemi tecnologici avanzati per
                      monitorare, ottimizzare e gestire ogni impianto in tempo
                      reale. Grazie a piattaforme digitali, sensori intelligenti
                      e sistemi di controllo evoluti, garantiamo prestazioni
                      elevate, continuità operativa e massima efficienza
                      energetica per ogni cliente.
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            className="  d-flex justify-content-center "
          >
            <Card className="cardcontenitore border-0 ">
              <Card.Img
                variant="top"
                src="04e8c8e3-56b3-4cee-9e90-c605325e18ae.png"
                className="cardimg "
              />
              <Card.Body className="p-0 mt-3">
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="p-0 text-start colortextcard2">
                        Batterie di accumulo
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Offriamo soluzioni di batterie di accumulo personalizzate,
                      progettate in base ai consumi reali e alle esigenze
                      energetiche del cliente. Installiamo sistemi sicuri e
                      affidabili che aumentano l’autonomia dell’impianto
                      fotovoltaico, massimizzando l’autoconsumo e riducendo i
                      costi energetici.
                      <br />
                      Sistemi di accumulo energia per impianti fotovoltaici
                      residenziali e industriali.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div>
          <Row className="justify-content-center  ">
            <h2 className=" fw-bold mt-5 ms-3 h2colors  ">
              Adempimenti amministrativi
            </h2>
            <Col className="d-flex flex-column  ">
              <Card.Body className=" p-0  ">
                <Accordion flush className="accordion-gse gse-accordion   ">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header  ">
                      <span className="p-0  ms-3 fw-semibold ">
                        {" "}
                        <i className="bi bi-plus-lg"></i> GSE
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed  ">
                      <li>
                        Comunicazioni modifiche impianti per il mantenimento
                        della tariffa incentivante
                      </li>
                      <li>Variazioni IBAN</li>
                      <li>Volture impianti</li>
                      <li>Fuel mix energetico</li>
                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i> Agenzia delle Dogane e
                        Area
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed p-0 ">
                      <li>Dichiarazioni annuali</li>
                      <li>Unbundling</li>
                      <li>Taratura contatori</li>
                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion ">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i> Gestore di rete
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <li>Pratiche di connessione</li>
                      <li>Subentri e volture</li>

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i>ENEA
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <li>
                        Pratica per richiesta detrazione fiscale su impianti
                        fotovoltaici
                      </li>

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i>Tarature contatori
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <li>
                        Tutti i produttori sopra i 20 kWp sono responsabili
                        della verifica della taratura dei gruppi di misura
                        aventi rilevanza fiscale (contatori di produzione e
                        scambio) da effettuarsi ogni tre anni ad opera di
                        aziende autorizzate.
                      </li>
                      <img src="dogane.jpg" alt="Logo dogane" />

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <h2 className=" fw-bold mt-5 ms-3 h2colors">Servizi Speciali</h2>
            <Col className="d-flex flex-column ">
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i>
                        Perizie tecnico / economiche di impianti in esercizio
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <p>
                        Verifichiamo l’integrità e la funzionalità di impianti
                        gia installati sia dal punto di vista tecnico che dal
                        punto di vista economico.
                      </p>

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0 ">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i>
                        Linee Vita
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <p>
                        NUOVENERGIE SRL si occupa di tutto quello che riguarda
                        la messa in sicurezza delle coperture. In particolare:
                        Realizzazione Linee Vita “Chiavi in Mano” Progettazione
                        e certificazione di sistemi anticaduta. Revisione e
                        manutenzione periodica dei dispositivi. Collaudi con
                        prove strumentali.
                      </p>

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Card.Body className="p-0  mb-5">
                <Accordion flush className="accordion-gse gse-accordion">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="acc-header-custom gse-header">
                      <span className="p-0  ms-3 fw-semibold">
                        {" "}
                        <i className="bi bi-plus-lg"></i>
                        Termografia
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="ps-5 accordion-body-fixed ">
                      <p>
                        I moduli fotovoltaici possono presentare nel tempo
                        problemi di surriscaldamento. Con un’analisi
                        termografica è possibile rilevare eventuali problemi di
                        questo tipo.
                      </p>

                      <hr />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
export default Service1
