import { TaskFunction } from 'gulp'
import { buildOutput } from '@vert-ui/build-utils'
import { run } from './process'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name })

export const runTask = (name: string) => withTaskName(`shellTask: ${name}`, () => run(`pnpm run build ${name}`, buildOutput))
