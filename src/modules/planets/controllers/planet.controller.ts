import { Controller, Get } from '@nestjs/common';
import { PlanetService } from '../services/planet.service';

@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get('planets')
  getPlanets() {
    return this.planetService.getPlanet();
  }
}
