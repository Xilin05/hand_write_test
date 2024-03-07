function com_full_arrangement(string: string): string[] {
  const result: string[] = []
  const map = new Map()
  const dfs = (path: string) => {
    if (path.length === string.length) {
      result.push(path)

      return
    }

    for (let i = 0; i < string.length; i++) {
      if (map.get(string[i])) continue

      map.set(string[i], true)
      path += string[i]

      dfs(path)
      path = path.substring(0, path.length - 1)
      map.set(string[i], false)
    }
  }

  dfs('')

  return result
}

function com_instanceof(target: any, Fn: () => {}) {
  if (
    (typeof target !== 'object' && typeof target !== 'function') ||
    target === null
  )
    return false

  let proto = target.__proto__

  while (true) {
    if (proto === null) return false
    if (proto === Fn.prototype) return true

    proto = proto.__proto__
  }
}
// function A(): void {}
// const a = new (A as any)()

// export = { com_full_arrangement, com_instanceof }
