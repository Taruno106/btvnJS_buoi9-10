/**
 * Thêm nhân viên 
 */

//biến toàn cục
var dsnv = new DanhSachNhanVien();
var nv = new NhanVien();



//Hàm rút gọn cú pháp document.getElementById
function getELE(id){
    //id: kiểu string
    return document.getElementById(id);
}

function setLocalStorage(){
    //chuyển dsnv.mangNV tu kiểu mảng sang kiểu Json
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}


//lấy data từ LocalStorage để đẩy lên UI
function getLocalStorage(){
    //getItem sẽ lấy dữ liệu lên là JSON => chuyển từ JSON sang kiểu mảng để hiển thị trên UI
    if (localStorage.getItem("DSNV") != null){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}
getLocalStorage();



function hienThiTable(mang){

    var content = "";

    //item: 1 nhân viên; index: vị trí của pt trong mảng
    mang.map(function(item,index){
        content += `<tr>
        <td>${item.taiKhoan}</td>
        <td>${item.hoTenNV}</td>
        <td>${item.email}</td>
        <td>${item.ngayLam}</td>
        <td>${item.chucVu}</td>
        <td>${item.tongLuong}</td>
        <td>${item.loaiNV}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')" >Xóa</button>
        </td>
        <td>
        <button id="btnXem" type="button" class="btn btn-primary" onclick="xemChiTiet('${item.taiKhoan}')" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>

        </tr>`;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function themNV(){
    //B1: lấy thông tin từ form
    var tk = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    console.log(tk,hoTen,email,pass,ngaylam,luong,chucVu,gioLam);

    //validation

    //B2: lưu thông tin vào lớp nhân viên
    var nv = new NhanVien(tk,hoTen,email,pass,ngaylam,luong,chucVu,gioLam);
    nv.tongLuong = nv.tinhTongLuong();
    nv.loaiNV = nv.xepLoaiNV();

    console.table(nv);

    
    //B3: Lưu sv vào danh sách nhân viên
    dsnv.themNhanVien(nv);
    console.log('mangnv', dsnv.mangNV);

    //lưu mangSV xuống localStorage
    setLocalStorage();

    // B4: Hiển thị table
    hienThiTable(dsnv.mangNV);
}

/**
 * xóa nhân viên
 * 
 */


function xoaNV(tk){
    dsnv.xoaNhanVien(tk);

    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}

/**
 * cập nhật nhân viên
 * 
 */



function xemChiTiet(tk){
    var viTri = dsnv.timViTri(tk);//tìm ra vị trí của nv
    var nv = dsnv.mangNV[viTri];//truy xuất vị trí của nv đó trong mảng => ta tìm được ptu mangNV[viTri] và gắn cho biến nv
    getELE("tknv").disabled = true;

    getELE("tknv").value = nv.taiKhoan;//truy xuất thuộc tính taiKhoan của lớp nv 
    getELE("name").value = nv.hoTenNV;
    getELE("email").value = nv.email;
    getELE("password").value = nv.matKhau;
    getELE("datepicker").value = nv.ngayLam;
    getELE("luongCB").value = nv.luongCoBan;
    getELE("chucvu").value = nv.chucVu;
    getELE("gioLam").value = nv.gioLam;
}

function capNhatNV(){
    //B1: lấy thông tin từ form
    var tk = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    console.log(tk,hoTen,email,pass,ngaylam,luong,chucVu,gioLam);

    //B2: lưu thông tin vào lớp nhân viên
    var nv = new NhanVien(tk,hoTen,email,pass,ngaylam,luong,chucVu,gioLam);
    nv.tongLuong = nv.tinhTongLuong();
    nv.loaiNV = nv.xepLoaiNV();
    
    
    dsnv.capNhatNhanVien(nv);
    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}

/**
 * Reset
 */
 function resetForm() {
    getELE("formQLNV").reset();
    getELE("tknv").disabled = false;
}









