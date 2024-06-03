import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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


  constructor(private _itemS:ItemService){

  }

  product:any[]=[];
 
  
  ngOnInit(){
    this._itemS.getAllItems().subscribe(data=>{
      this.product=data;
    });
  }
 
}
