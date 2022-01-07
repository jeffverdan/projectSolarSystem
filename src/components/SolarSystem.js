import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planet1 = Planets.map((planets) => (
      <PlanetCard
        key={ planets.name }
        planetName={ planets.name }
        planetImage={ planets.image }
      />
    ));
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system">
          {planet1}
        </div>
      </>
    );
  }
}

export default SolarSystem;
