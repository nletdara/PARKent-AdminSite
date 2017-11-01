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