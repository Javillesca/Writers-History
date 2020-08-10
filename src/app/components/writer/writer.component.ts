import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Writer } from '../../interfaces/iWriter.interface';
import { WritersService } from '../../services/writers.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html'
})
export class WriterComponent implements OnInit {

  writer: Writer;

  constructor( private activatedRoute: ActivatedRoute,
               private _writersService: WritersService) {
    this.activatedRoute.params.subscribe( params => {
      this.writer = this._writersService.getWriter(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
