"use strict";
// 可复用的方法 - 重置内容
function reset(node, target) {
    node.value = '';
    target.innerHTML = '-';
    return true;
}
// ---------- ↓ ↓ ↓ ↓ ↓ 全排列相关的方法 ↓ ↓ ↓ ↓ ↓ ----------
// 输入框 - 失去焦点
function fa_onBlur(node, target) { }
// 输入框 - 输入值时
function fa_onInput(node, target) { }
// 执行按钮
function execute(node, target) {
    if ((node === null || node === void 0 ? void 0 : node.value) == '') {
        target.innerHTML = '请输入不重复的字符串';
        return false;
    }
    target.innerHTML = com_full_arrangement((node === null || node === void 0 ? void 0 : node.value) || '');
}
// ----------  ↑ ↑ ↑ ↑ ↑ 全排列相关的方法 ↑ ↑ ↑ ↑ ↑ ----------
