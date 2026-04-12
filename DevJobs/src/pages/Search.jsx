import { useState, useEffect} from "react"
import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { Pagination } from "../components/Pagination.jsx"
import { JobListings } from "../components/JobListings.jsx"

import jobsData from "../../data.json"

const RESULTS_PER_PAGE = 4




export function SearchPage() {
  const [filters, setFilters] = useState({
    technology : "", 
    location : "", 
    experienceLevel : "",
  })
  const [textToFilter, setTextToFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  

  const jobsFilteredByFilters = jobsData.filter(job => {
    return (filters.technology === "" || job.data.technology === filters.technology)
  })

  const jobsWithTextFilter = textToFilter === "" 
    ? jobsFilteredByFilters
    : jobsFilteredByFilters.filter(job => {
      return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
    })

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1 ) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )
  const handlePageChange = (page) => {
    console.log('Cambiando a la página', page)
    setCurrentPage(page)
  }

  const handleSearch = (filters) => {
    setCurrentPage(1)
    setFilters(filters)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }

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

