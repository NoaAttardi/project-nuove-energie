import { Link } from "react-router-dom"

const Business = function () {
  return (
    <>
      <div className="business-page">
        {/* HERO */}
        <header className="bus-hero">
          <div className="bus-hero-content">
            <p className="bus-breadcrumb">
              <Link to="/">Home</Link> / Business
            </p>
            <h1>Soluzioni Business</h1>
            <p className="bus-subtitle">
              Impianti fotovoltaici, comunità energetiche e servizi su misura
              per aziende che vogliono trasformare il costo dell’energia in un
              vantaggio competitivo.
            </p>
          </div>
        </header>

        <main>
          {/* INTRO */}
          <section className="bus-intro">
            <h2>Energia che lavora per la tua impresa</h2>
            <p>
              NuovEnergie affianca aziende, PMI e realtà produttive nella
              progettazione di impianti fotovoltaici scalabili, integrati nei
              processi e monitorati in tempo reale. Dalla copertura dei tetti
              industriali alle pensiline fotovoltaiche per parcheggi, ogni
              progetto è pensato per liberare risorse economiche e ridurre le
              emissioni.
            </p>
            <p>
              Non ci limitiamo a installare pannelli: progettiamo una strategia
              energetica a lungo termine che dialoga con i tuoi obiettivi di
              crescita, ESG e reputazione.
            </p>
          </section>

          {/* SOLUZIONI */}
          <section className="bus-solutions">
            <h2>Le nostre soluzioni per le aziende</h2>
            <div className="bus-solutions-grid">
              <article className="bus-card">
                <h3>Tetti industriali intelligenti</h3>
                <p>
                  Sfruttiamo ogni metro quadro del tuo tetto per generare
                  energia pulita, integrando sistemi di accumulo e monitoraggio
                  tramite piattaforma web dedicata.
                </p>
              </article>

              <article className="bus-card">
                <h3>Comunità energetiche aziendali</h3>
                <p>
                  Creiamo reti tra più siti produttivi e uffici, ottimizzando
                  l’energia prodotta e condivisa tra le varie sedi della tua
                  organizzazione.
                </p>
              </article>

              <article className="bus-card">
                <h3>Energy-as-a-Service</h3>
                <p>
                  Un modello innovativo: l’impianto lo realizziamo noi, tu paghi
                  solo l’energia prodotta a tariffa concordata, senza
                  investimento iniziale.
                </p>
              </article>
            </div>
          </section>

          {/* CASE STUDY 1 */}
          <section className="bus-case">
            <div className="bus-case-image">
              <img
                src="https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg"
                alt="Stabilimento industriale con pannelli fotovoltaici"
              />
            </div>
            <div className="bus-case-content">
              <h2>Stabilimento produttivo </h2>
              <p>
                Impianto fotovoltaico da 500 kWp con sistema di gestione dei
                carichi: le linee produttive più energivore sono state
                riprogrammate per funzionare nelle ore di massima produzione
                solare.
              </p>
              <ul>
                <li>– 38% costo energetico annuale</li>
                <li>ROI in 4,2 anni</li>
                <li>Monitoraggio H24 con dashboard personalizzata</li>
              </ul>
            </div>
          </section>

          {/* CASE STUDY 2 */}
          <section className="bus-case reverse">
            <div className="bus-case-image">
              <img
                src="https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg"
                alt="Parcheggio aziendale con pensiline solari"
              />
            </div>
            <div className="bus-case-content">
              <h2>Campus aziendale </h2>
              <p>
                Pensiline fotovoltaiche sul parcheggio dipendenti con colonnine
                di ricarica integrate. L’energia prodotta copre parte dei
                consumi degli uffici e rende la mobilità interna più
                sostenibile.
              </p>
              <ul>
                <li>Ricarica green per la flotta aziendale</li>
                <li>
                  Riduzione emissioni CO₂ comunicabile nel bilancio di
                  sostenibilità
                </li>
                <li>Nuovo spazio ombreggiato per dipendenti e visitatori</li>
              </ul>
            </div>
          </section>

          {/* BANDA DATI */}
          <section className="bus-stats">
            <div className="bus-stat">
              <span>–35%</span>
              <p>
                Costo medio della bolletta elettrica per i nostri clienti
                business
              </p>
            </div>
            <div className="bus-stat">
              <span>+20 anni</span>
              <p>di vita utile stimata degli impianti installati</p>
            </div>
            <div className="bus-stat">
              <span>100%</span>
              <p>
                progetti gestiti chiavi in mano: pratiche, incentivi e
                monitoraggio
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bus-cta">
            <h2>Porta la tua azienda nel futuro dell’energia</h2>
            <p>
              Analizziamo i consumi, lo spazio disponibile e gli obiettivi di
              sostenibilità della tua impresa e costruiamo insieme un piano
              energetico su misura.
            </p>

            <Link to="/contatti" className="btn btn-primary bus-cta-btn">
              Richiedi un’analisi energetica gratuita →
            </Link>
          </section>
        </main>
      </div>
    </>
  )
}
export default Business
