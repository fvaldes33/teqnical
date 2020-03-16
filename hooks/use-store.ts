import { useEffect, useState } from "react";
import BaseStore from "../stores/base";

export function useStore<R>(store: BaseStore<R>): R {
  const [state, setState] = useState<R>(store.state);

  useEffect(
    () => {
      let mounted = true;
      console.log('useStore -> useEffect -> sub', store.key);
      const sub = store.state$.subscribe({
        next: (state: any) => {
          if (!mounted) { return; }
          setState(state);
        },
      });

      return () => {
        mounted = false;
        console.log('useStore -> useEffect -> unsub', store.key);
        sub.unsubscribe();
      }
    },
    [store]
  );

  return state;
};
