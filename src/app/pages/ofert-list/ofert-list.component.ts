import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';

@Component({
  selector: 'app-ofert-list',
  templateUrl: './ofert-list.component.html',
  styleUrls: ['./ofert-list.component.scss']
})


export class OfertListComponent implements OnInit {

public inputValue: string = ''
public oferta?: OfertI[];

constructor(
  private ofertService: OfertService,
  private activatedRoute: ActivatedRoute
){}

public ngOnInit(): void {
  this.ofertService.getOfert().subscribe((ofert: OfertI[]) => {
    this.oferta = ofert;
  })
}
}
