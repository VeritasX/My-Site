/**
 * Created by aaronendsley on 3/26/16.
 */
'use strict';


(function getRepos(){
    $.ajax({
        url: 'https://api.github.com/users/VeritasX/repos',
        method: "GET",
        data:{
            format : 'json'
        },
        success:function(data){
            var githubRepos= document.getElementById('githubRepos');
            for (var i in data){
                githubRepos.innerHTML += '<div class="gitHubs"><h3>'+data[i].name +'</h3> <p>'+data[i].description +'</p><a href = ' + data[i].html_url + '><button type="button" class="btn btn-default">View Repo</button></a></div><br/>';
            }
        }

    });

}());

var download=$('.downloadResume');
var messageDiv=$('#downloadMessage');

var downloadResume=function(){
    if(download.click){
        download.remove();
        messageDiv.text('Thank You for Downloading my Resume!');
    }
}
$('body').scrollspy({ target: '.navbar-ex1-collapse' });


var homeNav=$('#first');

$(window).scroll(function(){
    if(homeNav.offset().top === 0  ){
        homeNav.attr('class', 'active');
    }

});

var ScrollToTop=function() {
    $("html, body").animate({scrollTop: 0}, "slow");
};

var scrollTolink=function (link) {
    $("html, body").animate({ scrollTop: $(link).offset().top }, 1000);

};

var setScreenShot=function(idToUse, fileName, mobileClass, desktopClass){

    $(idToUse).attr('src', fileName);

    if($(mobileClass) && $(idToUse)){
        $(mobileClass).toggle();
        $(desktopClass).toggle();

    }else{
        $(mobileClass).toggle();
        $(desktopClass).toggle();
    }
};


