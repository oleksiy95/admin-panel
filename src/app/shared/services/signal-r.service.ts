import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  public receiveOrder = new EventEmitter<Order>();
  public statusOrder = new EventEmitter<Order>();

  constructor() {
    this.buildConnection();
    this.startConnection();
  }

  private buildConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.server}/orderHub`)
      .build();
  }

  private startConnection() {
    this.hubConnection.start()
      .then(() => {
        this.registerEvents();
      },
        () => {
          setTimeout(() => this.startConnection(), 3000)
        })
  }

  private registerEvents() {
    this.hubConnection.on('receiveOrder', (order: Order) => {
      const audio = new Audio(
        'assets/media/notification.mp3');
                    audio.play();
      const newOrder = new Order();
      Object.assign(newOrder, order);
      this.receiveOrder.emit(newOrder)
    });

    this.hubConnection.on('statusOrder', (order: Order) => {
      const audio = new Audio(
        'assets/media/notification.mp3');
                    audio.play();
      const newOrder = new Order();
      Object.assign(newOrder, order);
      this.statusOrder.emit(newOrder)
    });
  }
}
