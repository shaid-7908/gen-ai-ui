import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount } from "../features/somefeatures/someFeatureSlice";

const SomeFeatureComponent: React.FC = () => {
  const value = useAppSelector((state) => state.someFeature.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default SomeFeatureComponent;
