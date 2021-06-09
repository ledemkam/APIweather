let city = "Marburg";
takewetter(city);
// call function takewetter(ville)
let changeCity = document.querySelector("#change")
changeCity.addEventListener('click', () => {
    city = prompt('which city you want to see ?');
    takewetter(city);
})
function takewetter(city){


const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1a3c8c583b6e078c2b89bf0f5cfccbc9&units=metric';

let request = new XMLHttpRequest();//create object
request.open('GET' ,url); // first parameter GET(for send information we use Get)/POST,SECOND PARAmeter : url
request.responseType = 'json';//we waiting of JSON
request.send();// send requet

//after reponse,this function is esecute
request.onload = function() {
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            let reponse = request.response// we save reponse
            console.log(reponse)
            let wetter = reponse.main.temp;
            let city   = reponse.name;
           document.querySelector("#temperature_label").textContent = wetter;
           document.querySelector("#City").textContent = city;
        }else{
            alert("error,try again")
        }
       
    }
}

}
