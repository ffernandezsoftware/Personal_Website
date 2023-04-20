import { NavLink , useNavigate } from 'react-router-dom'
import { useState } from 'react';

function NavBar(props){
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <nav className='md:fixed top-0 left-0 right-0 z-50 w-full lg:pr-28 lg:pl-28 pr-12 pl-12 flex flex-col justify-between items-center md:flex-row' style={{ background: '#020a33' }}>
            <div>
                <img src = "../src/assets/Logotipo/Francisco Fernandez.png" alt="Logo Francisco Fernandez" className={`h-20 m-5 `}/>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 mb-6  text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggleMenu}>
                {!isMenuOpen ? (
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                ):(
                    <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                )}
            </button>
            <div className={`mb-5 md:mb-0 w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
                <ul className=" text-center text-white font-medium flex flex-col md:p-0  space-y-4 md:space-y-0  md:flex-row md:space-x-6 lg:space-x-10 md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.home)}>INICIO</a></li>
                    <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.academics)}>LOGROS ACADEMICOS</a></li>
                    <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.skills)}>APTITUDES</a></li>                    
                    <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.contacto)}>CONTACTO</a></li>
                </ul>
            </div>
 
        </nav>
    )
    
}

export default NavBar



//style={{ background: 'linear-gradient(to bottom right, rgba(78, 83, 177, 0.6), rgba(2, 10, 51, 0.6))' }}
//style={{ background: 'linear-gradient(to bottom right,#020a33 ,  #4e53b1)' }}

//style={{ background: 'linear-gradient(to bottom right,#4e53b1 , #020a33 )' }}




/**<div className={`flex flex-col pt-10 pb-7 ${isMenuOpen ? 'justify-center' : ''}`}>
                <div >
                    <img src = "../src/assets/Logotipo/Logotipo-3Rec.png" className={`hidden md:block h-20 mt-5 mb-5 pr-5 ${isMenuOpen ? 'hidden' : ''}`}/>
                </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 mb-6  text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggleMenu}>
                        {!isMenuOpen ? (
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        ):(
                            <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                        )}
                    </button>

                    <div className={` w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
                        <ul className=" text-center text-white font-medium flex flex-col md:p-0  space-y-4 md:space-y-0  md:flex-row md:space-x-8 lg:space-x-10 md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.home)}>INICIO</a></li>
                            <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.skills)}>APTITUDES</a></li>
                            <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.academics)}>LOGROS ACADEMICOS</a></li>
                            <li className="hover:underline hover:underline-offset-8 text-lg font-thin md:font-light md:text-lg"><a onClick={() => props.scrollToSection(props.contacto)}>CONTACTO</a></li>
                        </ul>
                    </div>
                </div> */