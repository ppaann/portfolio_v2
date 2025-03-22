'use client';
import { Button } from '@/components/Button';
import { useContactForm } from './useContactForm';
export const Contact: React.FC = () => {
  const {
    formData,
    handleChange,
    errors,
    isSubmitting,
    handleSubmit,
    showSuccess,
  } = useContactForm();

  return (
    <div className='flex items-center justify-center p-6'>
      <div className='w-full max-w-md'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Full Name <span className='text-red-500'>*</span>
            </label>
            <div
              className={`relative ${
                formData.name &&
                'focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50 rounded-md'
              }`}
            >
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                className={`w-full px-4 py-3 bg-white border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                required
              />
            </div>
            {errors.name && (
              <p className='mt-1 text-sm text-red-600'>
                Please enter your name
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email Address <span className='text-red-500'>*</span>
            </label>
            <div
              className={`relative ${
                formData.email &&
                'focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50 rounded-md'
              }`}
            >
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your.email@example.com'
                className={`w-full px-4 py-3 bg-white border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                required
              />
            </div>
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Message <span className='text-red-500'>*</span>
            </label>
            <div
              className={`relative ${
                formData.message &&
                'focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50 rounded-md'
              }`}
            >
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder='Your message here...'
                className={`w-full px-4 py-3 bg-white border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none`}
                required
              />
            </div>
            {errors.message && (
              <p className='mt-1 text-sm text-red-600'>
                Please enter your message
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Phone Number{' '}
              <span className='text-gray-500 text-xs'>(optional)</span>
            </label>
            <div className='relative'>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Your phone number (optional)'
                className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
          </div>

          <div>
            <Button
              type='submit'
              className='w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>

          {showSuccess && (
            <div className='mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center'>
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
