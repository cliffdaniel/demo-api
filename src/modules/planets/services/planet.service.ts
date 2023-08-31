import { Injectable } from '@nestjs/common';
import { Planet } from '../entities';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { transformPlanetData } from 'helpers';

@Injectable()
export class PlanetService {
  constructor(private readonly httpService: HttpService) {}

  getPlanet(): Observable<Planet[]> {
    const url = 'https://swapi.dev/api/planets';

    const planets = this.httpService.get(url);
    return planets.pipe(
      map((response: AxiosResponse<any>) => {
        return transformPlanetData(response.data.results);
      }),
    );
  }
}
