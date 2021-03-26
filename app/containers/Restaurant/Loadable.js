/**
 *
 * Asynchronously loads the component for Restaurant
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
