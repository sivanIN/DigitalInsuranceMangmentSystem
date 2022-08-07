import { Component, OnInit } from '@angular/core';
import { Userpolicy } from 'src/app/userpolicy';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Policycategory } from 'src/app/policycategory';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Homepolicy } from 'src/app/homepolicy';

@Component({
  selector: 'app-userpolicypage',
  templateUrl: './userpolicypage.component.html',
  styleUrls: ['./userpolicypage.component.css']
})
export class UserpolicypageComponent implements OnInit {

  mypolicy:Userpolicy
  policyCategory:Policycategory
  policy:Healthpolicy
  homepolicy : Homepolicy
  emailid:string
  phonenumber:string
  premium:number
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.mypolicies()
    // this.getpolicyCategory()
  }



  mypolicies(){

    const userId = parseInt(sessionStorage.getItem('userid'))
    console.log(userId)

    this.digiservice.myPolicyByUserId(userId).subscribe(data=>{this.mypolicy = data
    console.log(data)
    this.getpolicyCategory()
    })
    

  }

  getpolicyCategory(){
    // alert("success")
    const policyid = this.mypolicy.policyid
    // console.log(policyid)
    this.digiservice.getpolicyCategory(policyid).subscribe(data => {this.policyCategory = data
    console.log(data)
    this.getPolicyDetails()
    })
  }

  getPolicyDetails(){
    const categoryId = this.policyCategory.categoryid
    if(categoryId == 1){
      this.gethealthPolicyById(this.policyCategory.policyid)
    }
    if(categoryId == 2){
      this.getHomePolicyById(this.policyCategory.policyid)
    }
  }


  gethealthPolicyById(policyId:number){

    // const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")

    if(policyId>0){
      this.digiservice.getHealthPolicyById(policyId).subscribe(data => {this.policy = data
      //  console.log( data)
     this.emailid = sessionStorage.getItem('emailid')
     this.phonenumber=sessionStorage.getItem('phonenumber')
      })
    }

  }


  getHomePolicyById(policyId:number){

    // const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")

    if(policyId>0){
      this.digiservice.getHomePolicyById(policyId).subscribe(data => {this.homepolicy = data
      //  console.log( data)
     this.emailid = sessionStorage.getItem('emailid')
     this.phonenumber=sessionStorage.getItem('phonenumber')
      })
    }

  }

  logout(){
    sessionStorage.clear();
    this.digiservice.setUserLoggedOut()
    console.log("hello")
    console.log(this.digiservice.getLoggedStatus())
    this.route.navigateByUrl("/")
  }

  // gethomepolicyById(policyId:number){

  //   if(policyId>0){
  //     this.digiservice.getHomePolicyById(policyId).subscribe(data => {this.policy = data
  //      console.log( data)
  //     })
  //   }

  // }

  payPremium(){
    console.log(this.premium)
    this.mypolicy.payment = this.premium

    this.digiservice.updateuserpolicy(this.mypolicy).subscribe(()=>{
      // this.route.navigateByUrl("/us")
      this.mypolicies()
    })
  }

  



}
