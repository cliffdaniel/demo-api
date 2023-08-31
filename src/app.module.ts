import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlanetModule } from './modules/planets/planet.module';

@Module({
  imports: [HttpModule, PlanetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
