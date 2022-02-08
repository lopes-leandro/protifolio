import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './shared/model/repository';
import { User } from './shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  public getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.userUrl}/repos`);
  }
}
