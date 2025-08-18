import React, { useState } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  service: string;
  source: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    source: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Къртене на бани',
    'Къртене на стени',
    'Къртене на подове',
    'Къртене на бетон',
    'Събаряне на сгради',
  ];

  const sources = [
    'Google',
    'Facebook',
    'Instagram',
    'Препоръка от приятел',
    'Друго',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.eu2.make.com/6cbwq3gd5i6yr4mi8c7e7hwfgf4qumly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        source: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact-form" className="py-12 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Свържете се с нас</h2>
            <p className="text-sm md:text-xl text-gray-600">
              Попълнете формата и ще се свържем с вас възможно най-скоро
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-8 space-y-4 md:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Име
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                placeholder="Вашето име"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Имейл
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Услуга
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
              >
                <option value="">Изберете услуга</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="source" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Как научихте за нас?
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
              >
                <option value="">Изберете източник</option>
                {sources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 md:pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Изпращане...' : 'Изпратете запитване'}
              </Button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center">
                  Благодарим за запитването! Ще се свържем с вас скоро.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center">
                  Възникна грешка. Моля, опитайте отново или се свържете с нас по телефона.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;