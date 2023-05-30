/*
Elemntos del HTML
 * Botones
 * Input
 * Aréa de texto
 */

const botonEncriptar = document.querySelectorAll('button')[0];
const botonDesencriptar = document.querySelectorAll('button')[1];
let botonCopiar = document.querySelectorAll('button')[2];;
console.log(botonDesencriptar);



/**Necesito dos fucninoes una para encriptar y otra para desencriptar
 * Tomando en cuenta que:
 * a='ai';
 * e='enter'
 * i='imes',
 * o='ober',
 * u='ufat'
 * "gato" => "gaitober"
gaitober" => "gato"
 */
/**Función para mostrar mensaje */
const showMessage = (messageText) =>{
    const div = document.querySelector('.notFound');
    const divMessage = document.querySelector('.message');
    div.classList = 'hidden notFound';
    divMessage.classList = 'container-message message';
    divMessage.innerHTML = `<textarea id="messagetext"  value="">${messageText}</textarea>`;
    console.log(div);
    console.log(divMessage);

}
/**Funcion para encriptar el texto */
const encriptar = () =>{
    let text = document.querySelector('input').value;
    
    const newWord = [];
    text = text.split('');
    text.map(e =>{
        if(e ==='a'){
            e='ai'
        }else
        if(e ==='e'){
            e='enter'
        }else
        if(e ==='i'){
            e='imes'
        }else
        if(e ==='o'){
            e='ober'
        }else
        if(e ==='u'){
            e='ufat'
        }else{
            e=e;
        }
        newWord.push(e);
    })
    showMessage(newWord.join(''));
    return 0//newWord.join('');

}

/**Funcion para traducir el texto */
const desencriptar = () =>{
    let text = document.querySelector('input').value;

    const  keys   = ['ai','enter','imes','ober','ufat'];
    const letters = ['a','e', 'i','o','u'];   
    
    for (let i = 0; i < keys.length; i++) {
        let e = keys[i];
        while(text.includes(e)){
       text= text.replace(e,letters[i]);
    }}
    console.log(text);
    showMessage(text);
    return text;    
}
const copy =() =>{
let copyText = document.querySelector("#messagetext");
console.log(copyText);
         // Get the text field

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copy);



