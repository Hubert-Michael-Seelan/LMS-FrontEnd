import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import Homepage from "./pages/Homepage";
import BooksCollection from "./pages/BooksPage";
import Author from "./components/Author";
import AuthorCollection from "./pages/AuthorPage";
import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    title: "",
    author: "",
    isbn: "",
    data: "",
    isEditing: false,
  });

  const [author, setAuthor] = useState([]);
  const [authedit, setAuthEdit] = useState({
    id: "",
    name: "",
    date: "",
    bio: "",
    isEditing: false,
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPassword"  element={<ResetPassword/>}/>
          <Route path="/home" element={<Homepage />} />
          <Route
            path="/Books"
            element={
              Object.keys(edit).length > 0 ? (
                <Books setData={setData} data={data} edit={edit} />
              ) : (
                ""
              )
            }
          />
          <Route
            path="/Author"
            element={
              Object.keys(authedit).length > 0 ? (
                <Author
                  setAuthor={setAuthor}
                  setAuthEdit={setAuthEdit}
                  author={author}
                  authedit={authedit}
                />
              ) : (
                ""
              )
            }
          />
          <Route
            path="/BooksPage"
            element={
              <BooksCollection
                data={data}
                setData={setData}
                edit={edit}
                setEdit={setEdit}
              />
            }
          />
          <Route
            path="/AuthorPage"
            element={
              <AuthorCollection
                author={author}
                setAuthor={setAuthor}
                authedit={authedit}
                setAuthEdit={setAuthEdit}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
