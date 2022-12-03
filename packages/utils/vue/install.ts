import type { SFCWithInstall } from './typescript'
import type { App } from 'vue'
// 这个地方需要引入 @vue/shard ， 在生成 .d.ts 声明文件时才不会报错
import type { NOOP } from '@vue/shared'

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }
  return main as SFCWithInstall<T> & E
}
