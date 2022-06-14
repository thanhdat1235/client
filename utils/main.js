// // const header = document.querySelector("header");
// // // const heightHeader = header.offsetHeight;

// // //event click active menu
// // const tagaHeader = document.querySelectorAll(
// //   "header .--container__header .main__header .main__header-nav .list__option-vuejs .option-vuejs a"
// // );
// // tagaHeader.forEach((taga) => {
// //   taga.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     tagaHeader.forEach((removeActive) => {
// //       removeActive.classList.remove("active");
// //     });
// //     taga.classList.add("active");
// //   });
// // });

// // //event click backtotop
// // const btnBackToTop = document.querySelector(
// //   "footer .--container__footer .backtotop"
// // );
// // btnBackToTop.addEventListener("click", (e) => {
// //   scrollTo({
// //     top: 0,
// //     behavior: "smooth",
// //   });
// // });

// // //scrollY > 2000px => show button backtotop
// // window.addEventListener("scroll", (e) => {
// //   let scrollY = window.pageYOffset;
// //   if (scrollY > 2000) {
// //     btnBackToTop.style.display = "flex";
// //   } else {
// //     btnBackToTop.style.display = "none";
// //   }
// // });

// // //nav menu
// // const navMenu = document.querySelector(
// //   "header .--container__header .main__header .main__header-nav-mobile .show__nav-menu"
// // );

// // //click menu mobile show nav menu
// // const iconMenuMobile = document.querySelector(
// //   "header .--container__header .main__header .main__header-nav-mobile .icon__menu-mobile"
// // );
// // iconMenuMobile.addEventListener("click", (e) => {
// //   iconMenuMobile.classList.toggle("active");
// //   navMenu.classList.toggle("active");
// // });

// // // var cellColumn = 3;
// // // function updateCell() {
// // //   if (tablet.matches) {
// // //     cellColumn = 2;
// // //     return cellColumn;
// // //   } else {
// // //     return;
// // //   }
// // // }
// // // function updateCellMobile() {
// // //   if (mobile.matches) {
// // //     cellColumn = 1;
// // //     return cellColumn;
// // //   } else {
// // //     return;
// // //   }
// // // }
// // // const tablet = window.matchMedia("(max-width: 993px)");
// // // const mobile = window.matchMedia("(max-width: 767px)");
// // // updateCell();
// // // updateCellMobile();
// // // console.log(cellColumn);
// // // //slider blog
// // // var elem2 = document.querySelector(".blog .--container__blog .blog__slider");
// // // var flkty2 = new Flickity(elem2, {
// // //   // options
// // //   cellAlign: "left",
// // //   contain: true,
// // //   // wrapAround: true,
// // //   prevNextButtons: false,
// // //   imagesLoaded: true,
// // //   groupCells: cellColumn,
// // // });

// // // const btnPrevSliderBlog = document.querySelector(
// // //   ".blog .--container__blog .btn__slider-blog .btn__prev"
// // // );
// // // btnPrevSliderBlog.addEventListener("click", () => {
// // //   flkty2.previous();
// // // });

// // // const btnNextSliderBlog = document.querySelector(
// // //   ".blog .--container__blog .btn__slider-blog .btn__next"
// // // );
// // // btnNextSliderBlog.addEventListener("click", () => {
// // //   flkty2.next();
// // // });

// // //event click menu mobile scroll to section
// // const navMenuMobile = document.querySelector(
// //   "header .container .main__header .main__header-nav-mobile .show__nav-menu"
// // );
// // const menuMobileOption = document.querySelectorAll(
// //   "header .--container__header .main__header .main__header-nav-mobile .show__nav-menu .list__option-vuejs .option-vuejs a"
// // );

// // menuMobileOption.forEach((tagaMenu, index) => {
// //   tagaMenu.addEventListener("click", (e) => {
// //     navMenuMobile.classList.remove("active");
// //     iconMenuMobile.classList.remove("active");
// //   });
// //   let href = tagaMenu.getAttribute("href");
// //   const className = href.replace("#", "");
// //   let classSection = document.querySelector("." + className);
// //   // sections.push(classSection);
// //   tagaMenu.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     let positionSection = classSection.offsetTop;
// //     window.scrollTo({
// //       top: positionSection - heightHeader,
// //       behavior: "smooth",
// //     });
// //   });
// // });
// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
//   const header = document.querySelector("header ");
//   // const heightHeader = header.offsetHeight;
//   // console.log(header);

//   const tagaHeader = document.querySelectorAll(
//     "header .--container__header .main__header .main__header-nav .list__option-vuejs .option-vuejs a"
//   );

//   // console.log(tagaHeader);

//   tagaHeader.forEach((taga) => {
//     taga.addEventListener("click", (e) => {
//       // console.log(123);
//       e.preventDefault();
//       tagaHeader.forEach((removeActive) => {
//         removeActive.classList.remove("active");
//       });
//       taga.classList.add("active");
//     });
//   });

//   const navMenu = document.querySelector(
//     "header .--container__header .main__header .main__header-nav-mobile .show__nav-menu"
//   );

//   //click menu mobile show nav menu
//   const iconMenuMobile = document.querySelector(
//     "header .--container__header .main__header .main__header-nav-mobile .icon__menu-mobile"
//   );
//   iconMenuMobile.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(234);
//     iconMenuMobile.classList.toggle("active");
//     navMenu.classList.toggle("active");
//   });

//   // Scroll to element
//   const navMenuMobile = document.querySelector(
//     "header .container .main__header .main__header-nav-mobile .show__nav-menu"
//   );
//   // console.log("navMenuMobile", navMenuMobile);

//   // const menuMobileOption = document.querySelectorAll(
//   //   "header .--container__header .main__header .main__header-nav-mobile .show__nav-menu .list__option-vuejs .option-vuejs p"
//   // );
//   // console.log("menuMobileOption", menuMobileOption);
//   // menuMobileOption.forEach((tagaMenu, index) => {
//   //   tagaMenu.addEventListener("click", (e) => {
//   //     navMenuMobile.classList.remove("active");
//   //     iconMenuMobile.classList.remove("active");
//   //   });
//   //   let href = tagaMenu.getAttribute("href");
//   //   console.log(href);
//   //   const className = href.replace("/#", "");

//   //   // console.log(className);
//   //   let classSection = document.querySelector("." + className);
//   //   // sections.push(classSection);
//   //   tagaMenu.addEventListener("click", (e) => {
//   //     e.preventDefault();
//   //     let positionSection = classSection.offsetTop;
//   //     window.scrollTo({
//   //       top: positionSection,
//   //       behavior: "smooth",
//   //     });
//   //   });
//   // });
// });
