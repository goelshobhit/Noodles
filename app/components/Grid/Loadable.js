/**
 *
 * Asynchronously loads the component for Grid
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
