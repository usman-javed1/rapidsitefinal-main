"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { signIn } from './BackConfig';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };


  



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      
      console.log('Form is valid. Submitting...');
      signIn(email, password);
    }
  };

  return (
    <div className="grid min-h-screen bg-white w-[98.8vw] overflow-hidden">
      <a href="/" className='w-[100vw] p-5'>
        <div className="flex items-center gap-1 text-zinc-800">
          <span className="font-normal text-lg text-zinc-950">Chatbase</span>
        </div>
      </a>
      <section className="flex h-full flex-col px-6 pt-4">

        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="mx-auto flex max-w-lg flex-col justify-center space-y-6 sm:w-[350px] pb-16">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="space-y-2 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`border bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 ${emailError ? 'border-red-500' : 'border-input'
                    }`}
                  id="email"
                  aria-label="Email"
                  placeholder="name@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    className={`border bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 ${passwordError ? 'border-red-500' : 'border-input'
                      }`}
                    id="password"
                    aria-label="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    aria-pressed={showPassword}
                    className="absolute right-0 flex h-full items-center rounded-md bg-transparent text-base font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* Show/hide password icon here */}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <a
                className="text-sm font-semibold text-zinc-600 hover:text-primary flex w-max justify-end"
                href="/forgot-password"
              >
                Forgot password?
              </a>
              <button
                className="text-white bg-primary hover:bg-white hover:border border-primary transition duration-200 hover:text-primary rounded-md py-2 px-4 font-semibold text-sm"
                aria-busy="false"
                type="submit"
              >
                Sign In with Email
              </button>
            </form>
            <p className="text-sm text-center text-zinc-600">
              Dont have an account?{' '}
              <a
                href="/signup"
                className="text-primary hover:text-secondary underline font-semibold"
              >
                Sign up
              </a>
            </p>
            <br />
            <div className="relative flex justify-center text-xs uppercase"><span className=" text-muted-foreground bg-white px-2">Or continue with</span></div>
            <button
              className="text-white bg-primary hover:bg-white hover:border border-primary transition duration-200 hover:text-primary rounded-md py-2 px-4 font-semibold text-sm flex justify-center items-center"
              aria-busy="false"
              type="submit"
            >
              <Image src={'/google.svg'} width={25} height={25} alt='' />
              <span className='ml-3 text-lg'>Google</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
