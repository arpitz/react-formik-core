import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {

  const initialValues = {
    name: '',
    email: '',
    channel: ''
  };

  const onSubmit = (values) => {
    console.log('form submit data ', values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name)
      errors.name = 'Required';
    if (!values.email)
      errors.email = 'Required';
    else if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i.test(values.email))
      errors.email = 'Invalid email format';
    if (!values.channel)
      errors.channel = 'Required';
    return errors;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('*Required'),
    email: Yup.string().email('Invalid email format').required('*Required'),
    channel: Yup.string().required('*Required')
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //validate
  })

  console.log('visited values : ', formik.touched);

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null
            }
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null
            }
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel" value={formik.values.channel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null
            }
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default YoutubeForm;