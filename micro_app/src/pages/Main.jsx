import React, {useEffect} from 'react';

// @ts-ignore
const CircleLoading = React.lazy(() => import("omsReact/CircleLoading"))
const Main = ({}) => {
  return (<>
    <React.Suspense fallback="Loading...">
      <CircleLoading/>
    </React.Suspense>
  </>);
};

Main.propTypes = {

};

export default Main;
