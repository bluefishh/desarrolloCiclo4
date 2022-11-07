import imagenHome from "./homeheroes.webp";

function Home(props) {
    return (
        <>
            <div className="container col-xxl-9 px-7 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 m-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={imagenHome}
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            La mejor ayuda al comerciante local
                        </h1>
                        <p className="lead">
                            Buscamos poder brindar el control en la deuda de los
                            clientes de tu comercio, aquí podrás llevar a cabo
                            el registro de aquellos productos que son fiados
                            removiendo por completo el cuaderno o la forma
                            clásica en la que se llevaba el control por una
                            herramienta más segura y eficiente.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;