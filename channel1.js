function channel1 (youtubeChannelID) {
options.channelId= youtubeChannelID;
loadVids();

function loadVids() {
    $.getJSON(URL, options, function (data) {
        var id = data.items[0].id.videoId;
        resultsLoop(data);
    });

    function resultsLoop(data) {
        $.each(data.items, function (i, item) {
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.id.videoId;

            var titleTags = cryptosArr.filter(function(val){
              return title.includes(val);
            });


             obj =   {
                "thumb": item.snippet.thumbnails.medium.url,
                "title": item.snippet.title,
                "desc": item.snippet.description.substring(0, 100),
                "vid": item.id.videoId,
                "channelTitle": item.snippet.channelTitle,
                "tags": titleTags
              }
            arr.push(obj);
            return thumb, title, desc, vid;
        });
  }
}
}
