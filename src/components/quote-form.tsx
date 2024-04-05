import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useToast} from '@/components/ui/use-toast'
import {Button} from './ui/button'
import {Input} from './ui/input'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {quoteSchemaType, QuoteSchema} from '@/schema'
import {postQuoteData} from '@/api/mutation'
import {AxiosError} from 'axios'

import {useMutation} from '@tanstack/react-query'

const QuoteForm = () => {
  const {toast} = useToast()

  const {mutate, isPending} = useMutation({
    mutationFn: (newRow: quoteSchemaType) => {
      return postQuoteData(newRow)
    },
  })
  console.log('isPending::: ', isPending)

  const form = useForm<quoteSchemaType>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      product: '',
    },
  })

  function onSubmit(data: quoteSchemaType) {
    mutate(data, {
      onSuccess: data => {
        if (data instanceof AxiosError) {
          toast({
            variant: 'destructive',
            title: data.name,
            description: data.message,
          })
          return
        }
        toast({
          title: 'Success!',
          description:
            'Your query has been submitted successfully. Our team will contact you shortly.',
        })
        form.reset()
      },
    })
  }

  return (
    <div className="h-full bg-white p-2 md:p-4 rounded-md shadow-md">
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
                    <Input type="text" autoComplete="off" placeholder="Full Name" {...field} />
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
                  <Input type="text" placeholder="Email" {...field} />
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
                <Select onValueChange={field.onChange} value={field.value}>
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
            {isPending ? 'Please Wait...' : 'Get a Quote'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default QuoteForm
