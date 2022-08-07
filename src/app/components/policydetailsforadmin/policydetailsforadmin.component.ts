import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Homepolicy } from 'src/app/homepolicy';

@Component({
  selector: 'app-policydetailsforadmin',
  templateUrl: './policydetailsforadmin.component.html',
  styleUrls: ['./policydetailsforadmin.component.css']
})
export class PolicydetailsforadminComponent implements OnInit {
 
  healthpolicy:Healthpolicy[]
  homepolicy:Homepolicy[]

  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllHealthpolicy()
    this.getAllHomepolicy()
  }


    getAllHealthpolicy(){
    this.digiservice.getAllHealthpolicy().subscribe(data => {console.log(data)
    this.healthpolicy = data
   
    })
  }

  getAllHomepolicy(){
    this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
    this.homepolicy = data
    })
  }


  upadetHomePolicy(policyid:number){
   this.route.navigateByUrl("/newhomepolicy/" + policyid)
  }

  deleteHomePolicy(policyid:number){
    this.digiservice.deleteHomePolicyById(policyid).subscribe(()=>{
      this.getAllHomepolicy()
    })

  }

  upadetHealthPolicy(policyid:number){
    this.route.navigateByUrl("/newhealthpolicy/" + policyid)
  }



  deleteHealthPolicy(policyid:number){
    this.digiservice.deleteHealthPolicyById(policyid).subscribe(() => {
      this.getAllHealthpolicy()
    })

  }
}
