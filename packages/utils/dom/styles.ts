import { isString } from '@vue/shared'

/**
 * 监听元素的变化，改变元素的宽度
 * @param minWidth 最小宽度
 * @param maxWidth 最大宽度
 */
export function observeEleRect(minWidth: number | string, maxWidth: number | string): MutationObserver {
  let minW = parseNumber(minWidth),
    maxW = parseNumber(maxWidth)
  const observer = new MutationObserver((mutationsList, observe) => {
    const target = mutationsList[0] ? (mutationsList[0].target as HTMLElement) : null
    if (!target) {
      return false
    }

    if (target.clientWidth < minW) {
      target.style.width = minW + 'px'
    } else if (target.clientWidth > maxW) {
      target.style.width = `${maxW}px`
    }
  })
  return observer
}

function parseNumber(val: string | number): number {
  if (isString(val)) {
    try {
      return parseFloat(val)
    } catch (e: any) {
      return 0
    }
  } else {
    return val
  }
}
