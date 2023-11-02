export function Meters2() {
  return (
    <div>
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        value="20"
        min="20"
        max="500"
        required
      />
    </div>
  );
}

export default Meters2;