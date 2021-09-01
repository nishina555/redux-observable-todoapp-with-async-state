import { VISIBILITY_FILTERS } from "../../constants";
import { VisibilityFilterTypes } from "../types";

const initialState: VisibilityFilterTypes = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState) => {
  return state;
};

export default visibilityFilter;
