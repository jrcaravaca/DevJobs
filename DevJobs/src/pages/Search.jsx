import { useEffect} from "react"
import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { Pagination } from "../components/Pagination.jsx"
import { JobListings } from "../components/JobListings.jsx"
import { useFilters } from "../hooks/useFilters.jsx"


export function SearchPage() {

  const {totalPages, pagedResults, handlePageChange, handleSearch, handleTextFilter, jobsWithTextFilter, currentPage} = useFilters()

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length} - Página ${currentPage} - DevJobs`
  }, [jobsWithTextFilter, currentPage])

  return (
    <>
    
        <main>
          <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>

          <section>

            <JobListings jobs={pagedResults} />

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange} />
          </section>
        </main>

    </>
  )
}

