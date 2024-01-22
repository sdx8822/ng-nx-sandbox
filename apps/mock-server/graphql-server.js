const express = require('express');
const cors = require('cors');
const jsonGraphqlExpress = require('json-graphql-server').default;
const ip = require('ip');
const db = require('./db');

const PORT = 3300;
const IP = ip.address();
const app = express();

app.use(
    jsonGraphqlExpress.rewriter({
        '/graphql/*': '/$1'
    })
);

app.use(cors());
app.use('/graphql', jsonGraphqlExpress(db));

app.listen(PORT, () => {
  console.log(`GraphQL server is running on http://${IP}:${PORT}`);
});