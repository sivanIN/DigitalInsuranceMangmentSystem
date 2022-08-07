import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/admin';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  admin:Admin[]
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllAdminDetails()
  }

  getAllAdminDetails(){
    this.digiservice.getAllAdminDetails().subscribe(data => {this.admin = data
    console.log(data)})
  }

  adminlogin(adminForm:any){
    for(let admin of this.admin){
      if(admin.emailid === adminForm.email && admin.password === adminForm.password ){
        this.route.navigateByUrl("/admin")
      }
    }
    
  }

}
