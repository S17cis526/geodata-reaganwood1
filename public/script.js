window.addEventListener('load', function(){

  if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
      d3.select('body')
      insert('div', ':first-child')
      .attr("class", "location-bar");
      .text("You are at: " + position.coors.latitude + ", " + )
      .insert('div', '')
    })
  }
  d3.json('/locations.json', function(err, locations){
    if (err) {
      return console.log(err);
    }
    console.log(locations);
      var table = d3.select('body').append('table');
      table.append('thead')
      .append('th')
      .data(['address', 'latitude', 'longitutde'])
      .enter()
      .append('th')
      .text(function(d){return d;})

      table.append('tbody')
      .append('tr')
      .selectAll('th')
      .data(locations)
      .enter()
      .append('tr')
      .each(function(d){
        d3.select(this).append('td').text(d.address);
        d3.select(this).append('td').text(d.latitude);
        d3.select(this).append('td').text(d.longitude);
      })

  })
  d3.json('/united-states', function(err, usa) {
    if (err) return console.log(err);
    var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)

  })
});
