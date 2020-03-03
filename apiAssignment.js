let data = "";

const request = new XMLHttpRequest();
var movieDescs = [];
var i = 0;

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function(){
    data = JSON.parse(this.response);
    console.log(data);
    if(request.status == 200){
        data.forEach(
            movie => {var movieOption = document.createElement("OPTION");
            var movieTextNode = document.createTextNode(`${movie.title}`);
            movieOption.appendChild(movieTextNode);
            document.querySelector('#movies').appendChild(movieOption);
            movieDescs[i] = `${movie.description}`;
            i++;  
        } 
        );
        var ind = document.querySelector("#movies").selectedIndex;
        var movieDesc = document.createElement("P");
        var movieDescTextNode = document.createTextNode(movieDescs[ind]);
        movieDesc.appendChild(movieDescTextNode);
        document.querySelector('#description').appendChild(movieDesc);
    }else{
        console.log(`Error occured. Status: ${request.status}`);
    }
    
}
function changeDesc(){
    var descP = document.querySelector("#description");
    descP.removeChild(descP.childNodes[0]);
    var ind = document.querySelector("#movies").selectedIndex;
    var movieDesc = document.createElement("P");
    var movieDescTextNode = document.createTextNode(movieDescs[ind]);
    movieDesc.appendChild(movieDescTextNode);
    document.querySelector('#description').appendChild(movieDesc);
}
request.send();