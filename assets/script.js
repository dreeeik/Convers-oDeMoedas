function resultado(){
    const res = document.querySelector(".conversao").value
    document.querySelector(".conversao").value
    document.querySelector(".p").innerHTML = `$ ${(res / 5.29).toFixed(2)}`
}
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector(".converter");
      btn.click();
    
    }
  })