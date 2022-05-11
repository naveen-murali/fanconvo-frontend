import { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { SignupTypes, SignupBtns, SignupInputs } from './signupData';
import { useForm } from 'react-hook-form';
import { axiosConfig, APIS } from '../../apis';

interface StatusModel {
    loading: boolean;
    error: string[];
    success: boolean;
}

const SignupBody = () => {
    const [status, setStatus] = useState({ loading: false, error: [], success: false } as StatusModel);
    const [select, setSelect] = useState(SignupTypes.FAN);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const signupSubmitHandler = async (data: any) => {

        try {
            setStatus(prev => ({ ...prev, loading: true }));
            await axiosConfig.post(APIS.SIGNUP, data);
            setStatus(prev => ({ ...prev, loading: false, success: true }));
        } catch (err: any) {
            console.log(err);
            const message = err.response && err.response.data.error
                ? err.response.data.error
                : err.message;
            setStatus(prev => ({ ...prev, loading: false, error: message }));
        }

    };

    const closeHandler = () => {
        setStatus(prev => ({ ...prev, error: [], success: false }));
    };

    const toggleSignup = (type: SignupTypes) => {
        closeHandler();
        setSelect(type);
    };

    return (
        <Container className='mt-5'>
            <Row className="fanco-content-wrapper">
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <div className='signup-toggle-wrapper'>
                        {SignupBtns.map(btn =>
                            <button key={btn.type}
                                onClick={() => toggleSignup(btn.type)}
                                className={select === btn.type ? "signup-btn" : "signup-btn disable"}>
                                {btn.content}
                            </button>)}
                    </div>
                </Col>


                <Col xs={12} className="d-flex flex-column align-items-center mt-3">
                    <p className='tag-line mb-1'>create your {select} account</p>
                </Col>


                <Col xs={12} className="d-flex flex-column align-items-center mt-3">
                    {
                        status.loading
                        && <Spinner animation="border" role="status" variant="success">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                    {
                        status.error
                        && status.error.map(err =>
                            <Alert variant="danger" onClose={closeHandler} dismissible>
                                {err}
                            </Alert>)
                    }
                    {
                        status.success
                        && <Alert variant="success" onClose={closeHandler} dismissible>
                            Your {select} account has been created
                        </Alert>
                    }
                </Col>


                <Col xs={12} className="d-flex flex-column align-items-center">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col md={5}>
                                <Form onSubmit={handleSubmit(signupSubmitHandler)}>
                                    {
                                        SignupInputs.map(input => (
                                            <Form.Group key={input.name} className="mt-4">
                                                <Form.Label muted
                                                    htmlFor={input.name}
                                                    className='form-label m-0 p-0'>{input.label}</Form.Label>
                                                {input.type !== "select"
                                                    ? <Form.Control
                                                        type={input.type}
                                                        id={input.name}
                                                        aria-describedby={input.name}
                                                        className={errors[input.name] ? 'form-input error p-3' : 'form-input p-3'}
                                                        placeholder={input.placeholeder}
                                                        {...register(input.name, input.validation)} />
                                                    : <Form.Control
                                                        as="select"
                                                        id={input.name}
                                                        aria-describedby={input.name}
                                                        className={errors[input.name] ? 'form-input error p-3' : 'form-input p-3'}
                                                        placeholder={input.placeholeder}
                                                        {...register(input.name, input.validation)}>
                                                        {input.options?.map(value =>
                                                            <option key={value} value={value}>{value}</option>)}
                                                    </Form.Control>}

                                                {errors[input.name] && errors[input.name].type === "required"
                                                    ? <p className="text-danger m-0 p-0" >
                                                        *{input.name} is required
                                                    </p>
                                                    : errors[input.name] && errors[input.name].type === "pattern"
                                                        ? <p className="text-danger m-0 p-0" >
                                                            Invalied email address
                                                        </p>
                                                        : ""}
                                            </Form.Group>))
                                    }

                                    <div className="w-100 d-flex justify-content-center mt-5">
                                        <Form.Group>
                                            <Form.Check
                                                type="checkbox"
                                                id="aggrement"
                                                className="text-white"
                                                {...register("aggrement", { required: true })}
                                                label={<div className='m-0 p-0'>
                                                    I agree to the{" "}
                                                    <a href="/" className='text-success'>Terms and Conditions.</a>
                                                </div>}
                                            />
                                            {errors["aggrement"] && errors["aggrement"].type === "required"
                                                ? <p className="text-danger m-0 p-0" >
                                                    *Agree to the Terms and Conditions.
                                                </p>
                                                : ""
                                            }
                                        </Form.Group>
                                    </div>

                                    <div className="w-100 d-flex justify-content-center mt-3">
                                        <button style={{ paddingLeft: "5rem", paddingRight: "5rem", fontSize: "22px" }}>
                                            sign up
                                        </button>
                                    </div>

                                    <div className="w-100 d-flex justify-content-center mt-2 text-white">
                                        Already have an account?
                                        <a href="/" className='mx-1 text-success'>Log in </a>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};


export default SignupBody;