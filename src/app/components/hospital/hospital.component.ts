import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hospital } from 'src/app/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  showtable:boolean
  hospitals:Hospital[]
  illness:String
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHospitals()
  }

  getAllHospitals(){
    this.digiservice.getAllHospital().subscribe(data => {this.hospitals = data
    console.log(data)
    })
  }

  getHospitalByIlness(){
    this.showtable = true
    this.digiservice.getHospitalByIllness(this.illness).subscribe(data => {this.hospitals = data
    console.log(data)
    
    
  })
  }

}
