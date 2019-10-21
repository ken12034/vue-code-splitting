

// import Cat from './cat.js'
// Cat.meow();

const getCat = () => import('./cat.js')
// later in the code as a response to some user interaction like click or route change
getCat().then((cat) => {
  const fn = cat.default;
  fn.meow();
});
