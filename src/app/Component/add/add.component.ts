import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  itemDetails!: FormGroup;
  collcted!: any;

  constructor(private fb: FormBuilder, private ser:ItemService) {}

  ngOnInit(): void {
    this.itemDetails = this.fb.group({
      item_name: ['', Validators.required],
      company: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  newItem(){
    // console.log("New item data: ", this.itemDetails.value);

    this.collcted = this.itemDetails.value

    this.ser.add_item(this.collcted).subscribe((res) => {
      console.log("Added item: ", res);
      alert("Item added successfully");
    });
  }
}
