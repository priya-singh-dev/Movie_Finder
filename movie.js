
// document.querySelector('button').addEventListener('click', function() {
//     document.querySelector('#content1').style.height= '';
//     this.style.display= 'none';
//   });

$(document).ready(() => {
    $("#btn1").click(()=>{
    
        if($('.movie').val()=="")
        {
            alert("Please enter the title")
        }
        else
		{
		 $('#first').addClass('vision');
		     getalldata();
		}
    })

    $("#btn2").click(()=> {
        if($(".id1").val()=="")
        {
            alert('enter the id')
        }
        else{
            $('#first').addClass('vision');
            getalldata();
        }
    })

    $("#btn3").click(()=> {
        if($('.movie1').val() == "")
        {
            aler('Please enter the title')
        }
        else if($('.year').val() == "")
        {
            alert('enter the year')

        }
        else
        {
            $('#first').addClass('vision');
            getalldata();
        }
    })

    $('.b1').click(() => {
        $('#1').show() && $('#2').addClass('vision') && $('#3').addClass('vision') &&
        $(".b1").css("background-color","#CABDC7") && $(".b2").css("background-color","#03FBCA") && $(".b3").css("background-color","#03FBCA");

    })

    $('.b2').click(() => {
        $('#1').hide() && $('#2').removeClass('vision') && $('#3').addClass('vision')&&
        $(".b1").css("background-color","#03FBCA") && $(".b2").css("background-color","#CABDC7") && $(".b3").css("background-color","#03FBCA");

    })
    $('.b3').click(() => {
        $('#1').hide() && $('#2').addClass('vision') && $('#3').removeClass('vision')&&
        $(".b1").css("background-color","#03FBCA") && $(".b2").css("background-color","#03FBCA") && $(".b3").css("background-color","#CABDC7");


    })


$('#1').click(()=>
{
  $('this').css("background-color","gray")
})

$(document).ready(function(){
    $('.my-btn').click(function(){
        $(".card-body").toggle();
    });
});

});


let getalldata = ()=>

{

	let title= $(".movie").val() || $(".movie1").val();
    let year = $(".year").val();
    let ide = $(".id1").val();


//var link = 'http://www.omdbapi.com/?t='+title+'&y='+year+'&i='+ide+'&apikey=9127e66a'
   
     $.ajax({
     
        
     type: 'GET',
     dataType: "jsonp",
     async: true,
     url: 'https://www.omdbapi.com/?t='+title+'&y='+year+'&i='+ide+'&apikey=9127e66a',

     success: (response)=>
     {     
       
       console.log(response);


                
       $('#movie-info').removeClass('vision') && $('#home').removeClass('vision');
                    
                  
       if(undefined !== response.Title && null !== response.Title )
        {
        $('.name').append(response.Title);

            }
            else
            {
$('#errorhandling').removeClass('vision') && $('#home').removeClass('vision') && $('#movie-info').addClass('vision');  

            }

        $('.year').append(response.Year);
        $('.release').append(response.Released);
         $('.duration').append(response.Runtime);
         $('.genre').append(response.Genre);
         $('.directors').append(response.Director);
         $('.actors').append(response.Actors);
         $('.writers').append(response.Writer);
         $('.imdbid').append(response.imdbID);
              if ("N/A" || null || undefined == response.Ratings[0].Value) 
              {
                $('.rating').append("N/A");
              }
              else
              {
         $('.rating').append(response.Ratings[0].Value);

              }

         $('.voting').append(response.imdbVotes);
         $('.metascore').append(response.Metascore);
         $('.collection').append(response.BoxOffice);
          $('.language').append(response.Language);
           $('.awards').append(response.Awards);
           $('.country').append(response.Country);






         $('.img').append(()=>{ if( "N/A" == response.Poster)
        {



          $(".img").html('<img src="images/movie.jpeg " class="img-fluid" style="border: 20px 25px solid ;" >');
        

        }
        else
        {

       
        $(".img").html('<img src=" ' + response.Poster + ' " class="img-fluid" style="border-style: solid;">');

        }});


        

     },

     timeout: 4500,

     error: (err)=>
     {

console.log(err);
       $('#errorhandling').removeClass('vision') && $('#home').removeClass('vision');  

     },
    beforeSend: ()=>
    {
     $("#lodr").removeClass('vision')
    },
    complete:()=>
    {
      $("#lodr").addClass('vision') && $("#lodr").removeClass('main')
    }

     });
    
    }
