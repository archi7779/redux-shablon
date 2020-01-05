import React  from "react";
import { Formik, Field, Form } from 'formik';
import { Input } from 'antd'


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return(
            <Formik
                validateOnChange={true}
                initialValues={{
                    name: '',
                    password: '',
                    repeatPassword: '',
                    email: '',
                    website: '',
                    age: undefined,
                    skills: [],
                    acceptTerms: false,
                }}
                // validationSchema={validationSchema}
                onSubmit={(data, {setSubmitting})=>{
                    setSubmitting(true);
                    const sendDataToServer = async () => {
                        console.log('ejej')
                    };
                    sendDataToServer();
                    setSubmitting(false);
                }}>
                {({values, errors, isSubmitting, handleSubmit, touched})=>(
                    <>
                        <Form className='loginForm'>
                            <div>Registation</div>
                        </Form>
                    </>
                )}
            </Formik>
        );
    }
}