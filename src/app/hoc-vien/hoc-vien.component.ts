import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoc-vien',
  templateUrl: './hoc-vien.component.html',
  styleUrls: ['./hoc-vien.component.css']
})
export class HocVienComponent implements OnInit {

  constructor() {}


  ngOnInit() {
    this.arHocVien.sort(function (a, b) {
      return b.id - a.id;
    });
  }
  isShow = true;
  isShowAdd = false;
  isShowDel = false;
  isShowEdit = false;
  filterStatus = "tat_ca";
  newName;
  newGender;
  newDate;
  newScore;
  arHocVien = [
    { id: 1, tenHV: "Dinh", gioiTinh: true, ngaySinh: new Date(2000, 10, 10), diem: 8.3 },
    { id: 2, tenHV: "Hoa", gioiTinh: true, ngaySinh: new Date(2000, 10, 10), diem: 6.5 },
    { id: 3, tenHV: "Hao", gioiTinh: false, ngaySinh: new Date(2000, 10, 10), diem: 5.2 },
    { id: 5, tenHV: "Uyen", gioiTinh: false, ngaySinh: new Date(2000, 10, 10), diem: 9.6 },
    { id: 4, tenHV: "Quyen", gioiTinh: true, ngaySinh: new Date(2000, 10, 10), diem: 8.3 },
  ];

  addHV(HocVienForm) {
    var id = this.arHocVien.length + 1;
    var strGioiTinh = HocVienForm.value.gioiTinh.toUpperCase();
    if (strGioiTinh != "nam".toUpperCase() && strGioiTinh != "nu".toUpperCase()) {
      alert("Gioi tinh nhap sai!");
    } else {
      var tenHV = HocVienForm.value.tenHV;
      var gioiTinh = (strGioiTinh == "nam".toUpperCase());
      var date = HocVienForm.value.ngaySinh;
      var ngaySinh = new Date(date.split("/")[2], date.split("/")[1], date.split("/")[0]);
      var diem = HocVienForm.value.diem;
      var hocVien = { id, tenHV, gioiTinh, ngaySinh, diem }
      this.arHocVien.unshift(hocVien);
      alert("Da them thanh cong!");
      this.isShowAdd = !this.isShowAdd;
      this.isShow = !this.isShow;
    }
  }

  deleteHV(id) {
    const index = this.arHocVien.findIndex(e => e.id == id);
    this.arHocVien.splice(index, 1);
    alert("Da xoa thanh cong!");
  }

  getShowStatus(gioitinh) {
    var txtTatCa = this.filterStatus == 'tat_ca';
    var txtNam = this.filterStatus == 'nam' && gioitinh;
    var txtNu = this.filterStatus == 'nu' && !gioitinh;
    return txtTatCa || txtNam || txtNu;
  }

  editHV(id) {
    const index = this.arHocVien.findIndex(e => e.id == id);
    var date = this.newDate;
    this.arHocVien[index].gioiTinh = typeof (this.newGender) != "undefined" ?
      (this.newGender == "nam" || this.newGender == "Nam") : this.arHocVien[index].gioiTinh;
    this.arHocVien[index].tenHV = typeof (this.newName) != "undefined" ?
      this.newName : this.arHocVien[index].tenHV;
    this.arHocVien[index].ngaySinh = typeof (this.newDate) != "undefined" ?
      new Date(date.split("/")[2], date.split("/")[1], date.split("/")[0]) : this.arHocVien[index].ngaySinh;
    this.arHocVien[index].diem = typeof (this.newScore) != "undefined" ?
      this.newScore : this.arHocVien[index].diem;
    this.newName = ''; this.newGender = ''; this.newDate = ''; this.newScore = '';
    alert("Da sua thanh cong!");
  }
}