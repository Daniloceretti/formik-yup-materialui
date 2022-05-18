import { Container, Form, Button } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: ""
    },
    validationSchema:Yup.object({
        name:Yup.string().required("El nombre es obligatorio"),
        email:Yup.string().email("No es un email valido").required("El email es obligatorio"),
        password:Yup.string().required("Agregar Password").oneOf([Yup.ref("repeatPassword")],"Las password no son iguales"),
        repeatPassword:Yup.string().required("Repetir Password").oneOf([Yup.ref("password")],"Las password no son iguales")
    }),
    onSubmit: (formData) => {
      console.log(formData)
    }
  })

  return (
    <Container
      style={{
        backgroundColor: "yellow",
        textAlign: 'center',
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{}}>Formulario de Registro</h1>
      <Form style={{ width: "30%"}} onSubmit={formik.handleSubmit}>
        <Form.Input
        style={{paddingBottom:"15px",fontsize:"20px"}}
          type="text"
          placeholder="Nombre y Apellido"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />

        {/* en errror al agregarle los && el input queda en rojo hasta que lo completo */}
        <Form.Input
        style={{paddingBottom:"15px", paddingTop:"10px"}}
          type="text"
          placeholder="Correo electronico"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input
         style={{paddingBottom:"15px", paddingTop:"10px"}}
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Form.Input
         style={{paddingBottom:"5px", paddingTop:"10px"}}
          type="password"
          placeholder=" Repeat Password"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
          value={formik.values.repeatPassword}
        />
        <Button type="submit" style={{margin:"15px", cursor: "pointer"}}>Registro</Button>
        <Button type="button" style={{margin:"15px", cursor: "pointer"}} onClick={formik.handleReset}>Borrar Formulario</Button>
      </Form>
    </Container>
  );
}

export default App;
