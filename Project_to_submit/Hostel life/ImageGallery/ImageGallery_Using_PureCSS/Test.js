const imageUrls = [
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
  
  function createImageGallery(images) {
    const imageGrid = document.getElementById("imageGrid");
  
    images.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Image";
      imageGrid.appendChild(img);
    });
  }
  
  createImageGallery(imageUrls);
  