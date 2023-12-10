function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return <BillInput />;
}

function BillInput() {
  return (
    <div>
      <label htmlFor="">How much was the bill? </label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage() {
  return (
    <div>
      <label htmlFor="">How did you like the service? </label>
      <select>
        <option value="0">Not good (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {}

function Reset() {}

export default App;
