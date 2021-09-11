//khai báo lớp đối tượng DanhSachNhanVien 

function DanhSachNhanVien(){
    //thuộc tính
    this.mangNV = [];

    //phương thức
    this.themNhanVien = function(nv){
        this.mangNV.push(nv);
    }

    this.timViTri = function(tk){
        var viTri = -1;
        this.mangNV.map(function(item,index){
        //item này chính là 1 nv trong mảng
        //index: vị trí của ptu trong mảng
            if (item.taiKhoan == tk){
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaNhanVien = function(tk){
        var viTri = this.timViTri(tk);
        if (viTri >= 0){
            this.mangNV.splice(viTri,1);
        } else {
            console.log("Không tìm được");
        }
    }

    this.capNhatNhanVien = function(nv){
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri >= 0){
            this.mangNV[viTri] = nv;
        } else {
            console.log("Không tìm được");
        }
    }
}

DanhSachNhanVien.prototype.timKiem = function(tuKhoaTK){
    var mangKQ = [];
    //chuyển tuKhoaTK sang kiểu thường
    var lowerTK = tuKhoaTK.trim().toLowerCase();
    this.mangNV.map(function(item,index){
        var tenThuong = item.loaiNV.trim().toLowerCase();
        var kq = tenThuong.indexOf(lowerTK);
        if (kq >= 0){
            mangKQ.push(item);
        }
    });
    return mangKQ;
}

