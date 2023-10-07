export abstract class ViewStates {
  someState: string;
  constructor(someState: string) {
    this.someState = someState;
  }
}

export class ViewLoadingState extends ViewStates {}

export class ViewLoadedState extends ViewStates {}

export class ViewErrorState extends ViewStates {}
