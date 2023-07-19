class Mobile {
  constructor(name, screen, backCamera, frontCamera, desc, type, image, price) {
    this.name = name;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.desc = desc;
    this.type = type;
    this.image = image;
    this.price = price;
  }
  mapLoai() {
    // if (this.loai === 'loai1') return Iphone
    // if (this.loai === 'loai2') return Samsung

    return this.loai === "loai1" ? "Iphone" : "Samsung";
  }
}

export default Mobile;
