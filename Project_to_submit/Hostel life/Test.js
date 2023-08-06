// const imageUrls = [
//     "./testImage/image1.png",
//     "./testImage/image2.png",
//     "./testImage/image3.png",
//     "./testImage/image4.png",
//     "./testImage/image5.png",
//     "./testImage/day1.png",
//     "./testImage/day2.png",
//     "./testImage/day3.png",
//     "./testImage/day4.png",
//     "./testImage/day5.png",
    
//   ];
  
//   function createImageGallery(images) {
//     const elm = document.getElementById("Facilities_image");
  
//     images.forEach((imageUrl) => {
//         const colItem = document.createElement("div");
//         colItem.classList.add("col-sm-12 col-md-6 col-lg-4");
//         const img = document.createElement("img");
//         img.classList.add("img-thumbnail");
//         img.src = imageUrl;
//         img.alt = "Image";
//         colItem.appendChild(img);
//         elm.appendChild(colItem);

//     });
//   }
  
//   createImageGallery(imageUrls);

  // Image URLs for dynamic element addition
const dynamicImageUrls = [
    "./testImage/image1.png",
    "./testImage/image2.png",
    "./testImage/image3.png",
    "./testImage/image4.png",
    "./testImage/image5.png",
    "./testImage/day1.png",
    "./testImage/day2.png",
    "./testImage/day3.png",
    "./testImage/day4.png",
    "./testImage/day5.png",
  ];
  
  // Function to add dynamic elements
  function addDynamicElements() {
    const facilitiesImage = document.getElementById("Facilities_image");
  
    dynamicImageUrls.forEach((imageUrl) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-sm-12", "col-lg-6");
      colDiv.style.marginBottom = "15px"; // Add margin between the columns
      const img = document.createElement("img");
      img.src = imageUrl;
      img.classList.add("img-thumbnail");
      img.alt = "Image";
  
      colDiv.appendChild(img);
      facilitiesImage.appendChild(colDiv);
    });
  }
  
  // Call the function to add dynamic elements when the page loads
  addDynamicElements();
  
  