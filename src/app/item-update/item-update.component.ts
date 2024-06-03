import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-update',
  standalone: true,
  imports: [InputTextModule,RouterModule,FormsModule],
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit{
id:number=0;
item:any;

constructor(
  private route:ActivatedRoute,
  private router:Router,
  private itemService:ItemService
){}

ngOnInit(): void {
  this.id=Number(this.route.snapshot.paramMap.get("id"));
  this.itemService.getItemById(this.id).subscribe({
    next:data=>{
      this.item=data;
    },
    error:err=>{
      console.error("Error Fetching API ",err);
    }
  })
}

updateItem():void{
  this.itemService.updateItem(this.id,this.item).subscribe({
    next:data=>{
      alert("Item Update Successfully: "+data);
    },
    error:err=>{
      console.error("Error Updating Item");
    }
  });
}


}
