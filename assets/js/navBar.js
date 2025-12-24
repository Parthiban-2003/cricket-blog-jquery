$(document).ready(function () {
  $('#home').click(function () {
    $('.cricket_News').hide();
    $('.ipl_Special').hide();
    $('.match_Analysis').hide();
    $('.home_Content').show().load('homeBlog.html');
  });

  $('#cricketNews').click(function () {
    $('.home_Content').hide();
    $('.ipl_Special').hide();
    $('.match_Analysis').hide();
    $('.cricket_News').show().load('cricketNews.html');
  });

  $('#analysis').on('click', function () {
    $('.home_Content').hide();
    $('.cricket_News').hide();
    $('.ipl_Special').hide();
    $('.match_Analysis').show().load('matchAnalysis.html')
  });

  $('#special').on('click', function () {
    $('.home_Content').hide();
    $('.cricket_News').hide();
    $('.match_Analysis').hide();
    $('.ipl_Special').show().load('iplSpecial.html')
  });

  $('.home_Content').load('homeBlog.html');
  $('.cricket_News').load('cricketNews.html');
  $('.ipl_Special').load('iplSpecial.html');
  $('.match_Analysis').load('matchAnalysis.html');

  $('.footer').css({
    'text-align': 'center',
    'padding': '10px 0',
    'background-color': '#333',
    'color': '#fff',
    'font-size': '14px',
    'margin-top': '20px'
  });

  let Years = new Date().getFullYear();
  $('.footer span').append(Years);

  $('.footer a').css({
    'color': '#ff9800',
    'text-decoration': 'none',
    'margin': '0 5px'
  }).hover(function () {
    $(this).css('text-decoration', 'underline');
  }, function () {
    $(this).css('text-decoration', 'none');
  });
});