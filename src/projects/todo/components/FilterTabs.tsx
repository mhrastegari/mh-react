import { TaskFilter, TaskFilters } from "../types";

interface Props {
  currentFilter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}

export function FilterTabs(props: Props) {
  return (
    <div className="flex space-x-4 mb-4">
      {TaskFilters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded ${
            props.currentFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => props.setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
