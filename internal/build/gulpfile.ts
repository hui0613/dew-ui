import * as path from 'path'
import { copy, copyFile } from 'fs-extra'
import { buildOutput, dewPackage, dewOutput, projRoot } from '@vert-ui/build-utils'
import { withTaskName } from './utils/gulp'
import { series, parallel, TaskFunction } from 'gulp'

import { buildModules, generateTypes } from './tasks'
import { run } from './utils/process'
import { buildConfig, Module } from './build-info'

export const copyFiles = () =>
  Promise.all([
    copyFile(dewPackage, path.resolve(dewOutput, 'package.json')),
    copyFile(path.resolve(projRoot, 'global.d.ts'), path.resolve(dewOutput, 'global.d.ts')),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')

  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes: ${module}`, () => copy(src, buildConfig[module].output.path, { recursive: true }))

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  buildModules,
  generateTypes,
  parallel(copyTypesDefinitions, copyFiles)
)
