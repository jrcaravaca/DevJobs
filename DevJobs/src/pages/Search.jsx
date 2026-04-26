import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { Pagination } from "../components/Pagination.jsx"
import { JobListings } from "../components/JobListings.jsx"
import { useFilters } from "../hooks/useFilters.jsx"



export default function SearchPage() {

  const {totalPages, handlePageChange, handleSearch, handleTextFilter, jobs, total, loading, currentPage, textToFilter} = useFilters()



  const title = loading ? 'Cargando.... - DevJobs' : `Resultados: ${total} - Página ${currentPage} - DevJobs`

  return (
    <>
    
        <main>
          <title>{title}</title>
          <meta name="description" content="Listado con empleos y filtros para encontrar el trabajo de tus sueños." />
          <SearchFormSection initialText={textToFilter} onSearch={handleSearch} onTextFilter={handleTextFilter}/>

          <section>
            <h2 style={{textAlign: "center"}}>Resultados de búsqueda</h2>
            {
              loading ? <p style={{textAlign: 'center', padding: '1rem', textWrap: "balance"}}>Cargando empleos....</p> : <JobListings jobs={jobs} />
            }
            
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange} />
          </section>
        </main>

    </>
  )
}

