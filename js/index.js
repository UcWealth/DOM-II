// Your code goes here
let home = document.querySelector(".home");
home.addEventListener('dblclick', ($event) => {
    setTimeout(() => {
        $event.target.style.backgroundColor = "lime";
    }, 500)
    
});

let navhover = document.querySelector('.nav');
navhover.addEventListener('mouseover', (event) => {
    event.target.style.color = "red";
});
navhover.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});

let imageAnimate = document.querySelectorAll(".img-content");
for(const img of imageAnimate) {
        img.addEventListener('mouseenter', ($e) => {
            $e.target.style.transform = 'scale(1.1)';
            $e.target.style.transition = 'transform 0.5s';
        });

        img.addEventListener('mouseleave', (e) => {
            e.target.style.transform = '';
            e.target.style.transition = '';
        });

        let body = document.getElementByTagName("body").addEventListener('resize', (e) => {
            e.target.style.color = 'orange';
        });
    } 
