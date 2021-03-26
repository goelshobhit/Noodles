/*
 * Filters Messages
 *
 * This contains all the text for the Filters component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Filters';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sort',
  },
  reset: {
    id: `${scope}.reset`,
    defaultMessage: 'Reset',
  },
});
