import { Container, Row, Col } from "react-bootstrap"

const Whoweare = function () {
  return (
    <div className="position-relative who-we-are-section py-5">
      <Container fluid="lg">
        <Row className="align-items-center g-5">
          {/* TESTO */}
          <Col xs={12} lg={7}>
            <div className="who-we-are-badge mb-3">
              <span className="text-uppercase fw-semibold">Chi siamo</span>
            </div>

            <h3 className="fs-2 fw-semibold text-secondary mb-3 colors2">
              Un partner energetico affidabile dal 2006
            </h3>

            <h4 className="text-uppercase fw-bold mb-4 whowearecolortext lh-base">
              NUOVENERGIE è un’azienda di Faenza che opera nel campo degli
              impianti fotovoltaici di piccole, medie e grandi dimensioni dal
              2006.
            </h4>

            <div className="who-we-are-copy">
              <p className="lead mb-3 whowearecolortext">
                NUOVENERGIE offre soluzioni “chiavi in mano” di impianti
                fotovoltaici su coperture aziendali, pensiline, tetti e terreni,
                proponendosi come partner affidabile, capace di garantire le
                migliori prestazioni e funzionalità degli impianti.
              </p>

              <p className="whowearecolortext mb-2">
                Ogni componente utilizzato nella realizzazione degli impianti
                viene selezionato con estrema cura, grazie a partnership
                consolidate con i fornitori e a una costante ricerca del miglior
                equilibrio tra:
              </p>

              <ul className="whowearecolortext mb-3 ps-3">
                <li>qualità del prodotto</li>
                <li>affidabilità dell’azienda</li>
                <li>sostenibilità dei costi</li>
              </ul>

              <p className="whowearecolortext mb-3">
                NUOVENERGIE si posiziona sul mercato di qualità degli impianti
                fotovoltaici, offrendo soluzioni progettate per durare nel
                tempo.
              </p>

              <p className="mb-4 whowearecolortext">
                Siamo un partner sempre al vostro fianco tramite contratti di
                manutenzione, assistenza amministrativa e sistemi di
                monitoraggio, che assicurano ai clienti performance e garanzia
                per tutta la vita utile dell’impianto.
              </p>
            </div>

            <div className="who-we-are-mission mt-4">
              <h4 className="fw-semibold text-secondary mb-2">Mission</h4>
              <p className="fst-italic whowearecolortext mb-0">
                Tecnologie per un benessere sostenibile. L’energia è la risorsa
                più critica del nostro tempo: il nostro obiettivo è favorire uno
                sviluppo che salvaguardi le risorse non rinnovabili e protegga
                l’ambiente, garantendo benessere oggi senza compromettere quello
                delle generazioni future.
              </p>
            </div>
          </Col>

          {/* IMMAGINE */}
          <Col xs={12} lg={5}>
            <div className="who-we-are-image-wrapper">
              <div className="who-we-are-image-shadow"></div>
              <img
                className="who-we-are-image"
                src="9065cd64-af74-46b2-9d15-51f272f0eb8e.png"
                alt="Team NuovEnergie"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Whoweare
