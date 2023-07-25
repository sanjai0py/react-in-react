// import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";

function App() {
  return (
    // <Navbar/>
    <>
      <MainPage />
      <SubPage
        mainText="Create user interfaces from components"
        mainContentTop="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
        mainContentBtm="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
        alt="alt"
      />
      <SubPage
        mainText="Write components with code and markup"
        mainContentTop="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
        mainContentBtm="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
      />
      <SubPage
        mainText="Add interactivity wherever you need it"
        mainContentTop="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
        mainContentBtm="react lets you build user interfaces out of individual pieces called components. create your own react components like thumbnail, likebnt and views."
        alt="alt"
      />
    </>
  );
}

export default App;
