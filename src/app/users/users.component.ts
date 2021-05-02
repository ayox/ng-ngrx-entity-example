import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Store } from '@ngrx/store';
import { AppState, selectAllUsersState, selectLoadingUsers } from '../store';
import { fetchUsers } from './users.actions';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public dataSource$: Observable<User[]> = of([]);
  public isLoading$ = of(false);
  public displayedColumns = ['id', 'username'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUsers());

    this.dataSource$ = this.store.select(selectAllUsersState);

    this.isLoading$ = this.store.select(selectLoadingUsers);
  }
}
