let dv1 = dom.create('<div>zaima?</div>')
let a1 = window.a1
window.dom.append(a1, dv1)
console.log(a1)
console.log(dv1)
let dv1Parent = dom.create("<div id='dv1Parent'></div>")
dom.wrap(dv1, dv1Parent)

//removeEventListener无法删除绑定的匿名函数
console.log(dom.attr(a1, 'id'))
dom.on(window, 'click', fn)
dom.off(window, 'click', fn)
function fn() {
  alert('buzai,cnm')
}
// window.addEventListener('click', fn)
// window.removeEventListener('click', fn)

let divList = dom.find('.red')
console.log(divList)
dom.each(divList, (nodes) => {
  dom.class.remove(nodes, 'red')
  dom.class.add(nodes, 'pink')
})

let x = dom.create('<div>before<div>')
dom.before(a1, x)
