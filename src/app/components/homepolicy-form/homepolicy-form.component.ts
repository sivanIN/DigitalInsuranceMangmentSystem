import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Homepolicy } from 'src/app/homepolicy';

@Component({
  selector: 'app-homepolicy-form',
  templateUrl: './homepolicy-form.component.html',
  styleUrls: ['./homepolicy-form.component.css']
})
export class HomepolicyFormComponent implements OnInit {

  editable:boolean = false
  
  homepolicy:Homepolicy = new Homepolicy(0,"","","",0,0,"",0)
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{this.getPolicyById()})
  }

  getPolicyById(){

    const policyId = +this.activatedRoute.snapshot.paramMap.get("id")

    if(policyId>0){
      this.editable = true
      this.digiservice.getHomePolicyById(policyId).subscribe(data => {this.homepolicy = data
      
      console.log(data)
      // this.getHospitalById()
      })
    }

  }

  newpolicy(){
    if(this.editable ){
      this.digiservice.updateHomePolicy(this.homepolicy).subscribe(() => {
        this.route.navigateByUrl("/adminpolicydetails")
       })
    }else{
    this.digiservice.newHomePolicy(this.homepolicy).subscribe(() => {
     this.route.navigateByUrl("/adminpolicydetails")
    })
  }
  }


}
