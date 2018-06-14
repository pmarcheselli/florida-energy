// Google API and corechart package 
google.charts.load('current', {'packages':['corechart']});

// Callback for loading charts 
google.charts.setOnLoadCallback(getProductionData);
google.charts.setOnLoadCallback(getConsumedData);


// Draw first chart for Energy Production

function getProductionData(){
    // Create a new request object
    let request = new XMLHttpRequest()
    
    // URL to contact goes here + API key
    // source: https://www.eia.gov/opendata/qb.php?category=404 26&sdid=SEDS.REPRB.FL.A
    let requestUrl = "https://api.eia.gov/series/?api_key=395c569f4a041fc711176d9fab3ec7ab&series_id=SEDS.REPRB.FL.A"
    
    // Open a connection
    request.open('GET', requestUrl, true)
  
    // Callback for when the request completes
    request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data             
    drawProduction(theActualData)    
    }
    
    // Callback for when there's an error
    request.error = function(err){
    console.log("error is: ", err)
    }
    
    // Send the request to the specified URL
    request.send()
}

function drawProduction(freshData) {
    console.log("freshData", freshData)
    freshData.unshift(["Year", "Billion BTUs"])
        
    var data = google.visualization.arrayToDataTable(freshData);
  
    var options = {
      title: 'Renewable Energy Production in Florida',
      'legend': 'none',
      'colors': ['darkgrey'],
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {title: 'Billion BTU', minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('line-chart1'));
    chart.draw(data, options);
  
    window.addEventListener('resize', function() {
      chart.draw(data, options);
    }, false);
}

// Draw second chart for Energy Consumption

function getConsumedData(){
    // Create a new request object
    let request = new XMLHttpRequest()
    
    // URL to contact goes here + API key
    // source: https://www.eia.gov/opendata/qb.php?category=40236&sdid=SEDS.TETCB.FL.A
    let requestUrl = "https://api.eia.gov/series/?api_key=395c569f4a041fc711176d9fab3ec7ab&series_id=SEDS.TETCB.FL.A"
    
    // Open a connection
    request.open('GET', requestUrl, true)
  
    // Callback for when the request completes
    request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data             
    drawConsumed(theActualData)    
    }
    
    // Callback for when there's an error
    request.error = function(err){
    console.log("error is: ", err)
    }
    
    // Send the request to the specified URL
    request.send()
}

function drawConsumed(freshData) {
    console.log("freshData", freshData)
    freshData.unshift(["Year", "Billion BTUs"])
        
    var data = google.visualization.arrayToDataTable(freshData);
  
    var options = {
      title: 'Energy Consumption in Florida',
      'legend': 'none',
      'colors': ['#75a2d8'],
      textStyle: { fontSize: 16 },
      hAxis: { title: 'Year'},
      vAxis: { title: 'Billion BTU'}
      };

    var chart = new google.visualization.AreaChart(document.getElementById('line-chart2'));
    chart.draw(data, options);
  
    window.addEventListener('resize', function() {
      chart.draw(data, options);
    }, false);
}


