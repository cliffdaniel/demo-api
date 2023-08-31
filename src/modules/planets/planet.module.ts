import { Module } from '@nestjs/common';
import { PlanetService } from './services/planet.service';
import { PlanetController } from './controllers/planet.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
