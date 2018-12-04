
  // setup fill color
  var cValue = function(data) { return data.win_loss;},
  color = d3.scale.category10();

  d3.json('/historical',function (data) {
  // CSV section

  // Convert data points to  numbers

  data.forEach(function(data) {
    data.duration_ms= +data.duration_ms;
    data.accousticness = +data.accousticness;
    data.danceability = +data.danceability;
    data.energy = +data.energy;
    data.loudness = +data.loudness;
    data.tempo = +data.tempo;
    data.speechiness = +data.speechiness;
    data.lyric_unique_word_count = +data.lyric_unique_word_count;
    data.popularity = +data.popularity;
    data.win_loss = +data.win_loss;
  });
    var body = d3.select('#svgHere') // <== Add these
    var selectData = [{ "text" : "release_year" },
                      {"text" : "popularity" }, 
                      { "text" : "loudness" },
                      { "text" : "duration_ms" },
                      { "text" : "tempo" },
                      { "text" : "lyric_unique_word_count" },
                      { "text" : "speechiness"},
                      { "text" : "energy" },
                      { "text" : "danceability" },
                    ]

    // Select X-axis Variable
    var span = body.append('span')
      .text('Select X-Axis variable: ')
    var yInput = body.append('select')
        .attr('id','xSelect')
        .on('change',xChange)
      .selectAll('option')
        .data(selectData)
        .enter()
      .append('option')
        .attr('value', function (d) { return d.text })
        .text(function (d) { return d.text ;})
    body.append('br')

    // Select Y-axis Variable
    var span = body.append('span')
        .text('Select Y-Axis variable: ')
    var yInput = body.append('select')
        .attr('id','ySelect')
        .on('change',yChange)
      .selectAll('option')
        .data(selectData)
        .enter()
      .append('option')
        .attr('value', function (d) { return d.text })
        .text(function (d) { return d.text ;})
    body.append('br')

    // Chart sizing variables
    var body = d3.select('#svgHere') // <== Add these
    var margin = { top: 50, right: 50, bottom: 50, left: 50 }
    var h = 500
    var w = 1000

    // Scales
    var xScale = d3.scale.linear()
      .domain([
        d3.min([d3.min(data,function (d) { return d["release_year"]})-1]),
        d3.max([d3.max(data,function (d) { return d["release_year"]})])
        ])
      .range([0,w])
    var yScale = d3.scale.linear()
      .domain([
        d3.min([d3.min(data,function (d) { return d["duration_ms"]})]),
        d3.max([d3.max(data,function (d) { return d["duration_ms"]})])
        ])
      .range([h,0])

    // SVG
    var svg = body.append('svg')
        .attr('height',h + margin.top + margin.bottom)
        .attr('width',w + margin.left + margin.right)
      .append('g')
        .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
    // X-axis
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
    // Y-axis
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')

    // Circles
    var circles = svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx',function (d) { return xScale(d.release_year) }) // <== Add these
        .attr('cy',function (d) { return yScale(d.duration_ms) }) // <== Add these
        .attr("r", function(data) {            // <== Add these
          if (data.win_loss== "1") {return 15}  // <== Add these
          else if (data.win_loss== "0.5") {return 8}
          else  { return 7}          // <== Add these
        ;})   
        .attr('stroke','black')
        .attr('stroke-width',1)
        //////LEGEND
        .attr("data-legend",function(d) { return d["Category"]})
        .style("opacity", function(data) {            // <== Add these
          if (data.win_loss== "1") {return 1.0}  // <== Add these
          else if (data.win_loss== "0.5") {return 0.5} // <== Add these
          else  { return 0.25}          // <== Add these
        ;})   
        .style("fill", function(data) { return color(cValue(data));}) 
        .on('mouseover', function () {
          d3.select(this)
            .transition()
            .duration(10)
            .attr("r", function(data) {            // <== Add these
              if (data.win_loss== "1") {return 20}  // <== Add these
              else if (data.win_loss== "0.5") {return 15}
              else  { return 14}          // <== Add these
            ;})   
            .attr('stroke-width',3)
        })
        .on('mouseout', function () {
          d3.select(this)
            .transition()
            .duration(10)
            .attr('r',10)
            .attr('stroke-width',1)
        })
      .append('title') // Tooltip
        .text(function (d) { return d.artist +
                            '\nSong Name: ' + (d["track"]) +
                            '\nWin/Loss: ' + (d["Category"]) })
                            
    // X-axis
    svg.append('g')
        .attr('class','axis')
        .attr('id','xAxis')
        .attr('transform', 'translate(0,' + h + ')')
        .call(xAxis)
      .append('text') // X-axis Label
        .attr('id','xAxisLabel')
        .attr('y',25)
        .attr('x',w/2)
        .attr('dy','.71em')
        .style('text-anchor','end')
        .text('Grammy Release Year')

    // Y-axis
    svg.append('g')
        .attr('class','axis')
        .attr('id','yAxis')
        .call(yAxis)
      .append('text') // y-axis Label
        .attr('id', 'yAxisLabel')
        .attr('transform','rotate(-90)')
        .attr('x',0)
        .attr('y',5)
        .attr('dy','.71em')
        .style('text-anchor','end')
        .text('Duration (milliseconds)')

    // LEGEND
    legend = svg.append("g")
            .attr("class","legend")
            .attr("transform","translate(50,30)")
            .style("font-size","12px")
            .call(d3.legend)

//On Changing the Y variable input
    function yChange() {
      var value = this.value // get the new y value
      var category = this.category
      yScale // change the yScale
        .domain([
          d3.min([d3.min(data,function (d) { return d[value] })]),
          d3.max([d3.max(data,function (d) { return d[value] })])
          ])
      yAxis.scale(yScale) // change the yScale
      d3.select('#yAxis') // redraw the yAxis
        .transition().duration(2)
        .call(yAxis)
      d3.select('#yAxisLabel') // change the yAxisLabel
        .text(value)   
      d3.selectAll('circle') // move the circles
        .transition().duration(2)
        .delay(function (d,i) { return i*2})
        .attr('cy',function (d) { return yScale(d[value])
      })

      legend = svg.append("g") // <== Add these
            .attr("class","legend")
            .attr("transform","translate(50,30)")
            .style("font-size","12px")
            .call(d3.legend)
    }

    function xChange() {

      var value = this.value // get the new x value
      xScale // change the xScale
        .domain([
          d3.min([d3.min(data,function (d) { return d[value] })]),
          d3.max([d3.max(data,function (d) { return d[value] })])
          ])
      xAxis.scale(xScale) // change the xScale
      d3.select('#xAxis') // redraw the xAxis
        .transition().duration(2)
        .call(xAxis)
      d3.select('#xAxisLabel') // change the xAxisLabel
        .transition().duration(2)
        .text(value)
      d3.selectAll('circle') // move the circles
        .transition().duration(2)
        .delay(function (d,i) { return i*2})
        .attr('cx',function (d) { return xScale(d[value])
      })

    }
  })

// };

// makeResponsive();

// d3.select(window).on("resize", makeResponsive);