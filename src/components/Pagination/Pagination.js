import ReactPaginate from 'react-paginate'

const Pagination = (props) => {
    const { itemsPerPage, handlePageChange, listLength, background } = props;
    
    const pageCount = Math.ceil(listLength / itemsPerPage)
    const handlePageClick = (event) => {
        handlePageChange(event.selected)
    }

  return (
    <div className='bg-grey/90 rounded-2-0 inline-block'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        activeLinkClassName={background}
        className='flex text-2-0 font-fR gap-2-0 py-0-6 mr-3-0'
      />
    </div>
  )
}

export default Pagination
