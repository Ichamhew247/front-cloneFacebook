import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className=" ">
        <Router />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
