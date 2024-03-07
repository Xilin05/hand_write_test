// 可复用的方法 - 重置内容
function reset(node: Record<string, any>, target: Record<string, any>) {
  node.value = ''
  target.innerHTML = '-'

  return true
}

// ---------- ↓ ↓ ↓ ↓ ↓ 全排列相关的方法 ↓ ↓ ↓ ↓ ↓ ----------
// 输入框 - 失去焦点
function fa_onBlur(
  node: string | Record<string, any>,
  target: Record<string, any>
) {}

// 输入框 - 输入值时
function fa_onInput(
  node: string | Record<string, any>,
  target: Record<string, any>
) {}

// 执行按钮
function execute(node: Record<string, any>, target: Record<string, any>) {
  if (node?.value == '') {
    target.innerHTML = '请输入不重复的字符串'
    return false
  }
  target.innerHTML = com_full_arrangement(node?.value || '')
}

// ----------  ↑ ↑ ↑ ↑ ↑ 全排列相关的方法 ↑ ↑ ↑ ↑ ↑ ----------
