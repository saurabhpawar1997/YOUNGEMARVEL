//variable 

const closeBtn = document.querySelector(".close");
const containerMediaMobile = document.querySelector(".container-media-mobile");
const icon = document.querySelector(".close i");
const links = document.querySelectorAll(".links li a");
const solutions = document.querySelector(".solutions");
const number = document.querySelectorAll(".counter .number");
const scrollTopBtn = document.querySelector(".scrollup");



//nav toggle
closeBtn.addEventListener("click", function () {
    containerMediaMobile.classList.toggle("show");
    icon.classList.toggle("fa-window-close");
})


//window scroll counter 
window.addEventListener("scroll", function () {
    let solutionOffest = solutions.offsetTop;
    let winScroll = this.scrollY;
    if (winScroll >= solutionOffest - 150) {
        // init counter 
        number.forEach((item) => {
            let i = 0;
            let countDown = this.setInterval(function () {
                i++;
                item.textContent = i;
                if (i == item.getAttribute("data-number")) {
                    clearInterval(countDown);
                }
            }, 10)
        })
    }
})
// Show Scroll Up Btn
window.onscroll = () => {
    if (this.scrollY > 300) {
        scrollTopBtn.style.display = "block"
    } else {
        scrollTopBtn.style.display = "none"
    }
}
scrollTopBtn.onclick = () => {
    window.scrollTo(0, 0)

}


// Syinc Links With Section
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let attrLink = link.getAttribute("data-section");
        let classSection = `.${attrLink}`;
        let offsetSection = document.querySelector(classSection).offsetTop;
        window.scrollTo(10, offsetSection);

        // Handle Class Active
        links.forEach(item => {
            item.parentElement.classList.remove("active")
        })
        link.parentElement.classList.add("active")
    })
})


function sendMail(e){
    e.preventDefault();
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    const serviceID = "service_6rkjj4x";
    const templateID = "template_hefk22a";

    emailjs
    .send(serviceID, templateID,params)
    .then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your mail send successfully!");
        window.scrollTo(0, 0)
    })
    .catch((err)=>{
        console.log(err);
        alert("error");
    })
}

