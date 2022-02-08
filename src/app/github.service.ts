import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User> {
    return this.http.get<User>(
      `${environment.apiUrl}/users/${environment.username}`
    );
  }
}
