import React from 'react';

import { useViewBloc } from './bloc/useViewBloc';
import { OnAddViewEvent } from './bloc/viewEvents';
import { ViewErrorState, ViewLoadedState, ViewLoadingState } from './bloc/viewStates';

export const Index = () => {
  const { add, emit, state } = useViewBloc();

  if (state instanceof ViewLoadingState) {
    return <div>loading: {state.someState}</div>;
  } else if (state instanceof ViewLoadedState) {
    return (
      <div>
        carregou: {state.someState} <br />
        <button onClick={() => add(new OnAddViewEvent('funfo'))}>ativar erro</button>
      </div>
    );
  } else if (state instanceof ViewErrorState) {
    return <div>error: {state.someState}</div>;
  }

  return <div>Default lol</div>;
};
