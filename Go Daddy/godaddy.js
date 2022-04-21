

// accordian
const faq=document.querySelectorAll(".faq");

faq.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})
 

// number dropdown

let d=document.querySelector(".number_dropdown")
document.body.addEventListener("click",()=>{
    if(d.classList.contains('drop')){
        d.classList.toggle("drop");
    }
})
document.querySelector(".fa-solid").addEventListener("click",(e)=>{
    e.stopPropagation();
    d.classList.toggle("drop")
})
document.querySelector(".fa-solid   ").addEventListener("click",()=>{
    if(classList.contains('drop')){
         e.stopPropagation();
        classList.toggle("drop")
    }
   
    
})

// signin dropdown
let s=document.querySelector(".signin")
document.body.addEventListener("click",()=>{
if(s.classList.contains('sign')){
    s.classList.toggle("sign");
}
})

document.querySelector(".sig").addEventListener("click",(e)=>{
    e.stopPropagation();
    s.classList.toggle("sign")
})

// //////////domain navbar dropdown////////////////

let domain=document.querySelector(".maindomain_drop")
document.body.addEventListener("click",()=>{
    if(domain.classList.contains("domain_drop")){
        domain.classList.toggle("domain_drop")
    }
})
// document.body.addEventListener("click",()=>{
//     if(classList.contains("domain_drop")){
//         classList.toggle("domain_drop")
//     }
// })
// document.body.addEventListener("click",()=>{
//     if(domain.classList.contains("domain_drop")){
//         domain.classList.toggle("domain_drop")
//     }
// })

document.querySelector(".domain").addEventListener("click",(e)=>{
    e.stopPropagation();
    domain.classList.toggle("domain_drop")
    
})


// carosal section

var btn1=document.querySelector(".left_btn");
var btn2=document.querySelector(".right_btn");
var allcard=document.querySelector(".carosuel1");

var count=0;

btn1.addEventListener("click",()=>{
    count+=10;
    if(count>0){
        count=0;
    }
    allcard.style.transform=`translate(${count}%)`;
    allcard.style.transition="all ease 0.5s"

})

btn2.addEventListener("click",()=>{
    count-=10;
    if(count<-70){
        count=-70;
    }
    allcard.style.transform=`translate(${count}%)`;
    allcard.style.transition="all ease 0.5s"
    // allcard.style.color="darkgrey"

})


// vedio section

document.querySelector(".icon").addEventListener("click",()=>{
    console.log("gchggvjh")
    document.querySelector(".iframe").classList.toggle("iframe_toggle");
})

document.querySelector(".close_btn").addEventListener("click",()=>{
    document.querySelector('.iframe').classList.toggle("iframe_button_toggle")
})