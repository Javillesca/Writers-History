import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Writer } from 'src/app/interfaces/iWriter.interface';
import { WritersService } from '../../../services/writers.service';


@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html'
})
export class SeekerComponent implements OnInit {

  writers: Writer[] = [];
  value: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _writersService: WritersService) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(values => {
      this.value = values['value'];
      this.writers = this._writersService.searchWriters(this.value);
    });
  }

  showWriter(id: number): any {
    this._writersService.showWriter(id);
 }

}
