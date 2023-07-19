import Mobile from "../Js/mobile.js";

const getElement = (selector) => document.querySelector(selector);

// get info from user
const layThongTinDienThoai = () => {
  let mobile = {};
  const elements = document.querySelectorAll(
    "#mobileForm input, #mobileForm select, #mobileForm textarea"
  );
  elements.forEach((ele) => {
    const { name, value } = ele;
    mobile[name] = value;
  });
  // console.log("element: ", elements);

  const {
    maSP,
    tenSP,
    manHinh,
    cameraSau,
    cameraTruoc,
    loai,
    giaSP,
    hinhSP,
    moTa,
  } = mobile;

  return new Mobile(
    maSP,
    tenSP,
    manHinh,
    cameraSau,
    cameraTruoc,
    loai,
    giaSP,
    hinhSP,
    moTa
  );
};
// tạo 1 đối tượng mobile từ class Mobile

getElement("#btnThemSP").onclick = () => {
  if (checkValid()) return alert("Vui lòng nhập đầy đủ thông tin!");

  const mobile = layThongTinDienThoai();
  const elements = document.querySelectorAll(
    ".mobileDetail li span, .mobileDetail li img, .mobileDetail li p"
  );

  elements.forEach((item) => {
    const name = item.getAttribute("name");
    if (name === "hinhSP") {
      item.src = mobile[name];
    } else if (name === "loai") {
      item.innerHTML = mobile.mapLoai();
    } else {
      item.innerHTML = mobile[name];
    }
  });
};

// Validation--------------------------------------------------------------

const checkEmty = (value, alert, name) => {
  if (!value) {
    if (alert === "#invalidLoai") {
      console.log('1111111111');
      getElement(alert).innerHTML = "Chọn loại";
    } else {
      getElement(alert).innerHTML = name;
    }
  } else {
    getElement(alert).innerHTML = "";
  }
};

//Kiểm tra name , img không được bỏ trống
getElement("#mobileID").onblur = function () {
  var name = getElement("#mobileID").placeholder;
  var value = getElement("#mobileID").value;
  var alert = "#invalidID";
  checkEmty(value, alert, name);
};
getElement("#mobileName").onblur = function () {
  var name = getElement("#mobileName").placeholder;
  var value = getElement("#mobileName").value;
  var alert = "#invalidTen";
  checkEmty(value, alert, name);
};
getElement("#screen").onblur = function () {
  var name = getElement("#screen").placeholder;
  var value = getElement("#screen").value;
  var alert = "#invalidScreen";
  checkEmty(value, alert, name);
};
getElement("#backCamera").onblur = function () {
  var name = getElement("#backCamera").placeholder;
  var value = getElement("#backCamera").value;
  var alert = "#invalidBC";
  checkEmty(value, alert, name);
};

//Kiểm tra giá không được bỏ trống, phải là số
getElement("#frontCamera").onblur = function () {
  var name = getElement("#frontCamera").placeholder;
  var value = getElement("#frontCamera").value;
  var alert = "#invalidFC";
  checkEmty(value, alert, name);
};
//Kiểm tra desc không được bỏ trống,
getElement("#loai").onblur = function () {
  var name = getElement("#loai").placeholder;
  var value = getElement("#loai").value;
  var alert = "#invalidLoai";
  checkEmty(value, alert, name);
};

//Kiểm tra screen, backCamera, frontCamera không được bỏ trống
getElement("#giaSP").onblur = function () {
  var name = getElement("#giaSP").placeholder;
  var value = getElement("#giaSP").value;
  var alert = "#invalidGia";
  checkEmty(value, alert, name);
};

getElement("#hinhSP").onblur = function () {
  var name = getElement("#hinhSP").placeholder;
  var value = getElement("#hinhSP").value;
  var alert = "#invalidHinh";
  checkEmty(value, alert, name);
};

getElement("#moTa").onblur = function () {
  var name = getElement("#moTa").placeholder;
  var value = getElement("#moTa").value;
  var alert = "#invalidMoTa";
  checkEmty(value, alert, name);
};

function checkValid() {
  var id = getElement("#mobileID").value;
  var name = getElement("#mobileName").value;
  var screen = getElement("#screen").value;
  var backCamera = getElement("#backCamera").value;
  var frontCamera = getElement("#frontCamera").value;
  var loai = getElement("#loai").value;
  var giaSP = getElement("#giaSP").value;
  var hinhSP = getElement("#hinhSP").value;
  var moTa = getElement("#moTa").value;

  if (
    !id ||
    !name ||
    !screen ||
    !backCamera ||
    !frontCamera ||
    !loai ||
    !giaSP ||
    !hinhSP ||
    !moTa
  ) {
    return true;
  }
}
