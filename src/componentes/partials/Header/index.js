import React from "react";
import {HeaderArea} from './styles';
import {Link} from 'react-router-dom';
import {isLogged} from '../../../helpers/AuthHandler' 

const Header = () =>{
let logged = isLogged()
    return(
        <HeaderArea>
        <div className="container">
            <div className="logo">
            <Link to="">
                <span className="logo-1">O</span>
                <span className="logo-2">L</span>
                <span className="logo-3">X</span>

            </Link>
            </div>
            <nav>
                <ul>
                    {logged && 
                        <>
                        <li>
                        <link to="/my-account">Minha Conta</link>
                    </li>
                    <li>
                        <link to="/logout" className="button">sair</link>
                    </li>
                    <li>
                        <link to="/signin"  className="button">Postar</link>
                    </li>
                        </>

                    }
                    {!logged &&
                        <>
                        <li>
                        <link to="/signin">Login</link>
                    </li>
                    <li>
                        <link to="/signin" className="Button">Cadastrar</link>
                    </li>
                    <li>
                        <link to="/signin" className="Button">Postar Anucio</link>
                    </li>
                        </>
                    }
                    
                </ul>
            </nav>
        </div>
        </HeaderArea>
    )
}
export default Header()