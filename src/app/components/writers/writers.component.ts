import { Component, OnInit } from '@angular/core';
import { WritersService } from '../../services/writers.service';
import { Writer } from '../../interfaces/iWriter.interface';


@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html'
})
export class WritersComponent implements OnInit {

  writers: Writer[] = [];
  constructor(private _writersService: WritersService) {

  }

  ngOnInit(): void {
    this.writers = this._writersService.getWriters();
    console.log(this.writers);
  }

}
