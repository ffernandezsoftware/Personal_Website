import React, { useState,useEffect } from 'react';
import {lenguajes as dataLenguaje} from './Languages';
import { masConocimientos as dataSkills} from "./MoreSkills";
import Nota from "./Nota";

function Skills() {
    const [nivel, setNivel] = useState('alto');
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [lenguajes, setLenguajes] = useState([]);
    const [masConocimientos, setMasConocimientos] = useState([]);
    const [categoria, setCategoria] = useState('Matematicas');
    const [selectedOption, setSelectedOption] = useState('');
    
    useEffect(() => {setLenguajes(dataLenguaje)},[]);
    useEffect(() => {setMasConocimientos(dataSkills)},[]);

    const handleMoreOpen = () => {
        setIsMoreOpen(!isMoreOpen);        
    }

    function cambiarCategoria(nuevaCategoria){
        setCategoria(nuevaCategoria);
    }

    function cambiarNivel(nuevoNivel) {
        setNivel(nuevoNivel);
    }

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);        
        cambiarCategoria(event.target.value);                
    }

    return (
        <div className='p-2 flex flex-col items-center mb-28'>
            <h1 className='text-white font-bold text-3xl text-center mb-5'>NIVELES DE PROGRAMACION</h1>
            <div className="mb-4  flex justify-center">                
                <button className={`m-2 rounded p-2 border-2 border-black ${nivel === 'alto' ? 'bg-white text-black ' : 'bg-gradient-to-r from-blue-900 to-blue-500  text-white border-white'}`} onClick={() => cambiarNivel('alto')}>Nivel Alto</button>
                <button className={`m-2 rounded p-2 border-2 border-black ${nivel === 'medio' ? 'bg-white text-black' : 'bg-gradient-to-r from-blue-900 to-blue-500 text-white border-white'}`} onClick={() => cambiarNivel('medio')}>Nivel Medio</button>
                <button className={`m-2 rounded p-2 border-2 border-black ${nivel === 'basico' ? 'bg-white text-black' : 'bg-gradient-to-r from-blue-900 to-blue-500 text-white border-white'}`} onClick={() => cambiarNivel('basico')}>Nivel Básico</button>
            </div>

            <div className='mb-10'>
                {lenguajes
                    .filter((lenguaje) => lenguaje.nivel === nivel)
                    .map((lenguaje) => (
                    <div key={lenguaje.nombre} className="flex flex-col items-center">
                        <div className='flex items-center mt-4 justify-between'>
                            <span className='text-white text-xl mb-2 mr-3'>{lenguaje.nombre}</span>
                            <img className='m-1 mb-2' src={lenguaje.logo} alt={lenguaje.alt}></img>
                        </div>
                        
                        <Nota nota={lenguaje.nota} />
                    </div>
                    ))}
            </div>

            <button data-collapse-toggle="expandMore" type="button" aria-controls="expandMore" aria-expanded="false" onClick={handleMoreOpen} className='rounded border-white border-2 text-white bg-gradient-to-r from-blue-900 to-blue-500 p-2 m-4'>{isMoreOpen ? 'Ver menos -' : 'Ver más conocimientos +'}</button>
            <div id = 'expandMore' className={` ${isMoreOpen ? '' : 'hidden'}`}>
                <form action="#" className='flex flex-col items-center m-5 w-70 '>
                    <label className='text-white mb-1' htmlFor="option">Seleccione una categoria:</label>
                    <select className="rounded-lg text-center  mb-3 p-1" name="optionsMore" id="option" value={selectedOption} onChange={handleOptionChange}>
                        <option value="Matematicas">Matematicas y fisica</option>
                        <option value="Logica">Logica digital y hardware</option>
                        <option value="Programacion">Relacionados con programacion</option>
                        <option value="Otros">Otros conocimientos</option>                        
                    </select>
                </form>                
                {
                    masConocimientos.filter((conocimiento) => conocimiento.categoria === categoria)
                    .map((conocimiento) => (
                        <div key={conocimiento.nombre} className="flex flex-col items-center">
                            <span className='text-white  text-lg sm:text-xl mb-2 mt-2 text-center pl-2 pr-2'>{conocimiento.nombre}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
  
export default Skills;
