import React from "react";

import { CircularProgress } from "@mui/material";

export default function Loader(props) {
  // const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }
    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='Loader'>
      <CircularProgress disableShrink />
      {/* <CircularProgress variant="determinate" value={progress} color="secondary" /> */}
    </div>
  );
}
