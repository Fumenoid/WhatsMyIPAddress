var arr
var ar

function exporttable() {
  document.getElementById("t01").innerHTML= '<tr><th>Category</th><th>Info. Gathered</th></tr><tr><td>IP Address</td><td id="ipa"></td></tr><tr><td>Country</td><td id="Cun"></td></tr><tr><td>Region</td><td id="Reg"></td></tr><tr><td>City</td><td id="city"></td></tr><tr><td>Longitude</td><td id="LG"></td></tr><tr><td>Latitude</td><td id="LT"></td></tr>'
  document.getElementById("yo").remove()
}

function getIp() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
  if( req.readyState==4 && req.status==200 ){
    arr = JSON.parse(req.responseText);
  }
  }
  req.open("GET","https://api.ipgeolocation.io/getip", false);
  req.send();
}

function getLocation() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
  if( req.readyState==4 && req.status==200 ){
    ar = JSON.parse(req.responseText);
    document.getElementById("ipa").innerHTML= ar.ip;
    document.getElementById("Cun").innerHTML= ar.country_name;
    document.getElementById("city").innerHTML= ar.city;
    document.getElementById("Reg").innerHTML= ar.state_prov;
    document.getElementById("LG").innerHTML= ar.longitude;
    document.getElementById("LT").innerHTML= ar.latitude;
  }
  };
  req.open("GET","https://api.ipgeolocation.io/ipgeo?apiKey=8c657ed0207b4c358f1cf91f7b993d89&ip="+arr.ip+"&fields=geo", true);
  req.send();
}

function boss() {
  exporttable()
  getIp()
  getLocation()
}

document.getElementById("event").addEventListener('click', boss)






//Important - It won't give console logs and are only responsible to changes done to the html of browser extension
//Important - Event handler handle the events ypu can't simply call functions as they are in different file.
//Chillax :)
//Remember it's not work they are projects for fun