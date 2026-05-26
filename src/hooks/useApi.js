import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for fetching data from an API
 * Handles loading states, error states, and automatically aborts requests when component unmounts
 * @param {string} url - The URL to fetch data from
 * @param {Object} [options] - Optional fetch options
 * @returns {Object} An object containing data, loading state, error state, and a refetch function
 */
const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const fetchData = async () => {
    // Clean up previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: abortControllerRef.current.signal
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      // Ignore abort errors
      if (err.name !== 'AbortError') {
        setError(err.message);
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when URL or options change
  useEffect(() => {
    fetchData();
    
    // Cleanup function to abort request when component unmounts or before next fetch
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, JSON.stringify(options)]);

  // Refetch function to manually trigger a new request
  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useApi;