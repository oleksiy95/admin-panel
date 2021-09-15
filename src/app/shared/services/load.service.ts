import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  public loading = new EventEmitter<boolean>();
  private count = 0;

  constructor() { }

  public show() {
    this.count++;
    this.loading.emit(true);
  }

  public hide() {
    this.count--;
    if(this.count <= 0){
      this.loading.emit(false);
    }
  }
}
