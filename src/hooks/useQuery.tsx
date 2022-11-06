import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface UseQueryReturningValues<T> {
  status: "loading" | "error" | "iddle";
  data: T | undefined;
  refetch: () => void;
}

export function useQuery<T>(
  fn: (token: string) => Promise<T>
): UseQueryReturningValues<T> {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = React.useState<T>();
  const [status, setStatus] =
    React.useState<"loading" | "error" | "iddle">("loading");

  const fetch = React.useCallback(async () => {
    setStatus("loading");
    getAccessTokenSilently()
      .then(fn)
      .then((data) => {
        setStatus("iddle");
        setData(data);
      })
      .catch((e) => {
        setStatus("error");
      });
  }, [fn, getAccessTokenSilently]);

  React.useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, status, refetch: fetch };
}
