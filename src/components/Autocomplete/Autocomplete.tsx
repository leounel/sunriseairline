import './Autocomplete.css'
import linecircle from './assets/icons/linecircle.svg'
import suggestion from './assets/icons/suggestion.svg'

function Autocomplete() {

    return (
        <div className='autocomplete-container'>
            <div className='autocomplete-list-container'>
                <div className='autocomplete-heading'>
                    <img src={suggestion} alt="Suggestions Icon" />
                    <span>¿Estas buscando...</span>
                </div>
                <ul className='autocomplete-list'>
                    <li>Buenos Aires, Argentina</li>
                    <li>Montevideo, Uruguay</li>
                    <li>Santiago, Chile</li>
                </ul>
            </div>
            <img className='line-circle' src={linecircle} alt='A line circle, decorative.'/>
        </div>
    )
}


export default Autocomplete