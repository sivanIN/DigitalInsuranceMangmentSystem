import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Healthpolicy } from './healthpolicy';
import { Observable,map } from 'rxjs';
import { User } from './user';
import { Userpolicy } from './userpolicy';
import { Policycategory } from './policycategory';
import { Homepolicy } from './homepolicy';
import { Admin } from './admin';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})
export class DigitalinsuranceService {

  healthurl= "http://localhost:8080/api/healthpolicy"
  homeurl = "http://localhost:8080/api/homepolicy"
  userUrl = "http://localhost:8080/api/user"
  userpolicyUrl = "http://localhost:8080/api/userpolicy"
  policyUrl = "http://localhost:8080/api/policy"
  adminUrl = "http://localhost:8080/api/admin"
  hospitalurl = "http://localhost:8080/api/hospital"


  isUserLoggedIn = false

  constructor(private httpclient:HttpClient) { }


  getLoggedStatus(){

    return this.isUserLoggedIn
  
  }
  
    setUserLoggedIn(){
      this.isUserLoggedIn =true
    }
  
    setUserLoggedOut(){
      this.isUserLoggedIn = false
    }


  getAllHealthpolicy():Observable<Healthpolicy[]>{

    return this.httpclient
    .get<gethealthpolicyResponse>(this.healthurl)
    .pipe(map(response => response._embedded.healthPolicies))
  
  }

  getAllHomepolicy():Observable<Homepolicy[]>{
    return this.httpclient
    .get<getHomepolicyResponse>(this.homeurl)
    .pipe(map(response => response._embedded.homePolicies))
  }

  
  getHealthPolicyById(policyid:number):Observable<Healthpolicy>{
    const healthURL= this.healthurl + "/" +  policyid
    return this.httpclient
    .get<Healthpolicy>(healthURL)
  }

  getHomePolicyById(policyId:number):Observable<Homepolicy>{
    const homeURL  = this.homeurl + "/" + policyId
    return this.httpclient.get<Homepolicy>(homeURL)
  }

  getUserbyId(userid:number):Observable<User>{
    const userURL = this.userUrl + '/' + userid
    return this.httpclient.get<User>(userURL)
  }

  getHospitalById(hospitalId:number):Observable<Hospital>{
    const hospitalURL = this.hospitalurl + '/' + hospitalId

    return this.httpclient.get<Hospital>(hospitalURL)
  }


  // getHomePolicyById(policyid:number):Obervable<>

  myPolicyByUserId(userid:number):Observable<Userpolicy>{
    // console.log(userid)
    const userPolicyURL= this.userpolicyUrl + "/" +  userid
    // console.log(userPolicyURL)
    // return this.httpclient
    // .get<getUserpolicyResponse>(userPolicyURL)
    return this.httpclient.get<Userpolicy>(userPolicyURL)
    
  }

  getpolicyCategory(policyId:number):Observable<Policycategory>{
    const policycatURL = this.policyUrl + "/" + policyId
    return this.httpclient.get<Policycategory>(policycatURL)
  }

  saveuser(user:User):Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  return this.httpclient.post<User>(this.userUrl,user,httpOptions)
  }

  getAllUser():Observable<User[]>{
    return this.httpclient
    .get<getUserResponse>(this.userUrl)
    .pipe(map(response => response._embedded.users))
  }

  getAllHospital():Observable<Hospital[]>{
   return this.httpclient.get<getHospitalResponse>(this.hospitalurl)
    .pipe(map(response => response._embedded.hospitals))
  }

  getHospitalByIllness(illness:String):Observable<Hospital[]>{
    const hospitalByIllnessUrl = "http://localhost:8080/api/hospital/search/findByIllnessContainsIgnoreCase?illness=" + illness
    return this.httpclient.get<getHospitalResponse>(hospitalByIllnessUrl)
    .pipe(map(response => response._embedded.hospitals))
  }


  saveUserPolicy(userpolicy:Userpolicy):Observable<Userpolicy>{

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  
  return this.httpclient.post<Userpolicy>(this.userpolicyUrl,userpolicy,httpOptions)
}

newHealthPolicy(healthpolicy:Healthpolicy):Observable<Healthpolicy>{
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' :'application/json',
    'Authorization':'auth-token',
    'Access-Control-Allow-Origin':'*'
  })
}
return this.httpclient.post<Healthpolicy>(this.healthurl,healthpolicy,httpOptions)
}

updateHealthPolicy(healthpolicy:Healthpolicy):Observable<Healthpolicy>{
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' :'application/json',
    'Authorization':'auth-token',
    'Access-Control-Allow-Origin':'*'
  })
}
return this.httpclient.put<Healthpolicy>(this.healthurl +`/${healthpolicy.policyid}`,healthpolicy,httpOptions)
}

deleteHealthPolicyById(policyid:number):Observable<Healthpolicy>{

  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' :'application/json',
    'Authorization':'auth-token',
    'Access-Control-Allow-Origin':'*'
  })
}
return this.httpclient.delete<Healthpolicy>(this.healthurl +`/${policyid}`,httpOptions)

}



newHomePolicy(homepolicy:Homepolicy):Observable<Homepolicy>{

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  return this.httpclient.post<Homepolicy>(this.homeurl ,homepolicy,httpOptions)

  }

  updateHomePolicy(homepolicy:Homepolicy):Observable<Homepolicy>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  return this.httpclient.put<Homepolicy>(this.homeurl +`/${homepolicy.policyid}`,homepolicy,httpOptions)

  }

  

  deleteHomePolicyById(policyid:number):Observable<Homepolicy>{

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  return this.httpclient.delete<Homepolicy>(this.homeurl +`/${policyid}`,httpOptions)

  }

  updateuserpolicy(userpolicy:Userpolicy):Observable<Userpolicy>{
    console.log(userpolicy)
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
    }
  
  return this.httpclient.put<Userpolicy>(this.userpolicyUrl + `/${userpolicy.userid}`,userpolicy,httpOptions)

  }

  getAllUserPolicy():Observable<Userpolicy[]>{
    return this.httpclient
    .get<getUserpolicyResponse>(this.userpolicyUrl)
    .pipe(map(response => response._embedded.userPolicies))
  }

  // updateUserpolicy(userid:number):Observable<Userpolicy>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //     'Content-Type' :'application/json',
  //     'Authorization':'auth-token',
  //     'Access-Control-Allow-Origin':'*'
  //   })
  // }
  
  // return this.httpclient.put<Userpolicy>(this.userpolicyUrl+`/${employee.empno}`,employee,httpOptions)
  // }

  getAllAdminDetails():Observable<Admin[]>{
    return this.httpclient
    .get<getAdminResponse>(this.adminUrl)
    .pipe(map(response => response._embedded.admins))
  }




}

interface gethealthpolicyResponse{
  _embedded:{
    healthPolicies : Healthpolicy[]
  }
}

interface getUserResponse{
  _embedded:{
    users : User[]
  }
}

interface getUserpolicyResponse{
  _embedded:{
    userPolicies : Userpolicy[]
  }
}

interface getHomepolicyResponse{
  _embedded:{
    homePolicies : Homepolicy[]
  }
}

interface getAdminResponse{
  _embedded:{
    admins : Admin[]
  }
}

interface getHospitalResponse{
  _embedded:{
    hospitals : Hospital[]
  }
}