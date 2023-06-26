import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editedDetails!: FormGroup;
  collectedItem!: any;
  itemId!: any;
  singleItem!:any

  constructor(private activeRoute: ActivatedRoute, private ser: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.editedDetails = new FormGroup({
      item_name: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl(''),
      desc: new FormControl('')
    })

    this.activeRoute.paramMap.subscribe((params) => {
      this.itemId = params.get('id');
      // console.log("Collected id ", this.itemId);

      this.ser.view_single(this.itemId).subscribe((res) => {
        // console.log(typeof(res));

        this.singleItem = res;
        console.log("Selected item to be edited: ", this.singleItem);

        this.editedDetails = new FormGroup({
          item_name: new FormControl(this.singleItem.item_name),
          company: new FormControl(this.singleItem.company),
          price: new FormControl(this.singleItem.price),
          desc: new FormControl(this.singleItem.desc)
        })
      })
    })
  }

  editItem() {
    this.collectedItem = this.editedDetails.value;
    // console.log("collected edit_data: ", this.collectedItem);

    this.ser.edit_item(this.itemId, this.collectedItem).subscribe((data: any) => {
      console.log("Edited Data: ", data);
      // alert("Data edited succesfully");
      this.router.navigate(["/view"]);
    })
  }
}
