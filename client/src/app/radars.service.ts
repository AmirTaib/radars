import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Radar, EntityType } from './radar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadarsService {

  radars: Radar[] = [{
    'EntityTypes': [
      {
        'Icon': {
          '_iconId': 11,
          '_iconName': 'assets/icons/radars/GSensor.png'
        },
        '_entityTypeId': 2,
        '_iconId': 11,
        '_name': 'GenericRadar'
      },
      {
        'Icon': {
          '_iconId': 12,
          '_iconName': 'Radar.png'
        },
        '_entityTypeId': 3,
        '_iconId': 12,
        '_name': 'assets/icons/radars/GreenRadar.png'
      }
    ],
    '_groupId': 1,
    '_name': 'Radars',
    '_systemId': 1,
    '_visible': true
  }];

  radar: Radar = {
    'EntityTypes': [
      {
        'Icon': {
          '_iconId': 11,
          '_iconName': 'assets/icons/radars/GSensor.png'
        },
        '_entityTypeId': 2,
        '_iconId': 11,
        '_name': 'GenericRadar'
      },
      {
        'Icon': {
          '_iconId': 12,
          '_iconName': 'assets/icons/radars/GreenRadar.png'
        },
        '_entityTypeId': 3,
        '_iconId': 12,
        '_name': 'GreenRadar'
      }
    ],
    '_groupId': 1,
    '_name': 'Radars',
    '_systemId': 1,
    '_visible': true
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Radar> {
    return this.http.get<Radar>('http://localhost:3000');
  }



  getEntityTypeByIndex(entityTypesIndex): Observable<EntityType> {
    return this.http.get<EntityType>(`http://localhost:3000/EntityTypes/_iconId:${entityTypesIndex}`);
  }
}

