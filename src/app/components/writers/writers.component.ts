import { Component, OnInit } from '@angular/core';
import { WritersService } from '../../services/writers.service';
import { Writer } from '../../interfaces/iWriter.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html'
})
export class WritersComponent implements OnInit {

  writers: Writer[] = [];
  constructor(private _writersService: WritersService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.writers = this._writersService.getWriters();
    // console.log(this.writers);
  }

  showWriter(i: number): any {
    this.router.navigate(['/writer', i]);
  }

}
