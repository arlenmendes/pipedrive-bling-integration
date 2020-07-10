const app = require('./src/config/express');

const port = app.get('port');

app.listen(port, () => {
  console.log(`App running in port: ${port} for ${process.env.NODE_ENV}`);
});
