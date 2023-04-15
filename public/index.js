$(document).ready(function() {
$(".dropdown").hover(function() 
{
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
});

$(document).ready(function () {
  $(window).scroll(function () {
    var top =  $(".goto-top");
        if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
  top.animate({"margin-left": "0px"},1500);
        } else {
            top.animate({"margin-left": "-100%"},1500);
        }
    });

    $(".goto-top").on('click', function () {
        $("html, body").animate({scrollTop: 0}, 400);
    });
});


var count = 0;

$(document).ready(function() {
var button = $(".more-button").on("click", function(){
  count++;
  if(count%2!=0)
  {
    setTimeout(function(){
      $("#status").css("display", "flex");
      button.text("Less");
    }, 300);
    
  }
  else
  {
    setTimeout(function(){
       $("#status").css("display", "none");
    button.text("More");
    }, 300)
   
  }
});
});

$(document).ready(function() {
  $('.password').on('blur', function(){
    let password = $(this).val();
    if(password.length>0)
    {
      let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z!@#$%^&*()_+])(?!.*\s).{8,20}$/;
      if (regex.test(password)) {
          $('.signup-button').removeAttr('disabled');
          $('.error-message').text("");
      } 
      else 
      {
          $('.error-message').text("Password must contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character");
          // Password is invalid
      }
    }
    else
    {
      $('.error-message').text("");
    }
    });
});
$(document).ready(function(){
  $('.confirm-password').on('blur', function(){
    const inputP = $('.password').val();
    const inputCP= $(this).val();
    if(inputCP.length>0)
    {
      /* $.ajax({
        url: '/signup',
        method: 'get',
        data: { inputP: inputP, inputCP: inputCP},
        success: function(response){ */
          if(inputCP != inputP)
          {
            $('.confirm-error-message').text("Password does not match");
          }
          else{
            $('.confirm-error-message').text("");
          }
    }
    else
    {
      $('.confirm-error-message').text("");
    }
  })
})

$(document).ready(function(){
  $.ajax({
    url: '/isLogedIn',
    method: 'GET',
    success: function(response){
      console.log(response);
      if(response.logedIn === true)
      {
        $('.login_img').attr('src', response.photourl);
        $('.login_img').css('display', 'block');
        $('.login_dropdown').addClass("dropdown");
        $('.login_username').find('span').text(response.username);
        $('#login_user').attr('data-bs-toggle', 'dropdown');
      }
      else{
        $('.login_img').css('display', 'none');
        $('.login_dropdown').removeClass("dropdown");
        $('.login_username').find('span').text("Login/Signup");
        $('#login_user').removeAttr('data-bs-toggle');
      }
    }
  })
})



{/* <button onclick="printDiv()">Print Content</button>

<script>
function printDiv() {
  var divContents = document.getElementById("printableDiv").innerHTML;
  var a = window.open('', '', 'height=500, width=500');
  a.document.write('<html>');
  a.document.write('<body >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
}
</script>
In the printDiv() function, first we get the innerHTML of the div using getElementById() method. Then, we open a new window using window.open() method and write the div contents to it using document.write() method. After that, we close the document using document.close() method and print it using print() method.
 */}























/* $('#input').on('input', function() {
    let value = $(this).val();
    $.ajax({
      url: '/',
      method: 'POST',
      data: { input: value },
      success: function(response) {
        console.log('Server response:', response);
      }
    });
 });
 */
/* $(".password").on('blur', (e)=>{
  let password = $('#password').val();
  console.log(password);
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z!@#$%^&*()_+])(?!.*\s).{8,20}$/;
  console.log(regex.test(password));
    if (regex.test(password)) {
        $('.signup-button').removeAttr('disabled');
        $('.error-message').text("");
    } 
    else 
    {
        $('.error-message').text("Password must contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character");
        // Password is invalid
    }
}) */


















/* $(".password").on('input', (e)=>{
  let password = e.target.value;
  console.log(password);
  $(".confirm-password").on('input', (c)=>{
    let confirmPassword = c.target.value;
    console.log(confirmPassword);
    if(password == confirmPassword)
    {
      $('.signup-button').removeAttr('disabled');
    }
    else{
      $('.signup-button').attr('disabled', 'disabled');
    }
  })
}); */


/* const animateOnScroll = () => {
  const element = document.querySelector('.animate-on-scroll');
  const elementTop = element.getBoundingClientRect().top;
  const elementHeight = element.offsetHeight;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight - elementHeight / 2) {
    element.classList.add('animate');
    setTimeout(function(){
      element.classList.remove('animate');
    }, 800);
    $(window).off('scroll', animateOnScroll);
  }
};

$(".service-head").on('scroll', function(){
  $(window).on('scroll', animateOnScroll);
}) */



/* const OnScroll = () => {
  const element1 = document.querySelector('.on-scroll');
  const elementTop1 = element1.getBoundingClientRect().top;
  const elementHeight1 = element1.offsetHeight;
  const windowHeight1 = window.innerHeight;

  if (elementTop1 <= windowHeight1 - elementHeight1 / 2) {
    element1.classList.add('animate');
    setTimeout(function(){
      element1.classList.remove('animate');
    }, 800);
    $(window).off('scroll', OnScroll);
  }
};
$(".info-head").on('scroll', function(){
  $(window).on('scroll', OnScroll);
}) */



$(document).ready(function() {
  $(".print").click(function() {
    var printContent = $(".pnr-top").html();
    var originalContent = $("body").html();
    $("body").html(printContent);
    window.print();
    $("body").html(originalContent);
  });
});

// $(".source").on('input', (e)=>{
//   var source = e.target.value;
//   console.log(source);});
/*  var codes;
$.getJSON('Name-Code.json', function(data) {
  // store the data in a variable for later use
  codes = data;
});

$('.source').on('input', function(E) {
  // get the current value of the input field
  var userInput = E.target.value;
  // filter the codes based on the user input
  var filteredCodes = codes.filter(function(item) {
    var keys = Object.keys(item.B);
    var match = false;
    
    keys.forEach(function(key) {
      if (item[key].startsWith(userInput.toUpperCase())) {
        match = true;
      }
    });
    
    return match;
  });
  
  // create a list of options to show to the user
  var optionsList = '';
  
  filteredCodes.forEach(function(item) {
    var keys = Object.keys(item);
    keys.forEach(function(key) {
      optionsList += '<li>' + item[key] + '</li>';
    });
  });
  
  // display the list of options to the user
  console.log(optionsList);
});
 */

// $(document).ready(function(){
//   let width = $(window).width();
//   console.log(width);
//   if(width<=576)
//   {
//     $(".TBWS_from").addClass("order-1 col-sm-6");
//     $(".TBWS_to").addClass("order-2 col-sm-6");
//     $(".TBWS_CR").addClass("order-3 col-sm-12");
//   }
// })