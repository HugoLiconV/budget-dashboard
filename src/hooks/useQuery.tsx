import React from "react";

interface UseQueryReturningValues<T> {
  status: "loading" | "error" | "iddle";
  data: T | undefined;
}

export function useQuery<T>(fn: () => Promise<T>): UseQueryReturningValues<T> {
  const [data, setData] = React.useState<T>();
  const [status, setStatus] = React.useState<"loading" | "error" | "iddle">(
    "loading"
  );

  React.useEffect(() => {
    setStatus("loading");
    fn()
      .then(data => {
        setStatus("iddle");
        setData(data);
      })
      .catch(() => setStatus("error"));
  }, []);

  return { data, status };
}
