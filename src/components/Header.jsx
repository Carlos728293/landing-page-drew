import { useState } from 'react';

import Links from './Links';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

// IMAGES
import logoLight from "../assets/images/logo/logo-light.svg";
import logoDark from "../assets/images/logo/logo-dark.svg";

function Header() {

    {/* MODO DARK */}
    const [ dark, setDark ] = useState(false);

    function toggleTheme() {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }

    {/* MENU MOBILE */}
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);

    }

    return (

        <header className='
            bg-[#111827ac] backdrop-blur-sm text-[#9ca3af] fixed top-0 z-10 w-full border-b border-[#4b5563]
            dark:bg-stone-50 dark:border-[#e5e7eb]
        '>

            <nav className='py-3 px-4 flex items-center justify-between lg:px-35'>

                {/* Logo */}
                <a href='#hero' className="w-30 lg:w-32">
                    <img src={ logoDark } alt="Logo Light" className='dark:hidden' />
                    <img src={ logoLight } alt="Logo Dark" className='hidden dark:flex' />
                </a >

                {/* Menu */}
                <ul className={`
                        absolute top-full right-5 w-48
                        bg-white dark:bg-gray-800 text-stone-50 font-semibold rounded-lg shadow-lg p-4
                        ${menuAberto ? "flex flex-col gap-3" : "hidden"} lg:dark:text-gray-800
                        lg:static lg:flex lg:flex-row lg:gap-6 lg:w-auto lg:bg-transparent lg:dark:bg-stone-50 lg:p-0 lg:shadow-none
                    `}>
                    <Links href={"#"} title={"Início"} />
                    <Links href={"#"} title={"Sobre"} />
                    <Links href={"#"} title={"Serviços"} />
                    <Links href={"#"} title={"Equipe"} />
                    <Links href={"#"} title={"Planos"} />
                </ul>

                <div className="flex items-center gap-5">

                    {/* CTA */}
                    <a href="#" className='hidden bg-blue-600 text-stone-50 py-2 px-3 font-semibold rounded-md lg:block'>Contatar</a>

                    {/* Modo dark */}
                    <div className="text-2xl">
                        {/* Ícone de lua aparece no claro (para ir ao escuro) */}
                        <button onClick={toggleTheme} className='hidden cursor-pointer dark:block'>
                            <FontAwesomeIcon icon={faMoon} />
                        </button>


                        {/* Ícone de sol aparece no dark (para voltar ao claro) */}
                        <button onClick={toggleTheme} className='cursor-pointer dark:hidden '>
                            <FontAwesomeIcon icon={faSun} />
                        </button>
                    </div>

                    {/* Botão Menu */}
                    <div className="text-2xl lg:hidden">
                        {/* Abrir */}
                        <button onClick={toggleMenu} className={`cursor-pointer ${menuAberto ? "hidden" : "block"}`}>
                            <FontAwesomeIcon icon={faBarsStaggered} />
                        </button>

                        {/* Fechar */}
                        <button onClick={toggleMenu} className={`cursor-pointer ${menuAberto ? "flex" : "hidden "}`}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>

                </div>

            </nav>

        </header>

    );

}

export default Header