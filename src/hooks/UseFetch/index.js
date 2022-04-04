import { useState, useEffect } from 'react'
import client from '../../graphql/index'

const useFetch = ({ initialQuery, initialVariables, initialData }) => {
  const [data, setData] = useState(initialData)
  const [query, setQuery] = useState(initialQuery)
  const [variables, setVariables] = useState(initialVariables)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const { data } = await client.query({
          query,
          variables
        })
        setData(data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query, variables])

  return { data, isLoading, isError, doFetch: setQuery, setVariables }
}

export default useFetch
