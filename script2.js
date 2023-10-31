window.addEventListener("load",()=> {

    const form= document.getElementById("multi-step-form");
    const formContainerBox = document.getElementById("form-container-box");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const stepGroup1 = document.getElementById("step-group-1");
    const stepGroup2 = document.getElementById("step-group-2");
    const stepGroup3 = document.getElementById("step-group-3");
    
    const stepNext1 = document.getElementById("step-next-1");
    const stepNext2 = document.getElementById("step-next-2");
    const stepNext3 = document.getElementById("step-next-3");

    const stepPrev1 = document.getElementById("step-prev-1");
    const stepPrev2 = document.getElementById("step-prev-2");


    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    });

    stepNext1.addEventListener("click",()=>{
        stepGroup1.style.display="none";
        stepGroup2.style.display="block";
        step2.classList.add("active");
    });
    

    stepNext2.addEventListener("click",(e)=>{
        stepGroup3.style.display="block";
        step2.style.display="none";
        step3.classList.add("active");
    });
   

    stepPrev1.addEventListener("click",()=>{
        stepGroup1.style.display="block";
        stepGroup2.style.display="none";
        step2.classList.remove("active");
    });

    
    stepPrev2.addEventListener("click",()=>{
        stepGroup3.style.display="none";
        stepGroup2.style.display="block";
        step3.classList.remove("active");
    });
    
})


// Add a click event listener to the "Scroll to Top" button
document.getElementById("scrollToTop").addEventListener("click", function() {
    // Scroll to the top of the page with a smooth animation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





