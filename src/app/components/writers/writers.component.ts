import { Component, OnInit } from '@angular/core';
import { WritersService } from '../../services/writers.service';


@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html'
})
export class WritersComponent implements OnInit {

  writers: any[] = [];
  constructor(private _writersService: WritersService) {

  }

  ngOnInit(): void {
    this.writers = this._writersService.getWriters();
    console.log(this.writers);
  }

}
