module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');

    // Create a new article
    app.post('/articles', articles.create);

    // Retrieve all articles
    app.get('/articles', articles.findAll);

    // Retrieve a single Note with articleId
    app.get('/articles/:articleId', articles.findOne);

    // Update a article with articleId
    app.put('/articles/:articleId', articles.update);

    // Delete a article with articleId
    app.delete('/articles/:articleId', articles.delete);
}
