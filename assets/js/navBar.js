$(document).ready(function () {
    $('#home').click(function(){
        $('.cricket_News').hide();
        $('.ipl_Special').hide();
        $('.match_Analysis').hide();
        $('.blog_Contact').hide();
        $('.home_Content').show().load('homeBlog.html');
      });
      
      $('#cricketNews').click(function(){
        $('.home_Content').hide();
        $('.ipl_Special').hide();
        $('.match_Analysis').hide();
        $('.blog_Contact').hide();
        $('.cricket_News').show().load('cricketNews.html');
      });
      
      $('#analysis').on('click',function(){
        $('.home_Content').hide();
        $('.cricket_News').hide();
        $('.ipl_Special').hide();
        $('.blog_Contact').hide();
        $('.match_Analysis').show().load('matchAnalysis.html')
      });

      $('#special').on('click',function(){
        $('.home_Content').hide();
        $('.cricket_News').hide();
        $('.match_Analysis').hide();
        $('.blog_Content').hide();
        $('.ipl_Special').show().load('iplSpecial.html')
      });

      $('#blogContact').on('click',function(){
        $('.home_Content').hide();
        $('.cricket_News').hide();
        $('.match_Analysis').hide();
        $('.ipl_Special').hide();
        $('.blog_Contact').show().load('blogContact.html')
      });

      $('.home_Content').load('homeBlog.html');
      $('.cricket_News').load('cricketNews.html');
      $('.ipl_Special').load('iplSpecial.html');
      $('.match_Analysis').load('matchAnalysis.html');
      $('.blog_Contact').load('blogContact.html');
});