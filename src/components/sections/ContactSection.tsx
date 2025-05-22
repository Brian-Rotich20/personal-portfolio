import React, { useEffect, useState, useRef } from 'react';
import { SendIcon } from 'lucide-react';
interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  return <section id="contact" ref={sectionRef} className="min-h-screen flex items-center py-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto bg-light-300 dark:bg-dark-100 p-8 rounded-lg shadow-lg">
          {isSubmitted ? <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div> : <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-md bg-white dark:bg-dark-200 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-gold`} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-md bg-white dark:bg-dark-200 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-gold`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-4 py-2 rounded-md bg-white dark:bg-dark-200 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-gold`} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-gold text-dark-100 py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center">
                {isSubmitting ? <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span> : <span className="flex items-center">
                    <SendIcon size={18} className="mr-2" />
                    Send Message
                  </span>}
              </button>
            </form>}
        </div>
      </div>
    </section>;
};
export default ContactSection;