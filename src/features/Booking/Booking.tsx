import { Select, SelectItem } from '@/features/Booking/components/Select/Select'
import './Booking.css'
import route from './assets/icons/route.svg'
import Autocomplete from '@/components/Autocomplete/Autocomplete.tsx'
import OriginIcon from './assets/icons/origin.svg?react'
import DestinationIcon from './assets/icons/destination.svg?react'

function Booking() {
    return (
        <div className='booking-container'>
            <form className='booking-form'>
                <div className='origin-destination-container'>
                    <div className='form-group'>
                        <label htmlFor='origin'>ORIGEN</label>
                        <div className='input-autocomplete-container'>
                            {/* <Autocomplete/> */}
                            <div className='input-container'>
                                <OriginIcon/>
                                <input id='origin' type='text' placeholder='Ezeiza, Buenos Aires, Argentina'/>
                            </div>
                        </div>
                    </div>
                    <img className='route-icon' src={route} alt='Icon of a route'/>
                    <div className='form-group'>
                        <label htmlFor='destination'>DESTINO</label>
                        <div className='input-container'>
                            <DestinationIcon/>
                            <input id='destination' type='text' placeholder='Toscana, Florentina, Italia'/>
                        </div>
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
                    {/* <input id='passengers' type='button' value='1 Pasajero(s)'/> */}
                    <Select defaultValue='1'>
                        <SelectItem value="1">1 Pasajero</SelectItem>
                        <SelectItem value="2">2 Pasajeros</SelectItem>
                        <SelectItem value="3">3 Pasajeros</SelectItem>
                        <SelectItem value="4">4 Pasajeros</SelectItem>
                        <SelectItem value="5">5 Pasajeros</SelectItem>
                        <SelectItem value="6">6 Pasajeros</SelectItem>
                        <SelectItem value="7">7 Pasajeros</SelectItem>
                    </Select>
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