import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];
  genderArray: any[] = [];

  constructor(private _listService: ListService, private _dropDownService: DropDownService) { }

  ngOnInit() {
    this.genderArray = this._dropDownService.getDropDown()
  }


  submit(Name: string, LastName: string,Gender: string) {
    let model = {
      name: Name,
      lastName: LastName,
      gender: Gender
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
