function getSpots() {
    return new Promise(resolve => {
      this.http.get('127.0.0.1:5000/allLots')
        .map(res => res.json())
        .subscribe(data => {
          this.getSpotsResponse = data;
          document.write(this.getSpotsResponse);
        });
    });
  }

function testFunc(){
	document.write('testing');
}

function httpGet()
{
    console.log('in get function');
    var theURL = "http://127.0.0.1:5000/allLots";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send();
    //return xmlHttp.responseText;
}
