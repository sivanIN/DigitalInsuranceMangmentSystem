import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Userpolicy } from 'src/app/userpolicy';
import { Hospital } from 'src/app/hospital';

@Component({
  selector: 'app-healthpolicydetails',
  templateUrl: './healthpolicydetails.component.html',
  styleUrls: ['./healthpolicydetails.component.css']
})
export class HealthpolicydetailsComponent implements OnInit {
  
  policy:Healthpolicy
  userpolicy:Userpolicy = new Userpolicy(0,0,0,"Pending")
  hospital:Hospital

  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(()=>{this.getPolicyById()})
    
  }

  getPolicyById(){

    const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")

    if(policyId>0){
      this.digiservice.getHealthPolicyById(policyId).subscribe(data => {this.policy = data
      
      console.log(data)
      this.getHospitalById()
      })
    }

  }

  saveUserpolicy(){
    // alert("success")
    const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")
    this.userpolicy.userid = parseInt(sessionStorage.getItem('userid'))
    this.userpolicy.policyid = policyId

    if(policyId>0){
      this.digiservice.saveUserPolicy(this.userpolicy).subscribe(() => {
        this.route.navigateByUrl("/mypolicy")
       })
       console.log(this.userpolicy)
    }

  }

  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl("/")
  }

  getHospitalById(){
    const hospitalId = this.policy.hospitalid
    this.digiservice.getHospitalById(hospitalId).subscribe(data => this.hospital =data)
  }



}
