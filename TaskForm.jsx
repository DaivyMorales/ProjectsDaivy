import React, { useRef } from "react";
import { Levels } from "../../Models/levels.enum";
import { Task } from "../../Models/task.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

  // En el Field del formulario, nose como obtener el valor y por tal razon me crea la tarea pero con el name y la descripcion en 'undefined'

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(Levels.normal);

  function addTask(e) {
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );

    add(newTask);
  }

  const initialValues = {
    name: "",
    description: "",
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string().required("Necesitas ponerle un nombre a tu tarea"),
    description: Yup.string().required(
      "Es necesario que pongas alguna descripcion para la tarea"
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 2000));
        addTask();
        alert(JSON.stringify(values, null, 2));
        console.log(nameRef.current.value)
      }}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
        <Form>
          <div>
            <Field
              ref={nameRef}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div" />
            )}
            <br />
            <br />
            <Field
              ref={descriptionRef}
              id="description"
              name="description"
              type="text"
              placeholder="Description"
            />
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div" />
            )}

            <br />
            <br />

            <label htmlFor="selectLevel">Priority</label>
            <select
              ref={levelRef}
              defaultValue={Levels.normal}
              id="selectLevel"
            >
              <option value={Levels.normal}>Normal</option>
              <option value={Levels.urgent}>Urgent</option>
              <option value={Levels.blocking}>Blocking</option>
            </select>
          </div>
          <br />
          <button className="bg-blue-500" type="submit">
            Add
          </button>
          {isSubmitting ? <p>Sending your credential</p> : null}
        </Form>
      )}
    </Formik>
  );
};

// TaskForm.propTypes = {
//   add: PropTypes.func.isRequired,
// };

export default TaskForm;
