import './Booking.css'
import route from './assets/icons/route.svg'
import Autocomplete from '@/components/Autocomplete/Autocomplete.tsx'

function Booking() {
    return (
        <div className='booking-container'>
            <form className='booking-form'>
                <div className='origin-destination-container'>
                    <div className='form-group'>
                        <label htmlFor='origin'>ORIGEN</label>
                        <div className='input-autocomplete-container'>
                            {/* <Autocomplete/> */}
                            <input id='origin' type='text' placeholder='Ezeiza, Buenos Aires, Argentina'/>
                        </div>
                    </div>
                    <img className='route-icon' src={route} alt='Icon of a route'/>
                    <div className='form-group'>
                        <label htmlFor='destination'>DESTINO</label>
                        <input id='destination' type='text' placeholder='Toscana, Florentina, Italia'/>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='date-go'>FECHAS</label>
                    <div className='date-container'>
                        <div className='date-group'>
                            <div className='date-button-container'>
                                <button className='date-button' type='button'/>   
                            </div>
                            <input id='date-go' type='text' placeholder='Ida'/>
                        </div>
                        <div className='date-group'>
                            <div className='date-button-container'>
                                <button className='date-button' type='button'/>
                            </div>
                            <input id='date-return' type='text' placeholder='Vuelta'/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='passengers'>PASAJEROS</label>
                    <input id='passengers' type='button' value='1 Pasajero(s)'/>
                </div>
                <div className='button-container'>
                    <div className='button-bg'>
                        <div className='button-trail'/>
                    </div> 
                    <button type='button'>Buscar</button>
                </div>
            </form>
        </div>
      )
}
 
export default Booking