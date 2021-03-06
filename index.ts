interface ImageOptions {
  size: "big" | "medium" | "small";
  imageSize: string;
  margin: string;
}

function imagesizechanger(options: ImageOptions) {
  const images = document.querySelectorAll(".images");

  switch (options.size) {
    case "big":
      options.imageSize = "100%";
      break;
    case "medium":
      options.imageSize = "60%";
      break;
    case "small":
      options.imageSize = "20%";
      break;
    default:
      options.imageSize = "30%";
      break;
  }

  images.forEach((image: any) => {
    image.style.width = options.imageSize;
    image.style.display = "block";

    if (options.margin) {
      image.style.margin = "20px auto";
    }
  });
}

module.exports.imagesizechanger = imagesizechanger;
