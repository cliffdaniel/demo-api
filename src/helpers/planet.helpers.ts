import { Planet } from 'modules/planets/entities';

export function transformPlanetData(results: any[]): Planet[] {
  return results.map((result) => {
    return { name: result.name, climate: result.climate };
  });
}
