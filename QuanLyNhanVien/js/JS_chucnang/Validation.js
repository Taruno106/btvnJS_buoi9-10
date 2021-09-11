//tạo lớp đối tượng Validation 

function Validation(){
    //Phương thức 
    //kiểm tra trống
    this.checkEmpty = function(inputval,spanID,message){
        if (inputval.trim() == ""){
            //không hợp lệ 
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    //kiểm tra tài khoản trùng
    this.checkID = function(inputval,spanID,message,mang){
        //kiểm tra tk đã tồn tại trong mảng
        var isExist = false;
        //some => return giá trị true/ false dựa vào biểu thức so sánh
        isExist = mang.some(function(item){
            return item.taiKhoan === inputval.trim();
        });
        if (isExist){
            //tk bị trùng => không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }        
    }
    this.checkName = function(inputval,spanID,message){
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if (pattern.test(inputval)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkEmail = function(inputval,spanID,message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkPass = function(inputval,spanID,message){
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        if (inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkDate = function(inputval,spanID,message){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkSalary = function(inputval,spanID,message){
        var pattern = /^[0-9]+$/;
        if (inputval.match(pattern)){
            //hợp lệ /^[0-9]+$/
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkDropdown = function(selID,spanID,message){
        var optIndex = document.getElementById(selID).selectedIndex;
        if (optIndex != 0){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkHour = this.checkSalary;
}