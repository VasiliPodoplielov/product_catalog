import React, {useState} from 'react';
import {Formik, Form, Field, useField, useFormikContext} from 'formik';
import DatePicker from "react-datepicker";
import {useSelector} from "react-redux";
import {fieldErrors} from './ProductEditConstants';
import {Redirect} from "react-router-dom";
import './ProductEdit.css';
import "react-datepicker/dist/react-datepicker.css";

const ProductEdit = () => {
  // let userEmail = useSelector(state => state.authReducer.userEmail);

  // if (!userEmail) {
  //   return (
  //       <Redirect to='/' />
  //   )
  // }

  const [startDate, setStartDate] = useState('');

  const validation = {
    textField: (value, options) => {
      const {require, minLength, maxLength} = options;
      if (require && !value) {
        return fieldErrors.require;
      }
      if (value.length < minLength) {
        return fieldErrors.tooShort(minLength);
      }
      if (value.length > maxLength) {
        return fieldErrors.tooLong(maxLength);
      }
    },
    number: (value, options) => {
      const {require, integer, minValue, maxValue} = options;
      if (integer && value && (value ^ 0) !== value) {
        return fieldErrors.mustBeInteger
      }
      if (require && !value) {
        return fieldErrors.require;
      }
      if (value > maxValue) {
        return fieldErrors.tooBig(maxValue);
      }
      if (value < minValue) {
        return fieldErrors.tooSmall(minValue);
      }
    },
    date: (value, options) => {
      const {require} = options;
      if (require && !value) {
        return fieldErrors.require;
      }
    }
  };

  const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <div className='price__item price__item-date'>
          <label htmlFor={props.id}>{props.label}</label>
          <DatePicker
              {...field}
              {...props}
              selected={(field.value && new Date(field.value)) || null}
              onChange={val => {
                setFieldValue(field.name, val);
              }}
              validate={value => validation.date(value, {
                require: true
              })}
          />
        </div>
    );
  };

  return (
      <div className='edit__wrapper'>
        <div className="container">
          <h1>Редактирование товара</h1>

          <Formik
              initialValues={{
                title: '',
                description: '',
                image: '',
                price: '',
                sale: '',
                date: ''
              }}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}
          >
            {({ errors, touched, values }) => (
                <Form className='edit__form'>
                  <label htmlFor="title">Название</label>
                  <Field
                      name="title"
                      id='title'
                      className={`form-control ${errors.title && touched.title ? 'border-red' : ''}`}
                      validate={(value) => validation.textField(value, {
                        require: true,
                        minLength: 20,
                        maxLength: 60
                      })} />
                  {errors.title && touched.title && <p className='text-danger'>{errors.title}</p>}

                  <label htmlFor="description">Описание</label>
                  <Field
                      name="description"
                      id='description'
                      className={`form-control ${errors.description && touched.description ? 'border-red' : ''}`}
                      validate={(value) => validation.textField(value, {
                        maxLength: 60
                      })} />
                  {errors.description && touched.description && <p className='text-danger'>{errors.description}</p>}

                  <label htmlFor="image">Изображение</label>
                  <Field
                      type='file'
                      name="image"
                      id='image'
                      className='form-control-file'
                      validate={(value) => validation.textField(value, {
                        require: true
                      })} />
                  {errors.image && touched.image && <p className='text-danger'>{errors.image}</p>}

                  <div className="price__block">
                    <div className="price__item">
                      <label htmlFor="price">Цена</label>
                      <Field
                          type='number'
                          name="price"
                          id='price'
                          className={`form-control form__price ${errors.price && touched.price ? 'border-red' : ''}`}
                          validate={(value) => validation.number(value, {
                            require: true,
                            maxValue: 99999999.99
                          })} />
                      {errors.price && touched.price && <p className='text-danger'>{errors.price}</p>}
                    </div>

                    <div className="price__item">
                      <label htmlFor="sale">Скидка</label>
                      <Field
                          type='number'
                          name="sale"
                          id='sale'
                          className={`form-control form__sale ${errors.sale && touched.sale ? 'border-red' : ''}`}
                          validate={value => validation.number(value, {
                            require: true,
                            integer: true,
                            minValue: 10,
                            maxValue: 90
                          })} />
                      {errors.sale && touched.sale && <p className='text-danger'>{errors.sale}</p>}
                    </div>

                    <div className="price__item price__item-date">
                      <label htmlFor="date">Дата окончания скидки</label>
                        <DatePicker
                            dateFormat="yyyy.MM.dd"
                            minDate={new Date()}
                            name='date'
                            id='date'
                            className={`form-control ${errors.date && touched.date ? 'border-red' : ''}`}
                            validate={value => validation.date(value, {
                              require: true
                            })}
                            selected={startDate}
                            value={values.date}
                        />
                      {errors.date && touched.date && <p className='text-danger'>{errors.date}</p>}
                    </div>

                  {/*  <DatePickerField*/}
                  {/*      name="date"*/}
                  {/*      id='date'*/}
                  {/*      className='form-control'*/}
                  {/*      label='Дата окончания акции' />*/}
                  </div>



                  <button type="submit" className='btn btn-primary'>Сохранить</button>
                </Form>
            )}
          </Formik>
        </div>
      </div>
  );
};

export default ProductEdit;
