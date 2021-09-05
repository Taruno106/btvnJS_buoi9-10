/**
 * Thêm nhân viên 
 */

//biến toàn cục
var dsnv = new DanhSachNhanVien();




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

    //B2: lưu thông tin vào lớp sinh viên
    var nv = new NhanVien(tk,hoTen,email,pass,ngaylam,luong,chucVu,gioLam);
    nv.tongLuong = nv.tinhTongLuong();
    nv.loaiNV = nv.xepLoaiNV();

    console.table(nv);

    
    //B3: Lưu sv vào danh sách sinh viên
    dsnv.themNhanVien(nv);
    console.log('mangnv', dsnv.mangNV);

    //lưu mangSV xuống localStorage
    setLocalStorage();

    // B4: Hiển thị table
    hienThiTable(dsnv.mangNV);
}