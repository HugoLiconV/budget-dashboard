export enum Direction {
  NEXT = "NEXT",
  PREV = "PREV",
}

type Action = {
  type: Direction | "reset" | "stopSliding";
  numItems?: number;
};

export function reducer(state: CardReducerState, { type, numItems }: Action) {
  switch (type) {
    case "reset":
      return initialState;
    case Direction.PREV:
      return {
        ...state,
        dir: Direction.PREV,
        sliding: true,
        pos: state.pos === 0 ? (numItems || 0) - 1 : state.pos - 1,
      };
    case Direction.NEXT:
      return {
        ...state,
        dir: Direction.NEXT,
        sliding: true,
        pos: state.pos === (numItems || 0) - 1 ? 0 : state.pos + 1,
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export type CardReducerState = {
  pos: number;
  sliding: boolean;
  dir: Direction;
};

export const initialState: CardReducerState = {
  pos: 0,
  sliding: false,
  dir: Direction.NEXT,
};
