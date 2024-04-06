const root = document.querySelector(".root");
const input = document.querySelector(".right>input");
const search = document.querySelector(".right>img");
const history = document.querySelector(".bottom>img");
const left = document.querySelector(".left");

let recent = [];
let count =1;
const root1 = document.querySelector(".root1");
search.addEventListener("click",()=>{
    if(input.value){
        if(root.getAttribute("class")==="all"){
            root.innerHTML+= `<div>User: ${input.value}</div>`;

        }
        else{
            root.innerHTML= `<div>User: ${input.value}</div>`;
            root.setAttribute("class","all");
        }
        recent.push(input.value)
        root1.innerHTML += `<button class="recent"><p> ${count}. ${recent[recent.length-1]}</p></button>`     
        count+=1;
        
    }
    else{
        root.innerHTML = "";
    }
    input.value="";
})

history.addEventListener("click",()=>{
    if(left.style.display=== "none"){
        left.style.display = "block";
    }
    else {
        left.style.display = "none"
    }
})