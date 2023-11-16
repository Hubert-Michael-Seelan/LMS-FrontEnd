import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Books = ({ data, setData, edit }) => {
  const navigate = useNavigate();
  console.log("booksmodule", data);
  const formik = useFormik({
    initialValues: edit,

    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      author: Yup.string()
        .max(20, "Must be 10 characters or less")
        .required("Required"),
      isbn: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      date: Yup.date().nullable().required("Required"),
    }),
    onSubmit: (values) => {
      values["isbn"] = Number(values.isbn);
      console.log(values);
      navigate("/BooksPage");
      formik.resetForm();

      if (values.isEditing) {
        let a = [];
        for (let x of data) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        setData(a);
        console.log("updatedvalue", data);
      } else {
        setData([...data, values]);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="conatiner">
        <div className="card">
          <div className="card-header text-center mb-3">Book</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter the Book Title"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title ? <p>{formik.errors.title}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                id="author"
                type="text"
                placeholder="Enter the Author"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
              />
              {formik.errors.author ? <p>{formik.errors.author}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="number">ISBN Number</label>
              <input
                id="isbn"
                type="number"
                placeholder="Enter the ISBN-Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isbn}
              />
              {formik.errors.isbn ? <p>{formik.errors.isbn}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="date">Publication Date</label>
              <input
                id="date"
                type="date"
                placeholder="Enter the Date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.errors.date ? <p>{formik.errors.date}</p> : null}
            </div>

            <button className="btn btn-primary" type="submit">
              Add the Book
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Books;
