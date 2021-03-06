import Prism from "prismjs";
import "prism-svelte";

export const source = `
  <script>
    import { Form, Field, ErrorMessage } from "svelte-forms-lib";
    import yup from "yup";

    const formProps = {
      initialValues: { name: "", email: "" },
      validationSchema: yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .email()
          .required()
      }),
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    };
  </script>

  <Form {...formProps}>
    <label>title</label>
    <Select name="title">
      <option />
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Mx.</option>
    </Select>
    <ErrorMessage name="title" />

    <label>name</label>
    <Field name="name" />
    <ErrorMessage name="name" />

    <label>email</label>
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <button type="submit">submit</button>
  </Form>
`;

export const highlight = Prism.highlight(
  source,
  Prism.languages.svelte,
  "svelte"
);
