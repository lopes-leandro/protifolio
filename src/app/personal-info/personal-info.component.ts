import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent implements OnInit {

  user$: Observable<User> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.user$ = this.githubService.getUser();
  }

}
