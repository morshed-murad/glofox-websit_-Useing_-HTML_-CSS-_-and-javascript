function myFunction(){
    document.getElementById("myUl1").classList.toggle("show");
  }
  window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
      var navbar = document.getElementsByClassName("ul1")
       var i;
       for(i = 0; i<navbars.length; i++){
        var openNavbar =navbarsdown[i];
        if(openNavbar.classList.contains('show')){
          openNavbar.classList.remove('show');
        }
       }
    }
  }