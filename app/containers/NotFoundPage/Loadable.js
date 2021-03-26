/**
 *
 * Asynchronously loads the component for Restaurant
 *
 */

import React from 'react';
import Loadable from 'react-loadable';
import LoadableLoading from 'components/Loader';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <LoadableLoading />,
  render: (loaded, props) => {
    const Component = loaded.default;
    return <Component {...props} />;
  },
});
