const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  state = { index: true, products: false, login: false, basket: false };
  head = { title: "Home", description: "Home page", keywords: "pc, gaming, home" };
  res.render('index', { state, head });
});

app.get('/products', (req, res) => {
  state = { index: false, products: true, login: false, basket: false };
  head = { title: "Products", description: "Our products", keywords: "products, pcs" };
  res.render('products', { state, head });
});

app.get('/login', (req, res) => {
  state = { index: false, products: false, login: true, basket: false };
  head = { title: "Login", description: "Login page", keywords: "login" };
  res.render('login', { state, head });
});

app.get('/basket', (req, res) => {
  state = { index: false, products: false, login: false, basket: true };
  head = { title: "Basket", description: "Your basket", keywords: "basket, cart" };
  res.render('basket', { state, head });
});

app.get('/thankyou', (req, res) => {
  const { name, email, message } = req.query;
  state = { index: false, products: false, login: false, basket: false, thankyou: true };
  head = { title: "Thank You" };
  res.render('thankyou', { state, head, name, email, message });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
