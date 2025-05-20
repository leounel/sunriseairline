import '@/styles/Landing.css'
import BookingForm from "@/features/Booking/Booking"
import Carrousel from "@/features/Carrousel/Carrousel"

function Landing() {

    return ( 
      <main className='landing'>
        <section className='hero-section'>
          <header className='landing-header'>
            <span>Sunrise</span>
            <h1>Descubre y vuela hacia tu próxima aventura</h1>
          </header>
          <BookingForm/>
        </section>
        <section className='promotions-section'>
          <h2>Elige nuestras ubicaciones más exclusivas</h2>
          <Carrousel/>
        </section>
      </main>
    );
}
 
export default Landing;