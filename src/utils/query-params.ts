import { useSearchParams } from 'react-router-dom';

type addQueryParamFn = (key: string, value: string, options?: { rewrite?: boolean }) => void;

export function useQueryParams(): [{ key: string; value: string }[], addQueryParamFn, (key: string, value?: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const addParam = (key: string, value: string, { rewrite } = { rewrite: false }) => {
    if (rewrite) {
      searchParams.set(key, value);
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  };

  const removeParam = (key: string, value?: string) => {
    if (!value) {
      searchParams.delete(key);
      setSearchParams(searchParams);
      return;
    }

    const params = Array.from(searchParams.entries()).filter(([k, v]) => {
      if (k !== key) return true;
      return v !== value;
    });
    const newSearchParams = new URLSearchParams();
    params.forEach(([k, v]) => {
      newSearchParams.append(k, v);
    });

    setSearchParams(newSearchParams);
  };

  const params = Array.from(searchParams.entries()).map(([key, value]) => ({ key, value }));

  return [params, addParam, removeParam];
}
