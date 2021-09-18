import { Pagination } from "@mui/material"
import "../../components/Pagination/CustomPagination.css"
const CustomPagination = ({ setPage, numofPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page)
    window.scroll(0, 0)
  }
  return (
    <div className="customPagination">
      <Pagination
        count={numofPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color="secondary"
      />
    </div>
  )
}

export default CustomPagination
