import { Item } from './../../models/item.model';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[] = [];
  displayedColumns: string[] = ['name', 'balance', 'type', 'actions'];

  constructor(public service: ItemService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

}
