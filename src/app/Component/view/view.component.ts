import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  item!: {
    id: number;
    item_name: string;
    company: string;
    price: number;
    desc: string;
  }[];
  itemArrLen!:number;

  constructor(private iServ: ItemService) { }

  ngOnInit(): void {
    this.iServ.viewData().subscribe((i: any) => {
      this.item = i;
      // console.log("Item: ", this.item);
    });
  }

  searchItem(data: NgForm) {
    let searchText = data.value.sText;
    console.log(searchText);

    if (searchText == "") {
      this.item = this.item;
    }
    else {
      this.item = this.item.filter(itm => (itm.item_name.toLowerCase().includes(searchText.toLowerCase())) || (itm.company.toLowerCase().includes(searchText.toLowerCase())));
      this.itemArrLen = this.item.length;


      // let sItm = this.item.filter(itm => (itm.item_name.toLowerCase().includes(searchText.toLowerCase())) || (itm.company.toLowerCase().includes(searchText.toLowerCase())));
      // if(sItm.length != 0) {
      //   this.item = sItm;
      // } else {
      //   console.log("NO Item Found");
      //   // this.item = [];
      //   alert("SORRY! No Item matched");
      // }
    }
    console.log("Searched Item: ", this.item);
  }

}
