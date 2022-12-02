import type { ModuleFormat } from 'rollup'
import * as path from 'path'
import { dewOutput } from '@dew-ui/build-utils'

export const modules = ['esm', 'cjs'] as const

export type Module = typeof modules[number]

export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    name: string
    path: string
  }
  bundle: {
    path: string
  }
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(dewOutput, 'es'),
    },
    bundle: {
      path: `dew-ui/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(dewOutput, 'lib'),
    },
    bundle: {
      path: `dew-ui/lib`,
    },
  },
}

export const buildConfigEntries = Object.entries(buildConfig) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
export type BuildConfigEntries = [Module, BuildInfo][]
