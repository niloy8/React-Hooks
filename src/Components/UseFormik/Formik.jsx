import { useFormik } from "formik";
const Formik = () => {
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                password: ""
            },
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" })

            }
        }
    )

    return (
        <div>
            <form action="#" onSubmit={formik.handleSubmit}>
                <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />

                <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                <br />
                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Formik;