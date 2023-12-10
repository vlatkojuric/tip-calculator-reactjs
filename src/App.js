import { useState } from "react";
import styled from "styled-components";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <StyledContainer>
      {/* Passing the useState as a prop to use it in the BillInput component */}
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {/* passing the bill into the output component so it takes the value of the bill state */}
      <Output bill={bill} tip={tip} />

      <Reset onReset={handleReset} />
    </StyledContainer>
  );
}
//now here inside the BillInput function we can destructure the prop as our parameter
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the bill? </label>
      {/* the value of the input field should be bill(the initial value of the useState) and the onCHange should be event.target.value which sets the value of the bill state
      and we should convert it to a number because the bill must be a number*/}
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(event) => onSetBill(Number(event.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label htmlFor="">{children} </label>
      <select
        value={percentage}
        onChange={(event) => onSelect(Number(event.target.value))}
      >
        <option value="0">Not good (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay x (${bill} + ${tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

//Styling

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export default App;
