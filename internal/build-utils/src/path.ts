import { resolve } from 'path'

export const projRoot = resolve(__dirname, '../../../')
export const pkgRoot = resolve(projRoot, 'packages')
export const dewRoot = resolve(pkgRoot, 'dew-ui')

export const dewOutput = resolve(projRoot, 'dist')

export const dewPackage = resolve(dewRoot, 'package.json')
