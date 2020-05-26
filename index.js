const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const patterns = require('./database/patterns');

const app = express();

app.disable('etag');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello world!'
    });
});

app.get('/patterns', (req, res) => {
    patterns.getAll().then((patterns) => {
        res.json({patterns});
    });
});

app.get('/patterns/:id', (req, res) => {
  patterns.getOne(req.params.id).then((pattern) => {
    res.json({pattern});
  });
});

app.post('/patterns', (req, res) => {
    console.log(req.body);
    patterns.create(req.body).then((pattern) => {
        res.json(pattern);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
