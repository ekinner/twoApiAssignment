let data = "";

function getAccData(){
    const request = new XMLHttpRequest();
    var APIkey = "RGAPI-e3fa49d3-6108-4a78-9f0d-2dcbf0c07cc0";
    var accName = document.querySelector("#accName").value;

    request.open("GET", "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + accName + "?api_key=" + APIkey, true);

    request.onload = function(){
        data = JSON.parse(this.response);
        if(request.status == 200){
            console.log(data);
            var accId = data.accountId;

            const request2 = new XMLHttpRequest();

            let data2 = "";

            request2.open("GET", "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + accId + "?api_key=" + APIkey, true);
            request2.onload = function(){
                data2 = JSON.parse(this.response);
                if(request2.status == 200){
                    console.log(data2);
                    data2.matches.forEach(
                        matches => {
                        document.querySelector("#matchTable").style.display = "block";
                        var tableRow = document.createElement("TR");
                        document.querySelector("#matchTable").appendChild(tableRow);
                        var regionData = document.createElement("TD");
                        var regionInfo = document.createTextNode(`${matches.platformId}`);
                        regionData.appendChild(regionInfo);
                        document.querySelector("#matchTable").appendChild(regionData);
                        var gameData = document.createElement("TD");
                        var gameInfo = document.createTextNode(`${matches.gameId}`);
                        gameData.appendChild(gameInfo)
                        document.querySelector("#matchTable").appendChild(gameData);
                        var championData = document.createElement("TD");
                        var championInfo = document.createTextNode(`${matches.champion}`);
                        championData.appendChild(championInfo)
                        document.querySelector("#matchTable").appendChild(championData);
                        var roleData = document.createElement("TD");
                        var roleInfo = document.createTextNode(`${matches.role}`);
                        roleData.appendChild(roleInfo)
                        document.querySelector("#matchTable").appendChild(roleData);
                        var laneData = document.createElement("TD");
                        var laneInfo = document.createTextNode(`${matches.lane}`);
                        laneData.appendChild(laneInfo)
                        document.querySelector("#matchTable").appendChild(laneData);    
                    }
                    );
                }else{
                    console.log(`Error occured. Status: ${request2.status}`);
                }
            }
            request2.send();
        }else{
            console.log(`Error occured. Status: ${request.status}`);
        }
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
//