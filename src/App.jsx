import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Content, Footer } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-[#d7c8f4]">
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
