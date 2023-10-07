import { useEffect, useState } from 'react';

import { OnAddViewEvent, ViewEvents } from './viewEvents';
import { ViewErrorState, ViewLoadingState, ViewStates } from './viewStates';

export function useViewBloc() {
  const [state, setState] = useState<ViewStates>(new ViewLoadingState('42'));

  useEffect(() => {
    async function initState() {
      for (let i = 0; i < 100; i++) {
        setState(new ViewLoadingState(i.toString()));
        await new Promise((resolve) => setTimeout(resolve, 100));
        if (i === 99) {
          i = 0;
        }
      }
    }
    initState();
  }, []);

  const emit = (state: ViewStates) => {
    if (state instanceof ViewErrorState) {
      alert(state.someState);
    }
  };

  const add = (event: ViewEvents) => {
    if (event instanceof OnAddViewEvent) {
      alert(event.message);
    }
  };

  return { state, emit, add };
}
