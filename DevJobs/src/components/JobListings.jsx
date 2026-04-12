import { JobCard } from "./JobCard"
import data from "../../data.json"

console.log(data)
export function JobListings()  {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <div className="jobs-listings">
          {data.map((job) => (
            <JobCard job={job}/>
          ))}
      </div>
    </>
  )
}