module.exports = function(app) {
    app.get("/news", function(request, response) {

        
        connection.query('select * from news', function(error, result) {
            response.render("admin/news", {news: result});
        });
    });
}