import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WritersService } from 'src/app/services/writers.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchWriter(inp: string) {
    this.router.navigate(['/search', inp]);
  }

}
