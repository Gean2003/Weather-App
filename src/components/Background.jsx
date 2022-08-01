import React from 'react'
import  csd from '../images/02dimage.jpg'
import csn from '../images/02n.jpg'
import fcd from '../images/01d.jpg'
import fcn from '../images/01n.jpg'
import scd from '../images/03d.jpg'
import scn from '../images/03n.jpg'
import bcd from '../images/04d.jpg'
import bcn from '../images/04n.jpg'
import srd from '../images/05d.jpg'
import srn from '../images/05n.jpg'
import rd from '../images/06d.jpg'
import rn from '../images/06n.jpg'
import thsd from '../images/07d.jpg'
import thsn from '../images/07n.jpg'
import sd from '../images/08d.jpg'
import sn from '../images/08n.jpg'
import md from '../images/09d.jpg'
import mn from '../images/09n.jpg'

const Background = ({weather}) => {

    const image = weather?.weather[0].icon

    const objStyle = {}

    const changeBackground = image => {
	if(image === "01d"){
	    objStyle.backgroundImage = `url(${csd})`

	    
	}else if(image === "01d"){

	    objStyle.backgroundImage = `url(${csn})`
	}else if(image === "02d"){

	    objStyle.backgroundImage = `url(${fcd})`
	}else if(image === "02n"){

	    objStyle.backgroundImage = `url(${fcn})`

	}else if(image === "03d"){
	    objStyle.backgroundImage = `url(${scd})`

	}else if(image === "03n"){

	    objStyle.backgroundImage = `url(${scn})`
	}else if(image === "04d"){

	    objStyle.backgroundImage = `url(${bcd})`
	}else if(image === "04n"){

	    objStyle.backgroundImage = `url(${bcn})`
	}else if (image === "09d"){

	    objStyle.backgroundImage = `url(${srd})`

	}else if(image === "09n"){

	    objStyle.backgroundImage = `url(${srn})`
	}else if(image === "10d"){

	    objStyle.backgroundImage = `url(${rd})`

	}else if(image === "10n"){

	    objStyle.backgroundImage = `url(${rn})`
	}else if(image === "11d"){

	    objStyle.backgroundImage = `url(${thsd})`

	}else if(image === "11n"){

	    objStyle.backgroundImage = `url(${thsn})`
	}else if(image === "13d"){

	    objStyle.backgroundImage = `url(${sd})`
	}else if(image === "13n"){

	    objStyle.backgroundImage = `url(${sn})`
	}else if(image === "50d"){

	    objStyle.backgroundImage = `url(${md})`
	}else {

	    objStyle.backgroundImage = `url(${mn})`
	}
    }

    changeBackground(image)

return (
    <div className="container__background" style={objStyle}>

    </div>
 )
}

export default Background
