//Kullanıcıdan isim bilgisi istendi
let firstName = prompt("Adınızı Giriniz: ")
//Alınan isim bilgisi myName ID'sine yerleştirildi
firstName = document.getElementById("myName").innerHTML = firstName
//Bir Fonksiyon oluşturarak tarih kısmına yerleştirildi
function time(){
    let  date = new Date().toLocaleString('tr-TR'); 
    date= document.getElementById('myClock').innerHTML=date
}
//setInterval ile her saniyede ekrana tarihi yazdırdım...
setInterval(time, 1000);
//Bir isim girilmez ise sayfa tekrar Adınızı Giriniz penceresi açacak
if(!firstName){
alert("Bir isim giriniz...")
location.reload()
}
else{
}

