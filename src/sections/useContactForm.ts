import React, { useState } from 'react';

export const useContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  // Error state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email:
        !formData.email.trim() ||
        !formData.email.includes('@') ||
        !formData.email.includes('.'),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Send form data to the server
      setIsSubmitting(true);

      try {
        const response = await fetch(
          'https://3cddy1zq60.execute-api.us-west-1.amazonaws.com/prod/portfolio/contact',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          setShowSuccess(true); // Reset form after 3 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              message: '',
              phone: '',
            });
            setShowSuccess(false);
          }, 3000);
        } else {
          console.error('Error submitting form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    showSuccess,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
