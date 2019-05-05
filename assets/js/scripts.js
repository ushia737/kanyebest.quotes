get();
function get() {
    var url = 'https://api.kanye.rest'
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        document.getElementById("quote").innerHTML = data.quote;
    });
}

var randomImage = {
    paths: [
      "assets/img/kanye2.png",
      "assets/img/kanye3.png",
      "assets/img/kanye4.png",
      "assets/img/kanye5.png",
      "assets/img/kanye6.png",
      "assets/img/kanye7.png",
    ],
    generate: function(){
      var path = randomImage.paths[Math.floor(Math.random()*randomImage.paths.length)];
      var img = new Image();
      img.src = path;
      $("img.randomkanye").html(img);
      $("img.randomkanye").attr("src", path);
    }
}
randomImage.generate();

$(document).ready(function() {
    var doc = $(document);
    var width = doc.width() ;
    var height = doc.height() ;
    var shapes = [ $(".randomkanye")  ]
    
    function randomStuff(){
        var randomShape = shapes[ Math.floor (Math.random() * shapes.length) ]
        var clone = randomShape.clone().appendTo('body');
    
        clone.last().css('left', Math.random()* width )
        clone.last().css('top', Math.random()* height )
        }
    setInterval(function(){
        randomStuff();
    },250)
})

var audio = $("#kanyehuh")[0];
$("#refresh").mouseenter(function() {
  audio.play();
});