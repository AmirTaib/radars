import { Component, OnInit } from '@angular/core';
import { RadarsService } from '../radars.service';
import { Radar, EntityType } from '../radar.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedRadar: Radar;
  radar: Radar;
  entityType: EntityType;
  entityTypes: EntityType[];

  constructor(private radarService: RadarsService) { }

  ngOnInit() {
    this.radarService.getAll()
      .subscribe(radar => {
        this.radar = radar;
        this.entityTypes = radar.EntityTypes;
      }

      );

  }

  showDetails(radar: Radar, i: number): void {

    this.selectedRadar = radar;
    console.log(this.selectedRadar);

    radar.EntityTypes.forEach(element => {
      if (element._iconId == i) {
        this.entityType = element;
      }
    });
  }
}
