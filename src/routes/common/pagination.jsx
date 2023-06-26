import _ from "lodash";
import { NavLink } from "react-router-dom";

const Pagination = (props) => {
  const { totalCount, pageSize, currentPage, onPageChange } = props;
  console.log(props);
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(startIndex + pageSize - 1, totalCount);
  const pages = Math.ceil(totalCount / pageSize);
  //if (pages === 1) return;
  const pagesArray = _.range(1, pages + 1);
  return (
    <nav className="">
      <ul className="flex justify-end space-x-[645px]">
        <div>
          <span className="text-neutral-500 ">
            Showing {startIndex} - {endIndex} records out of {totalCount}{" "}
            Records
          </span>
        </div>
        <div className="flex flex-row">
          {pagesArray.map((page) => (
            <>
              <li
                className={
                  page === currentPage
                    ? "ms-2 border-2 px-2 py-1 bg-teal-500 border-teal-700"
                    : "ms-2 border-2 px-2 py-1"
                }
                key={page}
              >
                <NavLink className="" onClick={() => onPageChange(page)}>
                  {page}
                </NavLink>
              </li>
            </>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
