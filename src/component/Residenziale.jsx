import { Link } from "react-router-dom"

const Residenziale = function () {
  return (
    <>
      <div className="residential-page">
        {/* HEADER */}
        <header className="res-hero">
          <div className="res-hero-content">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Progetti Residenziali
            </p>
            <h1>Progetti Residenziali</h1>
            <p className="subtitle">
              Ogni installazione racconta una scelta: indipendenza energetica,
              sostenibilità e valore per la propria casa.
            </p>
          </div>
        </header>

        {/* INTRO BLOCK */}
        <section className="res-intro-block">
          <h2>L'energia sostenibile inizia da casa</h2>
          <p>
            I nostri impianti fotovoltaici residenziali sono progettati per
            offrire efficienza, estetica e durata nel tempo. Ogni progetto nasce
            da analisi reali dei consumi e viene installato con la massima cura
            per integrarsi perfettamente con l’architettura esistente.
          </p>

          <p>
            Crediamo in un futuro in cui ogni abitazione sia autonoma,
            intelligente e capace di produrre la propria energia. Con
            NuovEnergie, quel futuro inizia oggi.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="project-grid">
          {/* Project 1 */}
          <article className="project">
            <img
              src="211006677_4813116402037293_4676366584127022852_n.jpg"
              alt="Casa moderna con pannelli solari"
            />
            <div>
              <h3>Casa indipendente — Faenza (RA)</h3>
              <p>
                Nuovi impianti fotovoltaici installati a Faenza (RA) composti da
                moduli Peimar ed inverter Huawei!
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project reverse">
            <img
              src="89101602_3397738443575103_5624511457979793408_n.jpg"
              alt="Casa in collina con pannelli solari"
            />
            <div>
              <h3>Villa ecosostenibile — Faenza (RA)</h3>
              <p>
                Soluzione Impianto da 6,21 kWp installato a Faenza (RA) con
                moduli QCells DUO ed inverter trifase Fronius!
              </p>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project">
            <img
              src="78251965_3197009426981340_6436449453053313024_n.jpg"
              alt="Casa con pannelli solari"
            />
            <div>
              <h3>Casa — Sartorano (BO)</h3>
              <p>
                Nuovo impianto da 5,94 kWp installato a Sartorano (BO) con
                moduli Panasonic ed inverter Fronius! L'esposizione Est-Ovest
                garantisce una produzione lungo tutto l'arco della giornata, sia
                in inverno sia in estate!
              </p>
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="cta-section mb-5">
          <h2>Vuoi scoprire quanto potresti risparmiare?</h2>
          <p>
            Ogni abitazione è unica — calcoliamo il potenziale energetico e il
            ritorno economico del tuo futuro impianto.
          </p>
          <Link to="/contatti" className="btn btn-primary mt-3 cta-btn">
            Richiedi uno studio gratuito →
          </Link>
        </section>

        {/* FOOTER */}
      </div>
    </>
  )
}

export default Residenziale
