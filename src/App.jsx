import{BrowserRouter,Routes,Route}from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import AddBook from "./pages/AddBook.jsx";
import NotFound from "./pages/NotFound.jsx";


function App(){
  return(
    <BrowserRouter>
    <Routes>
      {/*Home Page*/}
      <Route path="/" element={<PageWithHeader>
        <Home/>
      </PageWithHeader>}/>

      {/*Books Page*/}
      <Route 
      path="/books" 
      element={   <PageWithHeader>
                            <BrowseBooks />
                        </PageWithHeader>}/>
      
      {/*Browse Categories*/}
      <Route 
      path="/books/:category" 
      element={   <PageWithHeader>
                            <BrowseBooks />
                        </PageWithHeader>}/>

      {/*Book Details*/}
      <Route
      path="/books/:category/:id"
      element={<PageWithHeader><BookDetails/></PageWithHeader>}/>

      {/*Add Book*/}
      <Route
      path="/add-book"
      element={<PageWithHeader><AddBook/></PageWithHeader>}/>

       {/*404 Page*/}
       <Route 
      path="*"
      element={<NotFound/>}/>
  

    </Routes>
    </BrowserRouter> );
}
// Layout with Header
function PageWithHeader({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default App;