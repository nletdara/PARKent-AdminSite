
function getAllLots(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    console.log(theUrl);
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function addLot(form) {
    var name = form.location_name.value;
    var cap =  form.total_spaces.value;
    var lat =  form.latitude.value;
    var lon =  form.longitude.value;
    var url =  form.url.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/addlot/" + name + "/" + cap + "/" + lat + "/" + lon + "/" + url
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function dropLot(name) {
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/removelot/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function createDB(name, lat, lon) {
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/createdb/" + name + "/" + lat + "/" + lon
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function dropDB(name) {
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/dropdb/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}
