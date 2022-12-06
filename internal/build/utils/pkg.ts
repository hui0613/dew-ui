import { buildConfig, Module } from '../build-info'

export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replace(/@vert-ui\//g, 'vert-ui/es/')
    id = id.replace(/@vert-ui\/theme-chalk\/src/, 'vert-ui/theme-chalk')
    return id
  }
}
