//channelId: 'UCNZb8eUomqPYgrdVeOn4eZA'

  function main3 () {
    console.log('main3.js');
    /*** Randomize array element order in-place.
    * Using Durstenfeld shuffle algorithm.*/
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(arr);
    append(arr);

    function append(arr){
      for(i=0;i<arr.length;i++){
        var tagsInit = [];
        var thumb = arr[i].thumb;
        var title = arr[i].title;
        var desc = arr[i].desc;
        var vid = arr[i].vid;
        var channelTitle = arr[i].channelTitle;
            tagsInit = arr[i].tags;

      $('#col1').append(`
        <article class="item" data-key="${vid}" data-description="${desc}">
        <div class="videoInArticle" id="videoImage${i}">
        <img src="${thumb}" alt="" class="thumb">
          </div>
          <div class="details">
            <h4>${title}</h4>
            <p>${desc}</p>
          <p><i class="fab fa-youtube" style="color:#ff0000;margin-right:4px"></i>${channelTitle}</p>
        </article>
      `);

      for (j=0;j<tagsInit.length;j++){
        tags = tagsInit[j];

        $('#videoImage'+i).append(`
            <div class="cryptoTag">${tags}
            </div>
        `);
      }
      }
    }

    function mainVid(id,descr) {
        $('#video').html(`
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <div class="mainDescription">Description: </br>${descr}</div>`);
    }


    // CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        console.log(id);
        var descr = $(this).attr('data-description');
        console.log(descr);
        mainVid(id,descr);
    });


    $('#data_source').multiselect({
      //onChange: function(option, checked, select) {
      //  valuesarr.push('this');
    //  valuesarr.push($(option:selected).val());
//},
    /*templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
    },*/
    nonSelectedText: 'Select channel(s)...',
    includeSelectAllOption: true,
    buttonWidth: '220px',
    enableFiltering: true,
    filterBehavior: 'text',
    enableCaseInsensitiveFiltering: true,
    /*templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>',
        filter: '<li class="multiselect-item filter"><div class="input-group m-0 mb-1"><input class="form-control multiselect-search" type="text"></div></li>',
        filterClearBtn: '<div class="input-group-append"><button class="btn btn btn-outline-secondary multiselect-clear-filter" type="button"><i class="fa fa-close"></i></button></div>'
    } */

    });
    /*var optionsnew = [
    {label: 'Crypto Zombie', title: 'Crypto Zombie', value: '1', selected: true},
    {label: 'Decentralized TV', title: 'Decentralized TV', value: '2', selected: true},
    {label: 'Crypto Rich', title: 'Crypto Rich', value: '3', selected: true}
  ]; */

    $('#data_source').multiselect();


    $('#coin_source').multiselect({
    nonSelectedText: 'Select coin(s)...',
    includeSelectAllOption: true,
    buttonWidth: '170px',
    enableFiltering: true,
    filterBehavior: 'text',
    enableCaseInsensitiveFiltering: true,

    });
    $('#coin_source').multiselect();


// Fires when ChannelList 'Submit'is clicked
$("#channelSelect").unbind('submit').bind('submit',function(e){
  e.preventDefault();
  console.log('channelSelect fired');
  var bool = false;
  valuesarr= [];
  $("#col1").empty();
  $('#data_source option:selected').each(function(){
    valuesarr.push($(this).val());
    console.log(valuesarr);
  });
console.log(valuesarr);
  for (i=0;i<valuesarr.length;i++){
  if(youtubeChannelNames.indexOf(valuesarr[i])>=0){
    bool = true;
    var j = youtubeChannelNames.indexOf(valuesarr[i]);
    arr= [];
    channel1(youtubeChannelID[j][0]);
    }
  }
  if (bool){
    valuesarr= [];
  setTimeout(main3,300);
}
  //  deferred = '';
  //  $.when(channel2()).done(main3());
});


// Fires when CoinList 'Submit'is clicked
$("#coinSelect").unbind('submit').bind('submit',function(e){
  e.preventDefault();
  var temparr = arr;
  var newarr2 =[];
  var newarr = [];
  //var bool = false;
  coinsarr= [];
  $("#col1").empty();
  $('#coin_source option:selected').each(function(){
    coinsarr.push($(this).val());
  });
console.log(coinsarr);
for (i=0;i<arr.length;i++){
  newarr2 = arr[i].tags.some(function(val){
    return coinsarr.indexOf(val)>=0
  });
  if(newarr2 == true){
    newarr.push(arr[i]);
  }
    newarr2 = [];
};
arr = newarr;
  /*for (j=0;j<coinsarr.length;j++){
    if(coinsarr[j].indexOf(arr[i].tags)>=0){
      newarr.push(arr[i]);
      console.log('newarr  '+newarr);
      arr = newarr;
    }
  } */

function resetarr (){  //resets array after rendering the selected coins. That way if a new selection of coins happens, the entire array is available
  arr = temparr;
}
  setTimeout(main3,300);
  setTimeout(resetarr,400);
});


}
