// let gp = document.querySelector(".grp");
// // let pr = document.querySelector(".pr");
// let chil = document.querySelector(".chil");

// gp.addEventListener("mousemove", (e) => {
//   chil.style.top = e.clientY + "px";
//   chil.style.left = e.clientX + "px";
// //   console.log(e);
// });

let gr = document.querySelector(".gr");
let pr = document.querySelector(".pr");
let chil = document.querySelector(".chil");

chil.addEventListener("click", (e) => {
    // e.stopPropagation()
  console.log("Child clickked");
});

pr.addEventListener(
  "click",
  (e) => {
    //   e.stopPropagation();
    console.log("Parent");
  },
  { capture: true }
);

gr.addEventListener("click", (e) => {
    // e.stopPropagation()
    console.log("GrandParent");
  },
  { capture: true }
);

// document.addEventListener("click", () => {
//   console.log("Document");
// });

// gr.addEventListener("dblclick", () => {
//   console.log("Double clicked");
// });

// gr.addEventListener("mouseenter", () => {
//   console.log("Mouse entered");
// });
// gr.addEventListener("mouseleave", () => {
//   console.log("Mouse leaved");
//   chil.style.top = 0;
//   chil.style.left = 0;
// });

// gr.addEventListener("mousemove", (e) => {
//   chil.style.top = e.clientY + "px";
//   chil.style.left = e.clientX + "px";
//   console.log(e);
// });