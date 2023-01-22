const INPUT = document.querySelector('#input_list');
const BTN = document.querySelector('.btn_input');
const LIST = document.querySelector('.pdt_area');

BTN.addEventListener('click', function(eve){
    INPUT.style.color='black';
    eve.preventDefault();
    let valeur = INPUT.value;
    if(valeur.trim().length>3){
        creatList(valeur);
        INPUT.value="";
    }
    else{
        INPUT.value="Produit Invalid!!! ";
        INPUT.style.color='red';
    }

});

function creatList(valeur){
    const div= document.createElement('div');
    const divi= document.createElement('div');
    const p = document.createElement('p');
    const icond = document.createElement('ion-icon');
    const iconm = document.createElement('ion-icon');

    div.classList.add('item');
    icond.setAttribute('name', 'close-circle-outline');
    iconm.setAttribute('name', 'create-outline');
    p.textContent=valeur;
    div.appendChild(p);
    divi.appendChild(iconm);
    divi.appendChild(icond);
    div.appendChild(divi);
    LIST.appendChild(div);

    div.style.opacity = 0;
    div.offsetParent ;
    div.style.transition = 'opacity 750ms';
    div.style.opacity = 1;
}
LIST.addEventListener('click', function(event){
    let nom = event.target.getAttribute('name');
if(nom == 'close-circle-outline'){
    event.target.parentNode.parentNode.remove();
}
if(nom == 'create-outline'){
    let page=document.querySelector('.pagemodif');
    page.style.left='0';
    let Pm =event.target.parentNode.parentNode.firstChild.textContent;
    console.log(Pm);
    let inputm = document.querySelector('#modify_list');
      inputm.value=Pm;
   let btnM=document.querySelector('.btn_modify');
   btnM.addEventListener('click', function(){
    let ds =event.target.parentNode.parentNode.firstChild
     page.style.left='-100%';
    
    ds.textContent=inputm.value;
    console.log(ds);
   
   });
   
}
    // if(event.target.tagName.AttributeName=='ION-ICON'){
    //     event.target.parentNode.remove();
    // }

});