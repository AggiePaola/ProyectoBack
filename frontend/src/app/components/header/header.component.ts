import { Component } from '@angular/core';
import { LoginModalComponent } from '../../login/login.modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [LoginModalComponent],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
