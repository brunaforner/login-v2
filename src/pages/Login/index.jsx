import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

import logoIMG from "../../assets/logo.jpg";
import { LayoutComponents } from "../../components/LayoutComponents";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, signed } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        await signIn(data);
    };
    console.log(signed);
    if (!signed) {
        return (
            <LayoutComponents>
                <form onSubmit={handleSubmit} className="login-form">

                    <span className="login-form-title">
                        <img src={logoIMG} alt="Finanças" />
                    </span>

                    <span className="login-form-title"> Bem vindo! </span>

                    <div className="wrap-input">
                        <input
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Password"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button type="submit" className="login-form-btn">
                        <Link className="txt2" to="/home">
                            Login
                            </Link>
                        </button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta? </span>
                        <Link className="txt2" to="/register">
                            Criar conta.
                        </Link>
                    </div>

                    <div class="text-rodape"> Venha participar do nosso time! Organize sua vida financeira com a gente.</div>
                </form>
            </LayoutComponents>
        );
    } else {
        return <Navigate to="/home" />;
    }
};
