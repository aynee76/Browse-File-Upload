// const upload = document.querySelector("input");
// const image = document.querySelector("img");
// const closes = document.querySelector(".close");

// upload.addEventListener("change", (e) => {
//     uploadFile(e);
// });

// function uploadFile() {
//     image.classList.add("active");
//     closes.classList.add("exit");


//     if(e.target.files && e.target.files[0]) {
//         image.src = URL.createObjectURL(e.target.files[0]);

//         closes.addEventListener("click", () => {
//             image.classList.toggle("active");
//             closes.classList.toggle("exit");
//         })
//     }
// }


const upload = document.querySelector("input");
const image = document.querySelector("img");
const closes = document.querySelector(".close");

upload.addEventListener("change", (e) => {
    uploadFile(e);
});

function uploadFile(e) {
    image.classList.add("active");
    closes.classList.add("exit");

    if(e.target.files && e.target.files[0]) {
        image.src = URL.createObjectURL(e.target.files[0]);
    }
}

closes.addEventListener("click", () => {
    image.classList.toggle("active");
    closes.classList.toggle("exit");
});
