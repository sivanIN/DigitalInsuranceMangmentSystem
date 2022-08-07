import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Healthpolicy } from 'src/app/healthpolicy';

@Component({
  selector: 'app-health-policy-form',
  templateUrl: './health-policy-form.component.html',
  styleUrls: ['./health-policy-form.component.css']
})
export class HealthPolicyFormComponent implements OnInit {

  healthpolicy:Healthpolicy  = new Healthpolicy(0,"","","",0,0,0,0)
  editable:boolean = false
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{this.getPolicyById()})
  }


  getPolicyById(){

    const policyId = +this.activatedRoute.snapshot.paramMap.get("id")

    if(policyId>0){
      this.editable = true
      this.digiservice.getHealthPolicyById(policyId).subscribe(data => {this.healthpolicy = data
      
      console.log(data)
      // this.getHospitalById()
      })
    }

  }


  newpolicy(){
    if(this.editable ){
      this.digiservice.updateHealthPolicy(this.healthpolicy).subscribe(() => {
        this.route.navigateByUrl("/adminpolicydetails")
       })
    }else{
    
    this.digiservice.newHealthPolicy(this.healthpolicy).subscribe(() => {
     this.route.navigateByUrl("/adminpolicydetails")
    })
  }
  
  }

}
