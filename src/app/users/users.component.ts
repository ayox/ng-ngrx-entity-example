import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public dataSource: User[] = [];
  public displayedColumns: string[] = ['id', 'username'];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers$().subscribe((users) => {
      this.dataSource = users;
    });
  }
}
