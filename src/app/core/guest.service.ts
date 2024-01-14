import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment/environment';
import { Guest } from './guest.interfaces';

@Injectable({
  providedIn: 'root',
})

export class GuestService {
  private guestSubject = new BehaviorSubject<any>(null);
  guest$ = this.guestSubject.asObservable();

  constructor(private http: HttpClient) {}

  getGuest(guestId:string): Observable<Guest> {
    const apiUrl = `${environment.apiBackendPersonal}/guest/${guestId}`;
    return this.http.get<any>(apiUrl);
  }

  updateGuestState(guestId): void {
    this.getGuest(guestId).subscribe(
      (guest) => {
        this.guestSubject.next(guest);
      },
      (error) => {
        console.error('Error al obtener el invitado:', error);
      }
    );
  }
}
