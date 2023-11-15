import {store} from './store';

export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export enum Reducer {
  User = 'user',
}

export enum RequestStatus {
  Rejected = 'rejected',
  Fulfilled = 'fulfilled',
}
