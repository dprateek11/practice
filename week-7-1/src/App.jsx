
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./source/atoms/count";


function App() {

  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
       
    </>
  );
}

function Count () {
  return <div>
    <CountRenderer />

    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? null : "It is even"}
  </div>
}

function Buttons () {
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>
      Decrease
    </button>
  </div>
}

export default App;
