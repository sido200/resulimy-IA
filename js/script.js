const cat=document.querySelector(".cat") 
const cat_i=document.querySelector(".cat i") 
const sous_cat=document.querySelector(".sous-cat") 
cat.addEventListener('click',()=>{
   if(cat_i.classList.value==="fa-solid fa-caret-right"){
    cat_i.classList.remove("fa-caret-right")
    cat_i.classList.add("fa-caret-down")
    sous_cat.style.display="flex"
   }
   else{
    cat_i.classList.remove("fa-caret-down")
    cat_i.classList.add("fa-caret-right")
    sous_cat.style.display="none"
  
   }
})
let btn=document.querySelector('.fa-bars')
let items=document.querySelector('.ul')
btn.addEventListener('click',function(){
    items.classList.toggle('active-barre')
console.log("hi");
})