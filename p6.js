const {products, colors} = require('./data/arr')

colors.forEach(item => {
    console.log('item =', item)
})

products.forEach((item,key) => {
    console.log('id =', item.id)
    console.log('title =', item.title)
    console.log('price =', item.price)
    console.log('quantity =', item.qnty)
    console.log('desc =', item.desc)
})
