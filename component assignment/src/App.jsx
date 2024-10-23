import { useState } from 'react';
import Header from './Components/ComponentUI';
import image from './assets/image1.jpg';
import ProductForm from './Components/Orderform';


const App = () => {
  return (
    <div>
      <Header title="Welcome to product page!" image={image} />
      <ProductForm />
    </div>
  );
};

export default App;