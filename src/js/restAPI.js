var Host = "http://localhost:5000/"

function getDB() 
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host  + "databases"
    xmlHttp.open( "GET", theUrl , false); 
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    return xmlHttp.responseText;
}

function getAllLots()
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl =  Host  + "lotNames"
    xmlHttp.open( "GET", theUrl , false); 
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    return xmlHttp.responseText;
}

function getLots()
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host  + "lots"
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    return xmlHttp.responseText;
}

function addLot(form) {
    var name = form.location_name.value;
    var cap =  form.total_spaces.value;
    var lat =  form.latitude.value;
    var lon =  form.longitude.value;
    var url =  form.url.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host  + "addlot/" + name + "/" + cap + "/" + lat + "/" + lon + "/" + url
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    return xmlHttp.responseText;
}

function dropLot(form) {
    var name = form.sel_rLot.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host + "removelot/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    return xmlHttp.responseText;
}



function createDB(form) {
    var name = form.dbName.value;
    var lat =  form.latitude.value;
    var lon =  form.longitude.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host  + "createdb/" + name + "/" + lat + "/" + lon
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function dropDB(form) {
    console.log(form);
    var name = form.select_rDB.value;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = Host  + "dropdb/" + name
    xmlHttp.open( "GET", theUrl , false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    console.log(response);
    return xmlHttp.responseText;
}

function dropdownFillLot(entries) {
    entries = JSON.stringify(entries);
    var select = document.getElementById("sel_rLot");
    entries = entries.replace(/[\[\]\\"]+/g, '');
    entryArray = entries.split(", ");
    for(var i=0; i<entryArray.length; i++) {
    }
    for(var i=0; i<entryArray.length; i++) {
        var ent = entryArray[i];
        var el = document.createElement("option");
        el.textContent = ent;
        el.value = ent;
        select.appendChild(el);
    }
}

function dropdownFillDB(entries) {
    var myDatabases = JSON.stringify(entries);
    var select = document.getElementById("select_rDB");
    myDatabases = myDatabases.replace(/[\[\]\\"]+/g, '');
    entryArray = myDatabases.split(", ");
    for(var i=0; i<entryArray.length; i++) {
    }
     for(var i=0; i<entryArray.length; i++) {
         var ent = entryArray[i];
         var el = document.createElement("option");
         el.textContent = ent;
         el.value = ent;
         select.appendChild(el);
    }
}

function verifyChange(response) {
	console.log("TEST");
	if (response == "{\"0\":\"true\"}") {
		alert("SUCCESS");
	}
	else {
		alert("ERROR");
	}

}

function refresh() {
	window.location.reload();	
}








