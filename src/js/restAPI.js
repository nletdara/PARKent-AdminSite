function getDB() 
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://localhost:5000/databases"
    xmlHttp.open( "GET", theUrl , false); 
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function getAllLots()
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://localhost:5000/lotNames"
    xmlHttp.open( "GET", theUrl , false); 
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function getLots()
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/lots"
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

function dropLot(form) {
    var name = form.sel_rLot.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/removelot/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function createDB(form) {
    var name = form.dbName.value;
    var lat =  form.latitude.value;
    var lon =  form.longitude.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/createdb/" + name + "/" + lat + "/" + lon
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function dropDB(form) {
    var name = form.select_rDB.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://127.0.0.1:5000/dropdb/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}
