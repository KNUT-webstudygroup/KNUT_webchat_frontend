import { atom } from 'recoil';
import {GroupInfo} from './types/types'

export const isToggleAtom = atom({
  key: 'isToggle',
  default: false,
});

export const userJoinedGroup = atom<GroupInfo[]>({
	key: 'userJoinedGroup',
	default: []
})