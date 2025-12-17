import AppRouter from '../RouterDom/AppRouter'
import Header from '../pages/Header'
import Footer from '../Pages/Footer'
import { useLocation } from 'react-router-dom'
import Time from '../pages/Time';




export default function Mainlayout() {

  let hidePath = ['/userform','/signup','/login'];
  let location = useLocation();

  const userLocation = hidePath.includes(location.pathname)

  return (
      <>
        {!userLocation && <Header/>}
        <Time/>
        <AppRouter/>
         {!userLocation && <Footer/>}
      </>    
  )
}