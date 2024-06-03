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
  //inicializadas en cero por que angular las toma al renderizar todo y causa error por que supuestament no encuentra nada
  id:number=0;
  item:any={};

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
        console.log(this.item);
      },
      error: err=>{
        console.log("Error fetching API ",err);
      }
    });
  }
}
