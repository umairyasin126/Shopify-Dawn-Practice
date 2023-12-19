
    document.addEventListener("DOMContentLoaded", function () {
      const backArrow = document.querySelector(".customerCare-inner .back-arrow");
      const customerCareNav = document.querySelector(".customerCare__Nav");
      const customerCareMainPageContent = document.querySelector(".customerCare__mainPageContent");
      const desktopHeading = document.querySelector(".customerCare-inner .desktop");
      const mobileHeading = document.querySelector(".customerCare-inner .mobile")
      const backToMenuLink = document.querySelector(".mainPageContent__backToMenu>a");
  
      backArrow.addEventListener("click", function () {
        customerCareNav.style.display = "block";
        customerCareMainPageContent.style.display = "none";
        desktopHeading.style.display = "block";
        mobileHeading.style.display = "none";
        backArrow.style.display = "none";
      });
  
      backToMenuLink.addEventListener("click", function (event) {
        event.preventDefault();
        customerCareNav.style.display = "block";
        customerCareMainPageContent.style.display = "none";
        desktopHeading.style.display = "block";
        mobileHeading.style.display = "none";
        backArrow.style.display = "none";
      });
    });
