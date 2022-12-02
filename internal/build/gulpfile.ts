import { series, parallel } from 'gulp'

import { buildModules, generateTypes } from './tasks'

export default series(generateTypes)
