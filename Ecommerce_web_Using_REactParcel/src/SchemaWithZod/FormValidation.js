import React from "react";
import { z } from "zod";

const FormValidation = () => {
  const listingSchema = z.object({
    email: z.string().email("Invalid email id"), // Correct email validation
    password: z
      .string()
      .min(6, "Your password must be at least 6 characters long"), // Correct password validation
  });

  return <div>FormValidation</div>;
};

export default FormValidation;
