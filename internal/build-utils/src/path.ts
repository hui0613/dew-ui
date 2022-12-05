import { resolve } from 'path'

export const projRoot = resolve(__dirname, '../../../')
export const pkgRoot = resolve(projRoot, 'packages')
export const dewRoot = resolve(pkgRoot, 'vert-ui')

export const buildOutput = resolve(projRoot, 'dist')
export const dewOutput = resolve(buildOutput, 'vert-ui')

export const dewPackage = resolve(dewRoot, 'package.json')
