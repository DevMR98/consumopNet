import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from '../item.service';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent implements OnInit{
  itemForm:FormGroup;
  departments:any;
  constructor(private fb:FormBuilder, private itemService:ItemService,
     private router:Router,private departmentService:DepartmentService ){
      this.itemForm=this.fb.group({
        name:['',Validators.required],
        description:['',Validators.required],
        departmentID:['',Validators.required]
       });
     }
     
     onSumbit():void{
        this.itemService.createItem(this.itemForm.value).subscribe({
          next:data=>{
            alert("Item created successfully");
            this.router.navigate(['/']);
          },
          error:err=>{
            console.log(this.itemForm.value);
            console.log('Error creating item',err);
          }
        });
     }

     ngOnInit(): void {
       this.departmentService.getAllDepartments().subscribe({
        next:data=>{
          this.departments=data;
          console.log(this.departments);
        },
        error:err=>{
          console.log("Error Created Item",err);
        }
       });
     }
}
