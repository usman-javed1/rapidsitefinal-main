"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 6; // Example validation, password must be at least 6 characters long
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

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (isValid) {
            // Proceed with form submission or authentication logic
            console.log('Form is valid. Submitting...');
        }
    };

    return (
        <div className="grid min-h-screen bg-white w-[98.8vw] overflow-hidden">
            <a href="/" className='w-[100vw] p-5'>
                <div className="flex items-center gap-1 text-zinc-800">
                    <span className="sr-only">Chatbase logo</span>
                    <svg
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                    >
                        {/* SVG content here */}
                    </svg>
                    <span className="font-normal text-lg text-zinc-950">Chatbase</span>
                </div>
            </a>
            <section className="flex h-full flex-col px-6 pt-4">

                <div className="flex h-full flex-col items-center justify-center gap-4">
                    <div className="mx-auto flex max-w-lg flex-col justify-center space-y-6 sm:w-[350px] pb-16">
                        <h1 className="text-center text-2xl font-semibold tracking-tight">
                            Create an Account
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

                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="confirmPassword"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        className={`border bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 ${confirmPasswordError ? 'border-red-500' : 'border-input'
                                            }`}
                                        id="confirmPassword"
                                        aria-label="confirmPassword"
                                        placeholder="Confirm Password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                {confirmPasswordError && (
                                    <p className="text-red-500 text-sm">{confirmPasswordError}</p>
                                )}
                            </div>

                            <button
                                className="text-white bg-primary hover:bg-white hover:border border-primary transition duration-200 hover:text-primary rounded-md py-2 px-4 font-semibold text-sm"
                                aria-busy="false"
                                type="submit"
                            >
                                Sign Up with Email
                            </button>
                        </form>
                        <p className="text-sm text-center text-zinc-600">
                            Already have an account?{' '}
                            <a
                                href="/signin"
                                className="text-primary hover:text-secondary underline font-semibold"
                            >
                                Sign in
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

export default SignUpPage;
