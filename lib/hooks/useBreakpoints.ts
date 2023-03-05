import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import { lgQuery, mdQuery } from 'lib/styles/mq';

type Breakpoints = { sm: boolean; md: boolean; lg: boolean };

export function useBreakpoints(fn?: (bp: Breakpoints) => void): Breakpoints {
  const md = useMediaQuery(mdQuery);
  const lg = useMediaQuery(lgQuery);

  useEffect(() => {
    fn?.({ sm: true, md, lg });
  }, [md, lg]);

  return { sm: true, md, lg };
}
