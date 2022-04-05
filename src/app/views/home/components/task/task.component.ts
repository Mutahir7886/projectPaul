import { Component, OnInit } from '@angular/core';
import { testData } from 'src/shared/models/Data.interface';
import { homeService } from 'src/shared/service-proxies/home/home.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  data:testData[] =[]
  displayedColumns: string[] = ['email', 'gender', 'location', 'name','tsID'];

  constructor(private homeService:homeService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData():void{
    this.homeService.getTableData().subscribe(res=>{
      // this.data = res[0]
      const data = res.flat()
      this.data= data
    })
  }
  checkRowValidity(email:string,gender:string){
    
    var emailCheck= this.checkValidity(email)
    var genderCheck = gender =='male' || gender =='female'
    return emailCheck && genderCheck
  }

  checkValidity(email:string) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email) ;
  }

}
