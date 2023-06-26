import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  itemId!: any;
  singleItem!: any;

  constructor(private activeRoute:ActivatedRoute, private ser:ItemService, private router:Router) {}

  ngOnInit():void {
    this.activeRoute.paramMap.subscribe((params:any) => {
      this.itemId = params.get('id');
    })

    this.ser.view_single(this.itemId).subscribe((si:any) => {
      this.singleItem = si;
      // console.log("Selected Item: ", this.singleItem);

    })
  }

  // to delete the item
  delItem() {
    this.ser.delete_item(this.itemId).subscribe((i:any) => {
      console.log("Deleted item: ", i);
      alert("Item deleted Successfully");
      this.router.navigate(["/view"]);
    });
  }
}
