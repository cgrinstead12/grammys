d3.json("/historical", function(d) { 
  
  var releaseYear = [];
  var popularity = [];
  var speechiness = [];
  var liveness = [];
  var loudness = [];
  var tempo = [];
  var duration = [];
  var uniqueWords = [];
  var danceability = [];
  var acousticness= [];
  var energy= [];
  
  var winner = [];
  var artists = [];
  var tracks = [];
  var text = []; 


  for (i = 0; i<d.length; i++) {
    releaseYear.push(+d[i].release_year)
    liveness.push(+d[i].liveness)
    speechiness.push(+d[i].speechiness)
    loudness.push(+d[i].loudness)
    tempo.push(+d[i].tempo)
    uniqueWords.push(+d[i].lyric_unique_word_count)
    duration.push(+d[i].duration_ms)
    danceability.push(+d[i].danceability)
    acousticness.push(+d[i].acousticness)
    energy.push(+d[i].energy)
    popularity.push(+d[i].popularity)

    artists.push(d[i].artist)
    tracks.push(d[i].track)
    // text.push({artist: d[i].artist, 
    //            song: d[i].track})
    winner.push(+d[i].win_loss)
  };
  // console.log(duration);
  // LIVENESS PLOT 
//   var trace1 = {
//     x: releaseYear,
//     y: liveness,
//     mode: "markers",
//     text: artists,
//     type: "scatter",
//     name: "liveness",
//     marker: {
//       color: winner,
//       colorscale:"Spectral",
//       symbol: "hexagram"
//     }
//   };

//   var data1 = [trace1];

//   var layout1 = {
//     title: "Grammy Winners and Nominees Song Liveness",
//     xaxis: { title: "Release Year" },
//     yaxis: { title: "Liveness Probability" }
//   };
  
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("LIVE", data1, layout1);

// // SPEECHINESS PLOT 
//   var trace2 = {
//     x: releaseYear,
//     y: speechiness,
//     mode: "markers",
//     text: artists,
//     type: "scatter",
//     name: "speechiness",
//     marker: {
//       color: winner,
//       symbol: "circle"
//     }
//   };

//   var data2 = [trace2];

//   var layout2 = {
//     title: "Grammy Winners and Nominees Song Speechiness",
//     xaxis: { title: "Release Year" },
//     yaxis: { title: "Wordiness Level" }
//   };

//   Plotly.newPlot("SPEECH", data2, layout2);

//   // LOUDNESS PLOT 

//   var trace3 = {
//     x: releaseYear,
//     y: loudness,
//     mode: "markers",
//     text: artists,
//     type: "scatter",
//     name: "loudness",
//     marker: {
//       color: winner,
//       symbol: "square"
//     }
//   };

//   var data3 = [trace3];

//   var layout3 = {
//     title: "Grammy Winners and Nominees Song Loudness",
//     xaxis: { title: "Release Year"},
//     yaxis: { title: "Loudness Level" }
//   };

//   Plotly.newPlot("LOUD", data3, layout3);

//     // TEMPO PLOT 

//     var trace4 = {
//       x: releaseYear,
//       y: tempo,
//       mode: "markers",
//       text: artists,
//       type: "scatter",
//       name: "tempo",
//       marker: {
//         color: winner,
//         symbol: "daimond"
//       }
//     };
  
//     var data4 = [trace4];
  
//     var layout4 = {
//       title: "Grammy Winners and Nominees Song Tempo",
//       xaxis: { title: "Release Year"},
//       yaxis: { title: "Tempo (Beats Per Minute)" }
//     };
  
//     Plotly.newPlot("TEMPO", data4, layout4);

    
    // DURATION PLOT 

    var trace5 = {
      x: releaseYear,
      y: duration,
      mode: "markers",
      text: artists,
      type: "scatter",
      name: "duration",
      marker: {
        color: winner,
        symbol: "triangle"
      }
    };
  
    var data5 = [trace5];
  
    var layout5 = {
      title: "Grammy Winners and Nominees Song Duration",
      xaxis: { title: "Release Year"},
      yaxis: { title: "Duration (milliseconds)" }
    };
  
    Plotly.newPlot("DURATION", data5, layout5);

    // DANCEABILITY PLOT 

    //   var trace6 = {
    //     x: releaseYear,
    //     y: danceability,
    //     mode: "markers",
    //     text: artists,
    //     type: "scatter",
    //     name: "danceability",
    //     marker: {
    //       color: winner,
    //       symbol: "hexagram"
    //     }
    //   };
    
    //   var data6 = [trace6];
    
    //   var layout6 = {
    //     title: "Grammy Winners and Nominees Song Danceability",
    //     xaxis: { title: "Release Year"},
    //     yaxis: { title: "Danceability" }
    //   };
    
    //   Plotly.newPlot("DANCE", data6, layout6);
  
    // // POPULARITY PLOT 

    // var trace7 = {
    //   x: releaseYear,
    //   y: popularity,
    //   mode: "markers",
    //   text: artists,
    //   type: "scatter",
    //   name: "popularity",
    //   marker: {
    //     color: winner,
    //     symbol: "circle"
    //   }
    // };
  
    // var data7 = [trace7];
  
    // var layout7 = {
    //   title: "Grammy Winners and Nominees Popularity",
    //   xaxis: { title: "Release Year"},
    //   yaxis: { title: "Popularity" }
    // };
  
    // Plotly.newPlot("POPULARITY", data7, layout7);

    //  // ENERGY PLOT 

    //  var trace8 = {
    //   x: releaseYear,
    //   y: energy,
    //   mode: "markers",
    //   text: artists,
    //   type: "scatter",
    //   name: "energy",
    //   marker: {
    //     color: winner,
    //     symbol: "square"
    //   }
    // };
  
    // var data8 = [trace8];
  
    // var layout8 = {
    //   title: "Grammy Winners and Nominees Energy",
    //   xaxis: { title: "Release Year"},
    //   yaxis: { title: "Energy Rating" }
    // };
  
    // Plotly.newPlot("ENERGY", data8, layout8);

    //    // UNIQUE WORD COUNT PLOT 

    //    var trace9 = {
    //     x: releaseYear,
    //     y: uniqueWords,
    //     mode: "markers",
    //     text: artists,
    //     type: "scatter",
    //     name: "Unique Words",
    //     marker: {
    //       color: winner,
    //       symbol: "triangle"
    //     }
    //   };
    
    //   var data9 = [trace9];
    
    //   var layout9 = {
    //     title: "Grammy Winners and Nominees Song Unique Word Count",
    //     xaxis: { title: "Release Year"},
    //     yaxis: { title: "Unique Word Count" }
    //   };
    
    //   Plotly.newPlot("UNIQUE", data9, layout9);



});


  