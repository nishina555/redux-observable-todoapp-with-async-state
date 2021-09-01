import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { RootState, VisibilityFilterTypes } from "../redux/types";
import { setFilter, TodoActions } from "../redux/actions";
import { connect } from "react-redux";

type VisibilityFiltersProps = {
  activeFilter: VisibilityFilterTypes;
  setFilter: (filter: VisibilityFilterTypes) => TodoActions;
};

const VisibilityFilters: React.FC<VisibilityFiltersProps> = ({
  activeFilter,
  setFilter,
}) => (
  <div className="visibility-filters">
    {(
      Object.keys(VISIBILITY_FILTERS) as Array<keyof typeof VISIBILITY_FILTERS>
    ).map((filterKey) => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      return (
        <span
          key={`visibility-filter-${currentFilter}`}
          className={cx(
            "filter",
            currentFilter === activeFilter && "filter--active"
          )}
          onClick={() => setFilter(currentFilter)}
        >
          {currentFilter}
        </span>
      );
    })}
  </div>
);

const mapStateToProps = (state: RootState) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
