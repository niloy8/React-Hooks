import { useFormik } from "formik";
import * as yup from "yup"
const Formik = () => {
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                password: ""
            },
            validationSchema: yup.object({
                name: yup.string().min(2, "Name at least have 2 characters").required(),
                emial: yup.string().email().required(),
                password: yup.string().min(6, "At least 6 character").required(),
            }),
            onSubmit: (values, { resetForm }) => {
                console.log(values);

                resetForm({ values: "" })
            }
        }
    )
    const onFocus = e => {
        console.log(e.target.name);
        const span = document.getElementById('span')
        const targetname = e.target.name
        const s = formik.errors[targetname] && <span>{formik.errors[targetname]}</span>
        span.appendChild(s)
        console.log(s);

    }
    return (
        <div>
            <form action="#" onSubmit={formik.handleSubmit}>
                <input type="text" onFocus={onFocus} name="name" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name && <span id="span">{formik.errors.name}</span>}
                <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                <span id="span"></span>
                <br />
                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Formik;