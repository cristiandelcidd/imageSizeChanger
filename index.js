function imagesizechanger(options) {
  const images = document.querySelectorAll(".images");

  switch (options.size) {
    case "big":
      options.imageSize = "300px";
      break;
    case "medium":
      options.imageSize = "100px";
      break;
    case "small":
      options.imageSize = "30px";
      break;
    default:
      options.imageSize = "50px";
      break;
  }

  images.forEach((image) => {
    image.style.width = options.imageSize;

    if (options.margin) {
      image.style.margin = "20px auto";
    }
  });
}

module.exports.imagesizechanger = imagesizechanger;
