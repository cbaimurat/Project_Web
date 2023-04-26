import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
  public isSearchVisible: boolean = false;

  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  onNavigateToLogin() {
    this.router.navigate(['/login']);
  }
  onNavigateToSignUp() {
    this.router.navigate(['/signup']);
  }

}
