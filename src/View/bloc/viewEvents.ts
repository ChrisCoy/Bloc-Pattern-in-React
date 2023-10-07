export abstract class ViewEvents {}

export class OnAddViewEvent extends ViewEvents {
  constructor(public message: string) {
    super();
  }
}

export class OnMinusViewEvent extends ViewEvents {}
