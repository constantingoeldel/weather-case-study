import Analytics from 'analytics'
// @ts-ignore
import * as googleAnalytics from '@analytics/google-analytics'

export const analyticsConfig = {
  init: Analytics({
    app: 'Onja Case Study',
    plugins: [
      googleAnalytics({
        trackingId: 'G-RXP7116PJY',
      }),
    ],
  }),
}
