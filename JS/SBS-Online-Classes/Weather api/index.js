
function getdata(){

    const city=search.value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '18211700a6mshc0707ed213da233p1be79djsn06a2b1243750',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then(res=>{
    console.log(res);
    temp.innerHTML=res.temp;
    ws.innerHTML=res.wind_speed;
    hm.innerHTML=res.humidity;
})
.catch(err=>console.error(err));

}


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }