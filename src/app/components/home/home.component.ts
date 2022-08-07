import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Homepolicy } from 'src/app/homepolicy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  homepolicy:Homepolicy[]
  emailid:String
  logedin:boolean
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHomepolicy()
    this.emailid = sessionStorage.getItem("emailid")
    this.logedin=this.digiservice.getLoggedStatus()
  }

  getAllHomepolicy(){
    this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
    this.homepolicy = data
    })
  }

  getpolicy(policyid:number){
 this.route.navigateByUrl("/homepolicydetails/" + policyid)
  }

  logout(){
    sessionStorage.clear();
    this.digiservice.setUserLoggedOut()
    console.log("hello")
    console.log(this.digiservice.getLoggedStatus())
    this.route.navigateByUrl("/")
  }

}
