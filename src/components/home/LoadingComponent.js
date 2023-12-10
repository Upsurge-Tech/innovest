import React from "react";
import { BounceLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <div style={styles.container} className='flex flex-col justify-between items-center gp-y-4'>
      <BounceLoader color="#ffffff" size={100} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#000000",
  },
};

export default LoadingComponent;
