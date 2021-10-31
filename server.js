const express = require("express");
const path = require("path");
const { renderToString } = require("react-dom/server");
const { Helmet } = require("react-helmet");
const App = require("./src/App");

const port = parseInt(process.env.PORT || "14000");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  const prerenderedApp = renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const html = `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">
        ${prerenderedApp}
      </div>
      </body>
  </html>
`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
