let data = "";

var movieDescs = [];
var i = 0;


function getAccData(){
    const request = new XMLHttpRequest();
    var APIkey = "RGAPI-e3fa49d3-6108-4a78-9f0d-2dcbf0c07cc0";
    var accName = document.querySelector("#accName").value;
    console.log(accName);

    request.open("GET", "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + accName +"?api_key=" + APIkey, true);

    request.onload = function(){
        data = JSON.parse(this.response);
        console.log(data);
    }
    request.send();
}


// if(request.status == 200){
//     data.forEach(
//         movie => {var movieOption = document.createElement("OPTION");
//         var movieTextNode = document.createTextNode(`${movie.title}`);
//         movieOption.appendChild(movieTextNode);
//         document.querySelector('#movies').appendChild(movieOption);
//         movieDescs[i] = `${movie.description}`;
//         i++;  
//     } 
//     );
//     var ind = document.querySelector("#movies").selectedIndex;
//     var movieDesc = document.createElement("P");
//     var movieDescTextNode = document.createTextNode(movieDescs[ind]);
//     movieDesc.appendChild(movieDescTextNode);
//     document.querySelector('#description').appendChild(movieDesc);
// }else{
//     console.log(`Error occured. Status: ${request.status}`);
// }