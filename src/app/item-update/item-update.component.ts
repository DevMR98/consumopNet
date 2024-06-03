import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ItemService } from '../item.service';
import { DepartmentService } from '../department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-update',
  standalone: true,
  imports: [InputTextModule, RouterModule, FormsModule,CommonModule],
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit {
  id: number = 0;
  item: any = {};
  department: any = [];
  selectDepartmentId:number=0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.itemService.getItemById(this.id).subscribe({
      next: data => {
        this.item = data;
        console.log(this.item);
        //servicio que controla la respuesta de la api department
        this.departmentService.getAllDepartments().subscribe({
          next: data => {
            this.department = data;
            console.log(JSON.stringify(this.department));
            
            console.log(this.department);
            for(let i=0; i<this.department.length; i++){
              if(this.department[i].name===this.item.departmentName){
                this.selectDepartmentId=this.department[i].departmentID;
              }
            }
            console.log(this.selectDepartmentId);

          },
          error: err => {
            console.error("Error fetching API ", err);
          }
        })
      },
      error: err => {
        console.error("Error Fetching API ", err);
      }
    });
  }

  updateItem(): void {
    console.log(this.item.departmentID);
    this.item.departmentID=this.selectDepartmentId;
    console.log(this.item.departmentName);
    this.itemService.updateItem(this.id, this.item).subscribe({
      next: ()=>{
        alert(`Item Updating Successfully`);
        this.router.navigate(['/']);
      },
      error: err => {
        console.error("Error Updating Item",err);
      }
    });
  }


}
