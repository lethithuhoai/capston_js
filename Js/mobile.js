class Mobile {
  constructor(
    _maSP,
    _tenSP,
    _manHinh,
    _cameraTruoc,
    _cameraSau,
    _loai,
    _giaSP,
    _hinhSP,
    _moTa
  ) {
    this.maSP = _maSP;
    this.tenSP = _tenSP;
    this.manHinh = _manHinh;
    this.cameraTruoc = _cameraTruoc;
    this.cameraSau = _cameraSau;
    this.loai = _loai;
    this.giaSP = _giaSP;
    this.hinhSP = _hinhSP;
    this.moTa = _moTa;
  }

  mapLoai() {
    // if (this.loai === 'loai1') return Iphone
    // if (this.loai === 'loai2') return Samsung

    return this.loai === "loai1" ? "Iphone" : "Samsung";
  }
}

export default Mobile;
