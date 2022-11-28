// console.log("pagal");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tutorial of javascript</title>
  </head>
  
  <body>
      <div class="container">
      <div id="heading">
          <h1>
          This is heading
      </h1>
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur accusantium voluptas suscipit earum voluptatum? Quis ducimus cum fuga facilis, aliquam expedita nisi adipisci laudantium odio beatae laboriosam ipsa. Ratione magnam dolorem fuga odio quae debitis et! Consequuntur temporibus similique eos quasi ab provident repellendus quidem animi nesciunt at? Reprehenderit, omnis.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium numquam enim, eius neque in cum temporibus alias, odio explicabo suscipit tenetur placeat? Quos, soluta, amet ut vitae similique quibusdam in, perferendis sapiente velit optio commodi ipsa. Eaque ad ab soluta. Odit excepturi ullam atque, laborum quia queius quibusdam quis corrupti tempora laudantium laborum adipisci et necessitatibus 
      <script src="tut11.js"></script>
  </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});