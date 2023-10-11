import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SystemServiceService } from 'src/app/system.service';
import { employee } from '../employee.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  
  empl = new employee();
  message = "";


  constructor(
    private emplsvc: EmployeeService,
    private syssvs: SystemServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  
  login(): void{
  this.syssvs.loggedInEmployee = null;
  this.emplsvc.login(this.empl.email, this.empl.password).subscribe({
    next: (res) => {
      console.debug(res);
      this.syssvs.loggedInEmployee = res;
      this.router.navigateByUrl("/home");
    },
    error: (err) => {
     console.log(err);
     if(err.status === 404){
       this.message = "Not Found";
     } else {
       console.error(err);
     }
   }
 })
}
  
}
