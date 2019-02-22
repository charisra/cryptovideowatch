// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
//
// GET YOUR API HERE https://console.developers.google.com/apis/api
// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg

/* Function that checks if a title includes a cryptoName in order to add a Tag
var titleTags = cryptosArr.filter(function(val){
  return title.includes(val);
}); */

$(document).ready(function () {
options.channelId= 'UCiUnrCUGCJTCC7KjuW493Ww';

    loadChannels();

    function loadChannels() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].id.videoId;
            var desc = data.items[0].snippet.description;
            //for some reason a for loop youtuChannelID doesn't work on
            channel1(youtubeChannelID[0][0]);
            channel1(youtubeChannelID[1][0]);
            channel1(youtubeChannelID[2][0]);
            channel1(youtubeChannelID[3][0]);
            channel1(youtubeChannelID[4][0]);
            channel1(youtubeChannelID[5][0]);
            channel1(youtubeChannelID[6][0]);
            channel1(youtubeChannelID[7][0]);
            channel1(youtubeChannelID[8][0]);
            channel1(youtubeChannelID[9][0]);
            channel1(youtubeChannelID[10][0]);
            channel1(youtubeChannelID[11][0]);
            channel1(youtubeChannelID[12][0]);
            channel1(youtubeChannelID[13][0]);
            channel1(youtubeChannelID[14][0]);
            channel1(youtubeChannelID[15][0]);
            channel1(youtubeChannelID[16][0]);
            channel1(youtubeChannelID[17][0]);
            channel1(youtubeChannelID[18][0]);
            channel1(youtubeChannelID[19][0]);
            channel1(youtubeChannelID[20][0]);
            channel1(youtubeChannelID[21][0]);
            channel1(youtubeChannelID[22][0]);
            channel1(youtubeChannelID[23][0]);
            channel1(youtubeChannelID[24][0]);
            mainVid(id, desc);
            setTimeout(main3,500);
        });
    }

    function mainVid(id,desc) {
        $('#video').html(`
          <div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${id}" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
          <div class="mainDescription">Description: </br>${desc}</div>`);
    }
});
