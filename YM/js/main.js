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

// let data = {
    
// }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send(
//       'service_8x362kb',
//       'template_i9eeiy3',
//       toSend,
//       '3J4vCZ-g9GKE3tFLQ'
//     )
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       })
//       .catch((err) => {
//         console.log('FAILED...', err);
//       });
//     console.log(toSend)
//     window.scroll(0,0);
//   };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    
  };
