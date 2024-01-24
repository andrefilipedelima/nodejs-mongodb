module.exports = function(app) {

    app.get('/api/person:id', function(req, res) {
        // get person data from database
        res.json({ firstname: 'John', lastname: 'Doe' });
    });
    
    app.post('/api/person', function(req, res) {
        // save person data to the database
    });
    
    app.delete('/api/person/:id', function(req, res) {
        // delete person data from the database
    });

}