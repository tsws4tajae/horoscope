var zodiac = [
{	
	sign: "aquarius",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "aries",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "cancer",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "capicorn",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "gemini",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "leo",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "libra",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "pisces",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "sagittarius",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "scorpio",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "taurus",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
{	
	sign: "virgo",
	fortune: "This year you will recognize potential that others may overlook. The Moon-Saturn opposition in your 2016 chart guarantees careful thinking and planning that won't let you down.",
	image: "img/#"
},
]


function horoscope() {
	var sign = document.getElementById("sign").value
console.log(sign)
	for(i = 0; i < zodiac.length; i++){
		if(sign == zodiac[i].sign){
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "Error"
		}
	}
}