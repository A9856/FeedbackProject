
export function  validateForm(data) {
  const errors = {};

  for (const field in data) {
    switch (field) {
      case "name":
        if (!data.name.trim()) {
          errors.name = "Name is required";
        }
        break;

      case "email":
        if (!data.email.trim()) {
          errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.email = "Invalid email format";
        }
        break;

      case "phone":
        if (!data.phone.trim()) {
          errors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(data.phone)) {
          errors.phone = "Phone must be 10 digits";
        }
        break;

      case "feedback":
        if (!data.feedback.trim()) {
          errors.feedback = "Feedback is required";
        }
        break;

      default:
        break;
    }
  }

  return errors;
};