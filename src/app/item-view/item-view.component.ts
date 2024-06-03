import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.css'
})
export class ItemViewComponent implements OnInit {
  id?:number;
  item:any;

  constructor(
    private route:ActivatedRoute,
    private itemService:ItemService,
  ){}

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.itemService.getItemById(this.id).subscribe({
      next:resp=>{
        this.item=resp;
      },
      error: err=>{
        console.log("Error fetching API ",err);
      }
    });
  }
}
