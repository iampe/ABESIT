// const imageUrls = [
//     "../Image/image1.png",
//     "../Image/image2.png",
//     "../Image/image3.png",
//     "../Image/image4.png",
//     "../Image/image5.png",
//     "../Image/day1.png",
//     "../Image/day2.png",
//     "../Image/day3.png",
//     "../Image/day4.png", 
//     "../Image/day5.png",
    
//   ];
  
//   function createImageGallery(images) {
//     const imageGrid = document.getElementById("imageGrid");
  
//     images.forEach((imageUrl) => {
//       const img = document.createElement("img");
//       img.src = imageUrl;
//       img.alt = "Image";
//       imageGrid.appendChild(img);
//     });
//   }
  
//   createImageGallery(imageUrls);
  const dynamicImageUrls = [
    "../Image/canteen1.jpg",
    "../Image/entry.jpg",
    "../Image/mess1.jpg",
    "../Image/power.jpg",
    "../Image/hostel1.jpg",
    "../Image/residence.jpg",
    "../Image/canteen2.jpg", 
    "../Image/mess3.jpg",
    "../Image/acRoom.jpg",
    "../Image/wifi.jpg",
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
  
  
  