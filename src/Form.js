import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


/**Constructor for input
 * const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="checkbox">
            <input type="checkbox" {...field} {...props} />
            {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };**/


const CustomForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                       .min(2, 'Min 2 symbol')
                       .required('Required!'),
                email: Yup.string()
                        .email('Invalid email address')
                        .required('Required!'),
                amount: Yup.number()
                        .required('Required!')
                        .min(5, 'Min 5'),
                currency: Yup.string()
                        .required('Required!'),
                text: Yup.string()
                        .min(10, 'min 10'),
                terms: Yup.boolean()
                        .required('Required!')
                        .oneOf([true], 'Required!')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
            <h2>Send a donation</h2>
            <label htmlFor="name">Your name</label>
            <Field
                id="name"
                name="name"
                type="text" 
            />
            <ErrorMessage className= "error" name="name" component="div"/>
            <label htmlFor="email">Your mail</label>
            <Field
                id="email"
                name="email"
                type="email"  
            />
            <ErrorMessage className= "error" name="email" component="div"/>
            <label htmlFor="amount">Quantity</label>
            <Field
                id="amount"
                name="amount"
                type="number"  
            />
            <ErrorMessage className= "error" name="amount" component="div"/>
            <label htmlFor="currency">Currency</label>
            <Field
                id="currency"
                name="currency"
                as="select">
                    
                    <option value="">Select a currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </Field>
            <ErrorMessage className= "error" name="currency" component="div"/>
            <label htmlFor="text">Your message</label>
            <Field 
                id="text"
                name="text"
                as="textarea"  
            />
            <ErrorMessage className= "error" name="text" component="div"/>
            <label className="checkbox">
                <Field 
                name="terms" 
                type="checkbox" />
                Agree to the Privacy policy?
            </label>
            <ErrorMessage className= "error" name="terms" component="div"/>
            <button type="submit">Send</button>
        </Form>
        </Formik>
    )
}

export default CustomForm;