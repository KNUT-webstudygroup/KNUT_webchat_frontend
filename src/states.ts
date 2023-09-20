import { atom,selector } from 'recoil';
import {GroupInfo} from './types/types'

export const isToggleAtom = atom({
  key: 'isToggle',
  default: false,
});

export const userJoinedGroup = atom<GroupInfo[]>({
	key: 'userJoinedGroup',
	default: []
})

export const loginedState = atom({
  key : 'state',
  default : false
})

export const loginedStateSetter = selector({
  key : 'state_',
  get: async ({ get }) => {
    const state = get(loginedState);
    return state
  },
  set: ({ set }, state_) => {
    
    set(loginedState, state_);
  },
})

export const port = 4300;