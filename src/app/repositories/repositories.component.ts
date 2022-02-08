import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubService } from '../github.service';
import { Repository } from '../shared/model/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos().pipe(
      map(repos => repos.filter(repo => !repo.fork))
    );
  }

}
