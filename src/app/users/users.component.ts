import { Component } from '@angular/core';
import { query, refreshQuery } from 'rx-query';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public usersQuery$ = query(
    UsersComponent.toString(),
    this.dataService.getUsers$
  );
  public displayedColumns = ['id', 'username'];

  constructor(private dataService: DataService) {}

  public addUser(): void {
    this.dataService.addUser$(Math.random()).subscribe(() => {
      refreshQuery(UsersComponent.toString());
    });
  }
}
