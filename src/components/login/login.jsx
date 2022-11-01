function Login({ logo }) {
    return (
        <div>
            <main>
                <p class="fs-1 fw-bold">Iniciar sesión</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <span class="material-symbols-outlined">
                            alternate_email
                        </span>
                    </span>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Correo electrónico"
                        aria-label="Correo electrónico"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"
                        ><span class="material-symbols-outlined"> key </span></span
                    >
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Contraseña"
                        aria-label="Contraseña"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div class="btnlogin">
                    <a href="main.html"
                        ><button type="button" class="btn btn-secondary">
                            Acceder
                        </button>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Login;