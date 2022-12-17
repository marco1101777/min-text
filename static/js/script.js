const $ = selector => document.querySelector(selector)   , $$ = selector =>  document.querySelectorAll(selector) , id = ID => document.getElementById(ID)

const $text = id("text") ; 
const btnCopy = id("copy")  ; 
const compartir = id("compartir") ;  


function main(){
    let urlCode = window.location.href ;
    let code = urlCode.split("#")  ; 
    $text.value =  utf8(code[1]) ; 
}

compartir.addEventListener("click" , () => {
    let url = id("secret");  
    url.value = window.location.href ;  
    url.select() ; 
    document.execCommand('copy');
})

$text.addEventListener("keyup" , ()=>{
    $text.focus() ;
    let text = $text.value ; 
    window.location.assign(`#${bs64(text)}`);    
    
})


btnCopy.addEventListener("click"  , ()=>{
    $text.select()
    document.execCommand('copy');

})






function bs64( str ) {
    return window.btoa(unescape(encodeURIComponent( str ))); // evitar errores  
  }
  
  function utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
  }


  main() 