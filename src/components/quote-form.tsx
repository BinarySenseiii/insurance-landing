import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useToast} from '@/components/ui/use-toast'
import {Button} from './ui/button'
import {Input} from './ui/input'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

const FormSchema = z.object({
  fullName: z.string().min(1, {message: 'Please enter your full Name'}),
  phone: z
    .string()
    .min(1, {message: 'Please enter your Phone no'})
    .regex(phoneRegex, 'Invalid Number!'),
  email: z.string().min(1, {message: 'Please enter an valid email'}).email(),
  product: z.string().min(1, {message: 'Please select a product'}),
})

const QuoteForm = () => {
  const {toast} = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      product: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="h-full bg-white p-2 md:p-4 rounded-md shadow-sm">
      <div className="text-center space-y-2">
        <h2 className="font-semibold text-2xl italic">Get a Free Quote Now</h2>
        <p>Take the first step towards securing your best life today. </p>
      </div>

      <Form {...form}>
        <form className="mt-4 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Phone No" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product"
            render={({field}) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose Product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Motor Insurance">Motor Insurance</SelectItem>
                    <SelectItem value="Medical Insurance">Medical Insurance</SelectItem>
                    <SelectItem value="Boat / Yacht Insurance">Boat / Yacht Insurance</SelectItem>
                    <SelectItem value="Property Insurance">Property Insurance</SelectItem>
                    <SelectItem value="Workmens compensation Insurance">
                      Workmens compensation Insurance
                    </SelectItem>
                    <SelectItem value="Bike Insurance">Bike Insurance</SelectItem>
                    <SelectItem value="Pet Insurance">Pet Insurance</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Get a Quote
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default QuoteForm
