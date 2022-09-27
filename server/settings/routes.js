'use strict'

module.exports = (app) => {
    const productsController = require('./../Controller/ProductsController')
    const commentsController = require('./../Controller/CommentsController')

    app.route('/products').get(productsController.getAll)
    app.route('/products/create').post(productsController.create)
    app.route('/products/update').put(productsController.update)
    app.route('/products/delete/:id').delete(productsController.delete)

    app.route('/comments').get(commentsController.getAll)
    app.route('/comments/create').post(commentsController.create)
    app.route('/comments/delete/:id').delete(commentsController.delete)
}