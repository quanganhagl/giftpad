//animation on scroll starts
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-shown");
    } else {
      entry.target.classList.remove("is-shown");
    }
  });
});

const hiddenElements = document.querySelectorAll(".is-hidden");
hiddenElements.forEach((el) => observer.observe(el));
//animation on scroll ends

// autofocus quantity input for each cart course starts
// import myJson from "../../../_data/data.json" assert { type: "json" };

// myJson.courses.forEach((course) => {
//   document
//     .getElementById("coursebtn" + course.id)
//     .addEventListener("click", () => {
//       document.getElementById("quantity" + course.id).focus();
//     });
// });

// autofocus quantity input for each cart course ends

//validate form starts
// $(document).ready(function () {
//   $("#quantityForm").validate({
//     onfocusout: function (element) {
//       this.element(element);
//       if (!this.element(element)) {
//         $(".c-feedback__pleasecheck").addClass("is-active");
//       } else {
//         $(".c-feedback__pleasecheck").removeClass("is-active");
//       }
//     },
//     errorClass: "c-feedback__error",
//     rules: {
//       quantity: {
//         required: true,
//         number: true,
//       }
//     },
//     messages: {

//       phone: {
//         required: "数量を入力してください",
//         number: "数量を入力してください",
//       }
//     },
//   });
// });

// $(".c-secbtn--feedback").on("click", function () {
//   $("#contactForm").valid();
//   if (!$("#contactForm").valid()) {
//     $(".c-feedback__pleasecheck").addClass("is-active");
//   } else {
//     $(".c-feedback__pleasecheck").removeClass("is-active");
//   }
// });
//validate form ends
