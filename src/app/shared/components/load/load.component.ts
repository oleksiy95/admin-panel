import { Component, OnInit } from '@angular/core';
import { LoadService } from '../../services/load.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  public loading = false;

  constructor(private load: LoadService) { }

  ngOnInit(): void {
    this.load.loading.subscribe(res => {
      this.loading = res
    });
  }

}
