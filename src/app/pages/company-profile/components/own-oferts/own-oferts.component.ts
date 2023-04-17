import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';

@Component({
  selector: 'app-own-oferts',
  templateUrl: './own-oferts.component.html',
  styleUrls: ['./own-oferts.component.scss']
})
export class OwnOfertsComponent {
@Input() public ofert?: OfertI;
@Output() public onRemoveOfert = new EventEmitter<void>();

constructor(
  private router: Router
){}

public deletedOfert(){
  this.onRemoveOfert.emit();
}

public editOfert(_id: string) {
  this.router.navigate(['edit-ofert', _id]);
}
public navigateToDetail(id: string) {
  this.router.navigate(['ofert-detail', id]);
}

}
