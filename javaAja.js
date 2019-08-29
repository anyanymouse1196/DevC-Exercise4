
// SLider start
var swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// Slider ENd

// validasi email
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))  {
    document.formulir.email.focus();
    return true;
    }else{
    alert("You have entered an invalid email address!");
    window.location.href = "http://www.w3schools.com";
    document.formulir.email.focus();
    return false;
  }
}


// validasi password
function checkPass()
{
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('kPassword');
    var message1 = document.getElementById('error-nul');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if(pass1.value == pass2.value){
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "oke!"
    }
    else{
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password salah."
    }
}  
function checkPass1() {
  var pass1 = document.getElementById('password');

//   if(pass1.value.length < 8){
//     pass1.style.backgroundColor = badColor;
//     message.style.color = badColor;
//     message.innerHTML = "Minimal 8 karakter."
// }
// else{
//   pass1.style.backgroundColor = goodColor;
//   message.style.color = goodColor;
// }
if(pass1.value=='' || pass1.value<=8) {
  message1.innerHTML = "Minimal 8 karakter."

}
}
//  kalkulator

function hitungAja(){
  var satu = parseFloat(document.getElementById('bilangan1').value);
  var dua = parseFloat(document.getElementById('bilangan2').value);
  var operasi = document.getElementById('kalkulasi').value;
  // var result = document.getElementById("hasil");
  
  if (operasi === "tambah"){
    document.getElementById('hasil').value = satu+dua;
  }else if (operasi === "kurang"){
    document.getElementById('hasil').value = satu-dua;
  }else if (operasi === "kali") {
    document.getElementById('hasil').value = satu*dua;
  }else if (operasi === "bagi") {
    document.getElementById('hasil').value = satu/dua;
  }
    

}
