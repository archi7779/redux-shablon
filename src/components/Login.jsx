import React  from "react";
import { Formik, Field, Form } from 'formik';
import { Input, Button} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';



const mapStateToProps = (state) => {
    const props = {
        text: state.text,
    };
    return props;
};

const actionCreators = {
    updateNewTaskText: actions.updateNewTaskText,
    addTask: actions.addTask,
};

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
                    password: '',
                    email: '',
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
                        <Field name='email' type='input'  as={Input}  placeholder='enter ur email'/>
                        <Field name='password' type='input'  as={Input}  placeholder='enter ur password'/>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form>
                    </>
                )}
            </Formik>
        );
    }
}
