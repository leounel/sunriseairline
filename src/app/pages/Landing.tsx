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
        <Carrousel/>
      </main>
    );
}
 
export default Landing;