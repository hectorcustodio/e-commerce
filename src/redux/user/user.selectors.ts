import { createSelector } from "reselect";
import { StateInterface } from "../../model/state-interface";


const selectUser = (state: StateInterface) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  ({ currentUser }) => currentUser
)

