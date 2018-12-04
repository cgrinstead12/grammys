var select = '';
for (i=1;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#rankselect').html(select);

window.onload = function() {
    d3.json('/grammys', function(data){
        var artistsarray = []
        data.forEach(data => {
            
            if(!artistsarray.includes(data.artist)){
                artistsarray.push(data.artist)
            }
        });
        var select = '';
        artistsarray.forEach(data => { 
            select += '<option val=' + data + '>' + data + '</option>'
            $('#artistname').html(select);
    });

        var artistValue = d3.select("#artistname");
        var popValue = d3.select("#rankselect");
        var searchBtn = d3.select("#filter-btn");
        var clearBtn = d3.select("#clear-btn")
        var rankBtn = d3.select("#rank-btn")
        var artistname = d3.select("#artistsnameduh");
        var popid = d3.select("#popid");
        var loudid = d3.select("#loudid");
        var uniquewordsid = d3.select("#uniquewords");
        var durationid = d3.select("#durationid");
        var artistpopid = d3.select("#artistpopid");
        var artistfolid = d3.select("#artistfolid");
        var songpopid = d3.select("#songpopid");
        var songnametitle = d3.select("#songnametitle")
        var songnametitle1 = d3.select("#songnametitle1")
        var releasetitle = d3.select("#releasetitle")
        var releasetitle1 = d3.select("#releasetitle1")
        var songpopP = d3.select("#poptest");
        var danceid = d3.select("#danceid");
        var speechid = d3.select("#speechid");
        var liveid = d3.select("#liveid");
        var acousticid = d3.select("#acousticid");

searchBtn.on("click", function(){
    d3.event.preventDefault();
    d3.select("#artistsnameduh").text("");
    d3.select("#popid").text("");
    d3.select("#loudid").text("");
    d3.select("#uniquewords").text("");
    d3.select("#durationid").text("");
    d3.select("#artistpopid").text("");
    d3.select("#artistfolid").text("");
    d3.select("#songpopid").text("");

    d3.select("#songnametitle").text("");
    d3.select("#songnametitle1").text("");
    d3.select("#releasetitle").text("");
    d3.select("#releasetitle1").text("");

    d3.select("#danceid").text("");
    d3.select("#speechid").text("");
    d3.select("#liveid").text("");
    d3.select("#acousticid").text("");
    
    // console.log(artistValue.property("value"))
    var tabledata = data.filter(data => ((data.artist === artistValue.property("value")))).sort((function(a, b){ return b.release_year - a.release_year }));
    
    // console.log(data)
    
    artistname.append("h2").text(tabledata[0].artist)
    songnametitle1.append("p").text("Song Name: ")
    songnametitle1.append("p").text(tabledata[0].song_name)
    releasetitle.append("p").text("Release Date: ")
    releasetitle1.append("p").text(tabledata[0].release_date)
    popid.append("p").text(tabledata[0].artist_popularity)
    loudid.append("p").text(tabledata[0]['features.loudness'])
    uniquewordsid.append("p").text(tabledata[0].lyric_unique_word_count)
    durationid.append("p").text((tabledata[0].duration_ms/60000).toFixed(2))
    artistpopid.append("p").text(tabledata[0].artist_popularity)
    artistfolid.append("p").text(tabledata[0].artist_followers)
    songpopid.append("p").text(tabledata[0].Predict_Prob)
    danceid.append("p").text(tabledata[0]['features.danceability'])
    speechid.append("p").text(tabledata[0]['features.speechiness'])
    liveid.append("p").text(tabledata[0]['features.liveness'])
    acousticid.append("p").text(tabledata[0]['features.acousticness'])

    document.getElementById("artistimg").src = tabledata[0].artist_image_url_s;
    });

    clearBtn.on("click", function(){
        window.location.reload()
        
    });

    rankBtn.on("click", function(){
        
        d3.event.preventDefault();
        d3.select("#artistsnameduh").text("");
        d3.select("#popid").text("");
        d3.select("#loudid").text("");
        d3.select("#uniquewords").text("");
        d3.select("#durationid").text("");
        d3.select("#artistpopid").text("");
        d3.select("#artistfolid").text("");
        d3.select("#songpopid").text("");

        d3.select("#songnametitle").text("");
        d3.select("#songnametitle1").text("");
        d3.select("#releasetitle").text("");
        d3.select("#releasetitle1").text("");

        d3.select("#danceid").text("");
        d3.select("#speechid").text("");
        d3.select("#liveid").text("");
        d3.select("#acousticid").text("");

        popvalue1 = popValue.property("value");
        console.log(popvalue1)
        var tabledata = data.filter(data => ((data.Rank == popvalue1)));

        // console.log(data)
        artistname.append("h2").text(tabledata[0].artist)
        songnametitle1.append("p").text("Song Name: ")
        songnametitle1.append("p").text(tabledata[0].song_name)
        releasetitle.append("p").text("Release Date: ")
        releasetitle1.append("p").text(tabledata[0].release_date)
        popid.append("p").text(tabledata[0].artist_popularity)
        loudid.append("p").text(tabledata[0]['features.loudness'])
        uniquewordsid.append("p").text(tabledata[0].lyric_unique_word_count)
        durationid.append("p").text((tabledata[0].duration_ms/60000).toFixed(2))
        artistpopid.append("p").text(tabledata[0].popularity)
        artistfolid.append("p").text(tabledata[0].artist_followers)
        songpopid.append("p").text(tabledata[0].Predict_Prob)

        danceid.append("p").text(tabledata[0]['features.danceability'])
        speechid.append("p").text(tabledata[0]['features.speechiness'])
        liveid.append("p").text(tabledata[0]['features.liveness'])
        acousticid.append("p").text(tabledata[0]['features.acousticness'])

        document.getElementById("artistimg").src = tabledata[0].artist_image_url_s;



    });// all you data function in here
        });
};




