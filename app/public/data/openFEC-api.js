$( document ).ready(function() {

  var search = $("#term").val();





  var openFECUrl = "https://api.open.fec.gov/v1/candidate/H8WI01024/?sort=name&per_page=20&api_key=y4DIidsFb8iNiho5vdHhMZgxqKWemE79fwka5zmo&page=1";

  var nameCandSearch = "https://api.open.fec.gov/v1/candidates/?name=Paul%20Ryan&sort=name&per_page=20&api_key=y4DIidsFb8iNiho5vdHhMZgxqKWemE79fwka5zmo&page=1";

  var commitee = "https://api.propublica.org/campaign-finance/v1/2016/candidates/leaders/contribution-total.json";

  var publicaSpec = "https://api.propublica.org/campaign-finance/v1/2014/candidates/S6VA00093.json/";


  var publicaWorking = "https://api.propublica.org/congress/v1/members/senate/RI/current.json";

  var publicaCommQ = "https://api.propublica.org/campaign-finance/v1/2016/committees/search.json?query=Team Ryan";

  var publicaComm = "https://api.propublica.org/campaign-finance/v1/2016/committees/C00545947.json";








  $.ajax({
    url: openFECUrl,
    type: 'GET',
    // cycle: '2014',
    dataType: 'json',
    // query: "C00545947",
    // headers: {'X-API-Key': 'okgYNJhUb4A4NGXqcH7fPPsOHv4GiGElqmGiP2Ag'}
  }).done(function(openFECData) {
    console.log(openFECData);



    // var publicaRes = publicData.response;


    console.log(openFECData);
    // console.log(publicaRes);

    //
    // $(".repName1").html(search_results[0].name);
    // $(".party1").html(search_results[0].party);
    // $(".phoneNum1").html(search_results[0].phones[0]);
    // $(".webLink1").html(search_results[0].urls[0]);
    //
    // $(".repName2").html(search_results[1].name);
    // $(".party2").html(search_results[1].party);
    // $(".phoneNum2").html(search_results[1].phones[0]);
    // $(".webLink2").html(search_results[1].urls[0]);
    //
    // $(".repName3").html(search_results[2].name);
    // $(".party3").html(search_results[2].party);
    // $(".phoneNum3").html(search_results[2].phones[0]);
    // $(".webLink3").html(search_results[2].urls[0]);
    //
    //
    // $("#img1").css('background-image','url(' + search_results[0].photoUrl + ') no-repeat');
    // $("#img2").css('background-image','url(' + search_results[1].photoUrl +') no-repeat');
    // $("#img3").css('background-image','url(' + search_results[2].photoUrl + ') no-repeat');




    // console.log(search_results.photoUrl);

    //
    // for (var i = 0; i < search_results.length; i++){
    //   var div = $("<div>");
    //   var p = $("<p>");
    //   var repImg = search_results[i].headline.main;
    //   var repName = search_results[i].snippet;
    //
    //   $("#civic-dump").append("<strong>" + repName + "</strong>" + "<br>");
    //   $("#civic-dump").append(repImg + "<br>" + "<br>");
    // }
  }).fail(function(err) {
    throw err;
  });


});
