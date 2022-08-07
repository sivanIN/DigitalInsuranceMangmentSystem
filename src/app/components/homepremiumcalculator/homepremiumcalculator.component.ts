import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Homepolicy } from 'src/app/homepolicy';

@Component({
  selector: 'app-homepremiumcalculator',
  templateUrl: './homepremiumcalculator.component.html',
  styleUrls: ['./homepremiumcalculator.component.css']
})
export class HomepremiumcalculatorComponent implements OnInit {

  homepolicy:Homepolicy[]
  phonenumber:number
  location:String
  policyid:number
  premium :number = 0
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHomepolicy()
    
  }


  getAllHomepolicy(){
    this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
    this.homepolicy = data
    })
  }

  calculatePremium(){
    
    console.log(this.policyid)

    const policyid = this.policyid

    for(let policy of this.homepolicy){
       const policyId = policy.policyid
      console.log(policy.policyid === this.policyid)
      if(policyid.toString() === policyId.toString()){
        
        if(this.location.toString() === "Rural"){
        
          this.premium = policy.premium * 1.5
        }else{
          this.premium = policy.premium * 3
        }
      }
    }
  }

}
