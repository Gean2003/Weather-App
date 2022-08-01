import React, {useEffect ,useState} from 'react'
import axios from 'axios'
import LoadingScreen from './LoadingScreen'
import  './CardWeather.css'
import Background from './Background'

const CardWeather = ({lat, lon}) => {

    const [weather, setWeather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
	if(lat){
	    const apiKey = 'a7d464bff402bb63f804a0334941de69'
	    const URL  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

		axios.get(URL)
		.then(res => {
		    setWeather(res.data)
		    const temp = {
			celsius: `${Math.round(res.data.main.temp  -273.15)} °C`,
			farenheit:`${ Math.round((res.data.main.temp -273.15) * 9/5 + 32)} °F`
			
		    }
		    setTemperture(temp)
		    setIsLoading(false)
		})
		.catch(err => console.log(err))
	}


	    
    }, [lat, lon])

    console.log(weather)
    
    const handleClick = () => setIsCelsius(!isCelsius)



    
    
    if(isLoading){
	return <LoadingScreen />
    }else {


    return (
	<div className='container' >
	    <Background weather={weather} />
	    <article className='weather__app-container' >
		<h1 className='title' >Weather App</h1>
		<h2 className='subtitle' >{`${weather?.name}, ${weather?.sys.country}`}</h2>
		<div>
		    <img src={weather &&`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
		    <div>
			<h3 className='description'>"{weather?.weather[0].description}"</h3>
			<ul className='list'>
			    <li className='list__item'> <i className='bx bx-wind'></i> <span > Wind Speed: </span>{weather?.wind.speed} m/s</li>
			    <li className='list__item'> <i className='bx bx-cloud' ></i> <span>Clouds: </span>{weather?.clouds.all} %</li>
			    <li className='list__item'> <i className='bx bx-tachometer' ></i><span>Pressure: </span>{weather?.main.pressure} hPa</li>
			</ul>
		    </div>
		</div>	    
		<h2><i className='bx bxs-thermometer'></i> { isCelsius? temperture?.celsius : temperture.farenheit}</h2>
		<button className='btn' onClick={handleClick}>{isCelsius? 'change to °F' : 'change to °C'}</button>
	    </article>
	</div>
    )
	}
    }

export default CardWeather
