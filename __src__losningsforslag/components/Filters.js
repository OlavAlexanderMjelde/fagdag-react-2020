import React from 'react'
import FilterLink from '../pages/todos/FilterLink'
import { VisibilityFilters } from '../modules/todo/constants'

const Filters = () => (
  <p>
    Show:
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Filters
