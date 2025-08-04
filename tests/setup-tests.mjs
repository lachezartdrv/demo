let server;

setup(async function () {
  const students = [
    { name: "Steve", email: "steve@gmail.com" },
    { name: "Tina", email: "tina@yahoo.com" }
  ];

  const expressModule = await import('express');
  const httpModule = await import('http');
  const bodyParserModule = await import('body-parser');
  const { setup } = await import('../controllers/students-controller.js');

  const express = expressModule.default;
  const app = express();

  app.set('view engine', 'pug');
  app.use(bodyParserModule.default.urlencoded({ extended: true }));

  setup(app, students);
  server = httpModule.createServer(app);
  server.listen(8080);
});

teardown(async function () {
  if (server && server.close) {
    await server.close();
  }
});
