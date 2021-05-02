import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {fetchUsers} from '../store/app-actions';
import {AppState, selectAllUsers, selectLoadingUsers} from '../store/app-store';

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

    this.dataSource$ = this.store.select(selectAllUsers);

    this.isLoading$ = this.store.select(selectLoadingUsers);
  }
}
