//khai báo lớp đối tượng nhân viên

function NhanVien(tk, hoTen, email, mk, ngaylam, luong, chucVu, gioLam){
    //thuộc tính
    this.taiKhoan = tk;
    this.hoTenNV = hoTen;
    this.email = email;
    this.matKhau = mk;
    this.ngayLam = ngaylam;
    this.luongCoBan = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

    this.tongLuong = 0;
    this.loaiNV = "";

    //phương thức
    this.tinhTongLuong = function(){
        switch (this.chucVu){
            case "Sếp":
                this.tongLuong = this.luongCoBan * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan * 2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan;
                break;
            default:
                this.tongLuong = 0;
        }
        return this.tongLuong;
    }

    this.xepLoaiNV = function(){
        if (192 <= this.gioLam){
            this.loaiNV = "Xuất sắc";
        } else if (176 <= this.gioLam && this.gioLam < 192){
            this.loaiNV = "Giỏi";
        } else if (160 <= this.gioLam && this.gioLam < 176){
            this.loaiNV = "Khá";
        } else if (0 <= this.gioLam && this.gioLam < 160){
            this.loaiNV = "Trung bình";
        } else {
            this.loaiNV = "";
        }
        return this.loaiNV;
    }

}