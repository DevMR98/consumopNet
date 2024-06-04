import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TableModule,ButtonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName="miguel";
  isLogged=true;


  constructor(private _itemS:ItemService,private route:ActivatedRoute,private router:Router){

  }

  product:any[]=[];
  id:any;
  
  ngOnInit(){
    this._itemS.getAllItems().subscribe(data=>{
      this.product=data;
    });
  }

  deleteItem(itemId:number){
    this._itemS.deleteItem(itemId).subscribe({
      next:data=>{
        alert("Item erased succesfully");
        window.location.reload();
      },
      error:err=>{
        console.log("error erased Itemn",err);
      }
    });

  }
  confirmDelete(itemID:number){
    if(confirm("Are you sure do you want this item?")){
      this.deleteItem(itemID);
    }

  }

  
 
}
