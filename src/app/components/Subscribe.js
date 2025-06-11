'use client'

import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const ConvertkitSignupForm = ({ formId, children }) => {
 const name = 'email';
 const [success, setSuccess] = useState(undefined);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 
 const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const target = event.target;
    const data = new FormData(target);
    const email = data.get(name);

    console.log('📧 Submitting email:', email, 'with formId:', formId);

    const body = JSON.stringify({
     formId,
     email,
    });

    const headers = new Headers({
     'Content-Type': 'application/json; charset=utf-8',
    });

    try {
     const response = await fetch(`/api/convertkit/subscribe`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers,
      body,
     });

     console.log('📡 Response status:', response.status);
     
     if (response.ok) {
       const result = await response.json();
       console.log('✅ Success:', result);
       setSuccess(true);
     } else {
       const errorResult = await response.json();
       console.error('❌ Error response:', errorResult);
       setError(errorResult.error || 'An error occurred');
       setSuccess(false);
     }
    } catch (err) {
     console.error('💥 Network error:', err);
     setError('Network error. Please try again.');
     setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  },
  [formId]
 );

 if (success === false) {
   return <p>Apologies, an error occurred: {error}</p>;
 }

 if (success) {
   return <p>You&apos;re in! Thank you for subscribing.</p>;
 }

 return (
   <>
   <div className="max-w-screen-md mx-auto mb-20 mt-10 text-center text-lg font-semibold px-10 pt-3 pb-10 bg-opacity-80 rounded-md border border-gray-200 bg-white dark:bg-black dark:border-gray-700">
     <p className={'mt-2 text-center py-10 font-mono uppercase text-sm'}>
       Weekly inspiration, design tips, + studio updates.
     </p>
     <form
       target="_blank"
       className={`space-around flex w-full flex-grow justify-center`}
       onSubmit={onSubmit}
     >
       <input
         type="email"
         className="TextInput w-full !rounded-tr-none !rounded-br-none border-r-transparent py-1 px-4 text-sm hover:border-r-transparent md:w-60 md:text-base bg-gray-600"
         name={name}
         aria-label="Your email address"
         placeholder="your@email.com"
         required
       />

       <button 
         className="Button bg-[var(--rockpants)] min-w-[6rem] text-sm md:text-base"
         disabled={isLoading}
       >
         {isLoading ? 'Submitting...' : (children ?? 'Sign up')}
       </button>
     </form>

     </div>
   </>
 );
};

ConvertkitSignupForm.propTypes = {
  formId: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default ConvertkitSignupForm;
