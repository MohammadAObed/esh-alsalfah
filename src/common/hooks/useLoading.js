import { useEffect, useState } from "react";

const loadingDelay = 2000;

function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);
    return () => clearTimeout(timeoutId);
  }, []);

  return [isLoading, setIsLoading];
}

export default useLoading;
