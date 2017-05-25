import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

/**	static get parameters() {
        return [[Router]]
    }**/
    public username : string;
    public password : string;

	 constructor(private router: Router) { 
	 	this.router = router;

	 }

  ngOnInit() {
  	this.username = '';
  	this.password = '';
}

validateAndRedirect(){

	if(this.username === 'tanvir' && this.password === '12345'){
			this.router.navigate(['/dashboard']);
	}

}
}
