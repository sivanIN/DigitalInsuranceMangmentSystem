import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Homepolicy } from 'src/app/homepolicy';
import { Userpolicy } from 'src/app/userpolicy';

@Component({
  selector: 'app-homepolicydetails',
  templateUrl: './homepolicydetails.component.html',
  styleUrls: ['./homepolicydetails.component.css']
})
export class HomepolicydetailsComponent implements OnInit {

  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{this.getPolicyById()})
  }

  policy:Homepolicy
  userpolicy:Userpolicy = new Userpolicy(0,0,0,"Pending")

  getPolicyById(){

    const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")

    if(policyId>0){
      this.digiservice.getHomePolicyById(policyId).subscribe(data => {this.policy = data
      
      console.log(data)
      // this.getHospitalById()
      })
    }

  }

  saveUserpolicy(){
    
    const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")
    this.userpolicy.userid = parseInt(sessionStorage.getItem('userid'))
    this.userpolicy.policyid = policyId

    if(policyId>0){
      this.digiservice.saveUserPolicy(this.userpolicy).subscribe(() => {
        this.route.navigateByUrl("/mypolicy")
       })
       console.log(this.userpolicy)
       alert("Policy Request send Successfully")
    }

  }

  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl("/")
  }



}
