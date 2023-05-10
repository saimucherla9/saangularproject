import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  submit(loginBtn: any) {
    console.log(loginBtn);
    // return loginBtn.groupForm.
  }


}
