import {Component} from "@angular/core";
@Component({
  selector: "classroom",
  templateUrl: "./class.component.html"

})
export class ClassComponent{
  alowAddStudent: boolean = false;
  studentName: string = "";
  notification: string = "No student was created!";
  sinhviens = ["Nguyễn Tiến Đạt","Trần Thế Bôn"];
  created:boolean=false;
  constructor() {// khởi tạo hàm- thực thi ngay tại thời điểm tạo đối tượng
    setTimeout(()=>this.alowAddStudent=true,1000);
  }
  onCreateStudent(){
    if(this.studentName.length>0){
      this.sinhviens.push(this.studentName);
      this.notification = "Sinh viên đã được tạo thêm";
      this.studentName="";
      this.created =true;
    }

  }
}
