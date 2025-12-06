import { Link } from "react-router-dom"

const Error1 = function () {
  return (
    <>
      <div className="text-center mt-5 d-flex flex-column align-content-center">
        <div className=" flex-grow-1 min-vh-100 align-content-center">
          <p className="m-0">Cerchi qualcosa in particolare?</p>
          <p className="m-0">
            Ci dispiace. L'indirizzo Web inserito corrisponde a una pagina non
            funzionante del nostro sito.
          </p>
          <p className="m-0">
            Vai alla
            <Link to={"/"}>home page </Link>
            di NuovEnergie
          </p>
        </div>
      </div>
    </>
  )
}
export default Error1
