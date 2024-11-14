import './basic-form.scss';

import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const EMAIL_REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

const VALIDATIONS = Yup.object().shape({
    name: Yup.string().required('Required.'),
    email: Yup.string().matches(EMAIL_REGEX, 'Invalid Email.').required('Required.'),
    password: Yup.string()
        .matches(
            PASSWORD_REGEX,
            'Passwords must be at least 8 characters long, including 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.',
        )
        .required('Required.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match.')
        .required('Required.'),
});

const BasicForm = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    });

    const submitForm = (values: any) => {
        console.log('submit');
    };

    return (
        <main className="basic-form">
            <h1 className="mb-8">
                Basic Form with{' '}
                <a className="link" href="https://formik.org/" target="_blank">
                    Formik
                </a>
            </h1>

            <section className="border-panel max-w-3xl mx-auto">
                <Formik
                    initialValues={formValue}
                    onSubmit={(values) => submitForm(values)}
                    validationSchema={VALIDATIONS}>
                    {({ errors, touched }) => (
                        <Form className="form-wrapper !w-full">
                            <section className="mb-12">
                                <h1 className="font-normal">Hi,</h1>
                                <h2>My Name Is</h2>

                                <div className={`basic-input-group ${errors.name && touched.name ? 'err' : ''}`}>
                                    <Field name="name" placeholder="Enter Name Here.." type="text"></Field>
                                </div>
                            </section>

                            <section className="mb-12 text-right">
                                <h2>You may reach me at</h2>

                                <div className={`basic-input-group ${errors.email && touched.email ? 'err' : ''}`}>
                                    <Field name="email" placeholder="Enter Email Here.." type="email"></Field>
                                </div>
                            </section>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
};

export default BasicForm;
