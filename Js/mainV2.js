import Mobile from "../Js/mobileList.js";
import { DOMAIN } from "../Js/api.js";
const getElement = (selector) => {
  return document.querySelector(selector);
};

let isValidate = false;
console.log("tests");

const getMobileList = () => {
  const promise = axios({
    url: DOMAIN,
    method: "GET",
  });

  promise
    .then((result) => {
      renderTable(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getMobileList();

const renderTable = (arr) => {
  let htmlContent = "";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    htmlContent += `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.screen}</td>
<td>${item.backCamera}</td>
<td>${item.frontCamera}</td>
<td>${item.desc}</td>
<td>${item.type === "loai1" ? "Iphone" : "Samsung"}</td>
<td>${item.price}</td>
<td>
<image style="width: 100px; height: 100px" src="${item.image}" ></image>
</td>

<td>
<button class='btn btn-danger' onclick="deleteMobile(${
      item.id
    })">Delete</button>
<button class='btn btn-success nl-3' data-toggle="modal" data-target = "#exampleModal" onclick="editMobile(${
      item.id
    })"> Edit </button>
</td>
</tr>
`;
  }

  getElement("#tbodyMobile").innerHTML = htmlContent;
};

const layThongTinDienThoai = () => {
  const elements = document.querySelectorAll(
    "#mobileForm input, #mobileForm select, #mobileForm textarea"
  );

  let mobile = [];
  elements.forEach((ele) => {
    const { id, value } = ele;
    mobile[id] = value;
  });

  const { name, screen, backCamera, frontCamera, desc, type, image, price } =
    mobile;
  return new Mobile(
    name,
    screen,
    backCamera,
    frontCamera,
    desc,
    type,
    image,
    price
  );
};

// ẩn btn cập nhật khi click vào thêm sp
getElement("#btnThem").onclick = () => {
  // ẩn btn cập nhật
  getElement("#btnCapNhat").style.display = "none";
  getElement("#btnThemSP").style.display = "inline-block";
};

// gọi api thêm mobile vào DB
getElement("#btnThemSP").onclick = () => {
  console.log("tests");

  if (checkValid()) return alert("Vui lòng nhập đầy đủ thông tin!");
  // lấy thông tin san pham từ input
  const mobile = layThongTinDienThoai();

  // call API thêm sp
  const promise = axios({
    url: DOMAIN,
    method: "POST",
    data: mobile,
  });

  promise
    // thêm mới thành công
    .then((result) => {
      // get lại danh sách sản phẩm
      getMobileList();
      // đóng modal sau khi thêm thành công

      // xóa attribute data-id
    })

    // thêm mới thất bại
    .catch((err) => {
      console.log("err: ", err);
    });
  getElement("#mobileForm").reset();
};

// xóa món ăn
window.deleteMobile = (id) => {
  // call api xóa mobile
  const promise = axios({
    url: `${DOMAIN}/${id}`,
    method: "DELETE",
  });

  promise
    // xóa thành công
    .then(() => {
      getMobileList();
      // get lại danh sách mobile sau khi xóa thành công
      // getMobileList();
    })
    // xóa thất bại
    .catch((err) => {
      console.log(err);
    });
};
// edit mobile
window.editMobile = (id) => {
  // ẩn btn thêm sp
  getElement("#btnThemSP").style.display = "none";

  // show lại btn cập nhật
  getElement("#btnCapNhat").style.display = "inline-block";

  // set data-id vào btn cập nhật
  getElement("#btnCapNhat").setAttribute("data-id", id);

  console.log(id);

  // call api lấy thông tin sp
  const promise = axios({
    url: `${DOMAIN}/${id}`,
    method: "GET",
  });
  promise
    .then((result) => {
      let sp = result.data;
      // const elements = document.querySelectorAll(
      //   "#mobileForm input, #mobileForm select, #mobileForm textarea"
      // );
      getElement("#name").value = sp.name;
      getElement("#screen").value = sp.screen;
      getElement("#backCamera").value = sp.backCamera;
      getElement("#frontCamera").value = sp.frontCamera;
      getElement("#desc").value = sp.desc;
      getElement("#type").value = sp.type;
      getElement("#price").value = sp.price;
      getElement("#image").value = sp.image;
    })
    .catch((er) => {
      console.log(err);
    });
};

getElement("#btnCapNhat").onclick = () => {
  console.log("test");
  if (checkValid()) return;
  // lấy thông tin mobile từ input
  const mobile = layThongTinDienThoai();
  //  lấy id thông qua attribute data-id đã set ở hàm editMobile
  const id = getElement("#btnCapNhat").getAttribute("data-id");
  // call api cap nhat DB
  const promise = axios({
    url: `${DOMAIN}/${id}`, // id từ đâu chưa biết
    method: "PUT",
    data: mobile,
  });
  promise.then(() => {
    getMobileList();
  });
};
// nutation: Create, edit, delete

// Validation--------------------------------------------------------------

const checkEmty = (value, alert, name) => {
  if (!value) {
    if (alert === "#invalidLoai") {
      getElement(alert).innerHTML = "Chọn loại";
    } else {
      getElement(alert).innerHTML = name;
    }
  } else {
    getElement(alert).innerHTML = "";
  }
};

//Kiểm tra name , img , thương hiệu không được bỏ trống
getElement("#name").onblur = function () {
  let name = getElement("#name").placeholder;
  let value = getElement("#name").value;
  let alert = "#invalidTen";
  checkEmty(value, alert, name);
};
getElement("#image").onblur = function () {
  let name = getElement("#image").placeholder;
  let value = getElement("#image").value;
  let alert = "#invalidHinh";
  checkEmty(value, alert, name);
};
getElement("#type").onblur = function () {
  let name = getElement("#type").placeholder;
  let value = getElement("#type").value;
  let alert = "#invalidLoai";
  checkEmty(value, alert, name);
};

//Kiểm tra giá không được bỏ trống, phải là số
getElement("#price").onblur = function () {
  let name = getElement("#price").placeholder;
  let value = getElement("#price").value;
  let alert = "#invalidGia";
  checkEmty(value, alert, name);
};
//Kiểm tra desc không được bỏ trống,
getElement("#desc").onblur = function () {
  let name = getElement("#desc").placeholder;
  let value = getElement("#desc").value;
  let alert = "#invalidMoTa";
  checkEmty(value, alert, name);
};

//Kiểm tra screen, backCamera, frontCamera không được bỏ trống
getElement("#backCamera").onblur = function () {
  let name = getElement("#backCamera").placeholder;
  let value = getElement("#backCamera").value;
  let alert = "#invalidBackCamera";
  checkEmty(value, alert, name);
};

getElement("#frontCamera").onblur = function () {
  let name = getElement("#frontCamera").placeholder;
  let value = getElement("#frontCamera").value;
  let alert = "#invalidFrontCamera";
  checkEmty(value, alert, name);
};

getElement("#screen").onblur = function () {
  let name = getElement("#screen").placeholder;
  let value = getElement("#screen").value;
  let alert = "#invalidMan";
  checkEmty(value, alert, name);
};

function checkValid() {
  let name = getElement("#name").value;
  let price = getElement("#price").value;
  let screen = getElement("#screen").value;
  let backCamera = getElement("#backCamera").value;
  let frontCamera = getElement("#frontCamera").value;
  let img = getElement("#image").value;
  let desc = getElement("#desc").value;
  let type = getElement("#type").value;

  if (
    !name ||
    !price ||
    !screen ||
    !backCamera ||
    !frontCamera ||
    !img ||
    !desc ||
    !type
  ) {
    return true;
  }
}
