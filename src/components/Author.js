import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Author = ({ author, setAuthor, authedit }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: authedit,

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      date: Yup.date().nullable().required("Required"),

      bio: Yup.string()
        .max(20, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/AuthorPage");
      formik.resetForm();
      if (values.isEditing) {
        let a = [];
        for (let x of author) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        setAuthor(a);
      } else {
        setAuthor([...author, values]);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="conatiner">
        <div className="card">
          <div className="card-header text-center mb-3">Author-Details</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="title">Author-Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter the Author-Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <p>{formik.errors.name}</p> : null}
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

            <div className="form-group">
              <label htmlFor="author">BioGraphy</label>
              <textarea
                id="bio"
                type="text"
                placeholder="Enter the BioGraphy"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
              />
              {formik.errors.bio ? <p>{formik.errors.bio}</p> : null}
            </div>

            <button className="btn btn-primary" type="submit">
              Add the Details
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Author;
