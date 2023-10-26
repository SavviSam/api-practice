export default function Starship({ name, shipClass, passengers }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Class: {shipClass}</h3>
      <h4>Passengers: {passengers}</h4>
    </div>
  );
}
