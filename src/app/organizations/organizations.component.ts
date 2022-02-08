import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Organization } from '../shared/model/organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsComponent implements OnInit {

  orgs$: Observable<Organization[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrganizations();
  }

}
