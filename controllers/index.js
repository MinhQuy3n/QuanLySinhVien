
//Tạo đối tượng service tương tác backend
var svService = new SinhVienService();

var renderSinhVien = function () {
    var promise = svService.layDanhSachSinhVien();

    promise.then(function (res) {
        console.log(res.data)
        //Tạo <tr> table ...
        //Tạo nội dung các thẻ tr 
        var contentTable = '';
        for (var index = 0; index < res.data.length; index++) {
            //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
            var sinhVien = res.data[index];
            //Từ đối tượng sinh viên tạo ra thẻ tr
            contentTable += `
                <tr>
                    <td>${sinhVien.MaSV}</td>
                    <td>${sinhVien.HoTen}</td>
                    <td>${sinhVien.Email}</td>
                    <td>${sinhVien.SoDT}</td>
                    <td>${sinhVien.CMND}</td>
                    <td>${sinhVien.DiemToan}</td>
                    <td>${sinhVien.DiemLy}</td>
                    <td>${sinhVien.DiemHoa}</td>

                </tr>
            `
        }
        //In ra giao diện
        document.getElementById('tblSinhVien').innerHTML = contentTable;

    }).catch(function (error) {
        console.log(error.response.data)
    })
}

var AddSinhVien = function(){
    var promise = svService.themMoi();
    var maSV = document.getElementById('MaSV').value.trim();
    var hoTen = document.getElementById('HoTen').value.trim();
    var email = document.getElementById('Email').value.trim();
    var soDT = document.getElementById('SoDT').value.trim();
    var diemToan = document.getElementById('DiemToan').value.trim();
    var diemLy = document.getElementById('DiemLy').value.trim();
    var diemHoa = document.getElementById('DiemHoa').value.trim();

    promise.then(function(res){
        var SinhVien = SinhVien();
        // res.data.MaSV = maSV;
        // res.data.HoTen = hoTen;
        // res.data.Emial = email;
        // res.data.SoDT = soDT;
        // res.data.DiemToan = diemToan;
        // res.data.DiemLy = diemLy;
        // res.data.DiemHoa = diemHoa;
        // const SinhVienMoi = new SinhVien(maSV,hoTen,email,soDT,diemToan,diemLy,diemHoa);
        // res.data.push(SinhVienMoi);
    }).catch(function(error){
        console.log(error.response.data);
    })
}
var ADD = function (){}
renderSinhVien();