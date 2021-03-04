$(document).ready(function loadDoc() {


      $.getJSON( "js/data.json", function(data) {
        console.log( "success" );
        console.log("json data : ",data);

        let details = new Map()

        data.map((item)=> {
          var pic = '<img src="images/square/' + item.path + '" alt = "' + item.title+'">'
          $("ul.gallery li").append(pic);
          details.set(item.path,item.title+'<br>'+item.city+','+item.country+'['+item.taken+']');
        })

        $("ul.gallery").on("mouseenter", "img", function(event){
          let x = event.pageX+20;
          let y = event.pageY-200;
          $(this).addClass("gray");
          let imgname = $(this).attr('src').split('/');
          imgname = imgname[imgname.length-1]
          var prev = '<div style="left:'+x+'px;top:'+y+'px" id="preview" ><img src="images/medium/' + imgname
           + '" alt = "' + $(this).attr('alt')+'"><p>'+details.get(imgname)+'</p></div>'

          $("body").prepend(prev);
          $("div#preview").fadeIn("1000");
        });

        $("ul.gallery").on("mouseleave", "img", function(){
          $(this).removeClass("gray");
          $("div#preview").remove();
        });

        $("ul.gallery").on("mousemove", "img", function(event){
          let x = event.pageX+20;
          let y = event.pageY-200;
          $("div#preview").css({
            left : x+'px',
            top : y+'px' 
          });
        });
      

      })
        .done(function() {
          console.log( "second success" );
        })
        .fail(function() {
          console.log( "error. images could not be loaded" );
        })
  
  
  });