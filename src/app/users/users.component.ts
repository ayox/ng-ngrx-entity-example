import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Store } from '@ngrx/store';
import { AppState, selectAllUsers, selectLoadingUsers } from '../store';
import { fetchUsers } from './users.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public dataSource: User[] = [];
  public isLoading$: Observable<boolean> | undefined;
  public displayedColumns: string[] = ['id', 'username'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUsers());

    this.store.select(selectAllUsers).subscribe((u) => {
      this.dataSource = u;
    });

    this.isLoading$ = this.store.select(selectLoadingUsers);
  }
}
