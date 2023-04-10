import { createReducer, on } from '@ngrx/store';
import * as FooActions from './foo.actions';

export const fooFeatureKey = 'foo';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

