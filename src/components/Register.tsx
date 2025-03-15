'use client';
import { NotAccountType } from '@/Types/global';
import { Dispatch, SetStateAction } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerAction } from '@/actions/users';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});

interface RegisterType {
  setNoAccountType: Dispatch<SetStateAction<NotAccountType>>;
}
const Register = (props: RegisterType) => {
  const router = useRouter();
  const { setNoAccountType } = props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    const res = await registerAction(values.email, values.name, values.password);
    if (res.status !== 200) {
      toast.error(res.body);
      return;
    }
    toast.success(res.body);
    setTimeout(() => {
      router.refresh();
    }, 1000);
  }

  return (
    <div className="container2 my-20">
      <h1 className="text-xl mb-3 text-center font-bold">Welcome back</h1>
      <p className="text-center mb-6">sign in to access an enhanced shopping experience</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="please enter your name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="please enter your email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="please enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" cursor-pointer"
          >
            Register
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm mt-3">
        is a member?
        <span
          className=" underline text-orange-400 cursor-pointer"
          onClick={() => setNoAccountType('login')}
        >
          Join in.
        </span>
      </p>
    </div>
  );
};

export default Register;
