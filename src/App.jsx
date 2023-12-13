import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Siswa from "./Pages/Siswa";
import Login from "./Pages/Login";
import NotFoud from "./Pages/Errors/NotFoud";
import Default from "./Layouts/Default";
import SiswaDetail from "./Pages/SiswaDetail";
import SiswaAdd from "./Pages/SiswaAdd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Default>
                <Home />
              </Default>
            }
          />
          <Route
            path="/siswa"
            element={
              <Default>
                <Siswa />
              </Default>
            }
          />
          <Route
            path="/siswa/:idsiswa"
            element={
              <Default>
                <SiswaDetail />
              </Default>
            }
          />
          <Route
            path="/siswa/add"
            element={
              <Default>
                <SiswaAdd />
              </Default>
            }
          />
          <Route
            path="/login"
            element={
              <Default>
                <Login />
              </Default>
            }
          />
          <Route
            path="*"
            element={
              <Default>
                <NotFoud />
              </Default>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
