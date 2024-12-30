import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema
const formValidationSchema = z.object({
  email: z.string().email("Invalid email ID"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const FormValidation = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const changehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value }); // Corrected logic to update state
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const result = formValidationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Form Submitted Successfully:", result.data);
    }
  };

  return (
    <div className="w-[300px] border h-auto shadow-md shadow-black mx-auto my-[5%] py-5 px-4 border-pink-600 rounded-md border-[1px]">
      <h1 className="font-bold text-black text-center mb-5 border border-blue-600 p-2 rounded shadow-lg">
        Form Validation Zod
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          name="email"
          onChange={changehandle}
          className="border border-black border-[2px] shadow-md p-2 rounded"
          required
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email[0]}</p>
        )}
        <input
          type="password"
          onChange={changehandle}
          value={formData.password}
          name="password"
          placeholder="Enter your password"
          className="border border-black border-[2px] shadow-md p-2 rounded"
          required
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password[0]}</p>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
