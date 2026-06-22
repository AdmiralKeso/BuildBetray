import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

function LoginForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid gap-2">
                <Label htmlFor="login">Username or Email</Label>
                <Input
                    id="login"
                    type="text"
                    required
                    autoFocus
                    autoComplete="username"
                    value={data.login}
                    onChange={(e) => setData('login', e.target.value)}
                    placeholder="username or email@example.com"
                />
                <InputError message={errors.login} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    placeholder="Password"
                />
                <InputError message={errors.password} />
            </div>

            <Button type="submit" className="mt-2 w-full" disabled={processing}>
                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                Log in
            </Button>
        </form>
    );
}

function RegisterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), { onFinish: () => reset('password', 'password_confirmation') });
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    required
                    autoFocus
                    autoComplete="username"
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                    disabled={processing}
                    placeholder="your_username"
                />
                <InputError message={errors.username} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    disabled={processing}
                    placeholder="email@example.com"
                />
                <InputError message={errors.email} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="reg-password">Password</Label>
                <Input
                    id="reg-password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    disabled={processing}
                    placeholder="Password"
                />
                <InputError message={errors.password} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="password_confirmation">Confirm password</Label>
                <Input
                    id="password_confirmation"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    disabled={processing}
                    placeholder="Confirm password"
                />
                <InputError message={errors.password_confirmation} />
            </div>

            <Button type="submit" className="mt-2 w-full" disabled={processing}>
                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                Create account
            </Button>
        </form>
    );
}

export default function Login() {
    const [tab, setTab] = useState<'login' | 'register'>('login');
    const isLogin = tab === 'login';

    return (
        <AuthLayout
            title={isLogin ? 'Log in to your account' : 'Create an account'}
            description={
                isLogin
                    ? 'Enter your username or email and password to log in'
                    : 'Enter your details to create your account'
            }
        >
            <Head title={isLogin ? 'Log in' : 'Register'} />

            <div className="mb-6 flex rounded-lg border p-1">
                <button
                    type="button"
                    onClick={() => setTab('login')}
                    className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-colors ${
                        isLogin
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => setTab('register')}
                    className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-colors ${
                        !isLogin
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Create account
                </button>
            </div>

            {isLogin ? <LoginForm /> : <RegisterForm />}
        </AuthLayout>
    );
}
