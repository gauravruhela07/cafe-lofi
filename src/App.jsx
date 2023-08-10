import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Content, Footer } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="home-page">
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
