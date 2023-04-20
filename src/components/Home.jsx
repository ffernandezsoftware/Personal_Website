import { NavLink , useNavigate } from 'react-router-dom'


function Home(){
  const navigate = useNavigate()
  
  const navigateSkills = () => {
      navigate('/skills')
  } 
  const navigateAcademics = () => {
      navigate('/academics')
  } 
  const navigateContact = () => {
      navigate('/contact')
  } 

  return (
    <div className=" md:flex  md:justify-center  flex flex-col text-center items-center mt-20 mb-44">
      
        <div className='rounded-full   mb-8 ml-auto mr-auto'>
          <img alt = "Perfil Francisco Fernandez" src="../src/assets/Perfil/Perfil4c.jpg" className='rounded-full h-56'></img>
        </div>
        <div>
          <h1 className='text-white text-center font-semibold text-4xl p-5'>FRANCISCO FERNÁNDEZ RUIZ</h1>
          <h2 className='text-white text-center font-medium text-2xl p-5'>DESARROLLADOR WEB FULL STACK</h2>
        </div>
        <div className="w-auto p-3">
          <p className='text-white text-center p-3'>Soy un estudiante de ingeniería informática de 4º curso.</p>
          <p className='text-white text-center p-3'>Mi especialidad es el desarrollo web tanto de front-end como de back-end.</p> 
          <p className='text-white text-center p-3'>¡Si quieres saber más acerca de mí te invito a explorar mi pagina web!</p>
        </div>        
    
    </div>
  )
}

export default Home