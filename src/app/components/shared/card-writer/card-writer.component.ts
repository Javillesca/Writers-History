import { Component, OnInit, Input } from '@angular/core';
import { Writer } from '../../../interfaces/iWriter.interface';
import { WritersService } from 'src/app/services/writers.service';

@Component({
  selector: 'app-card-writer',
  templateUrl: './card-writer.component.html',
  styleUrls: ['./card-writer.component.css']
})
export class CardWriterComponent implements OnInit {

  @Input() writer: Writer;
  @Input() index: number;

  constructor(private _writersService: WritersService) {
  }

  ngOnInit(): void {
  }

  showWriter(): any {
    this._writersService.showWriter(this.index);
 }

}
