'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/zustand-store/userStore';

const imagesSchema = z.object({
  value: z.string().url({ message: 'Please enter a valid URL.' }),
});

const formSchema = z.object({
  title: z.string({
    required_error: 'This is a required field',
  }),
  price: z.coerce.number({
    required_error: 'This is a required field',
  }),
  currency: z.string({}).min(0, {
    message: '0 or positive values only',
  }),
  category: z.string({}),
  description: z.string({
    required_error: 'This is a required field',
  }),
  images: z.array(imagesSchema),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  title: '',
  price: 0,
  currency: '',
  category: '',
  description: '',
  images: [
    {
      value: '',
    },
  ],
};

export function AddProduct() {
  const userStore = useUserStore();

  const form = useForm<FormSchema>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: 'images',
    control: form.control,
  });

  async function onSubmit(formValues: FormSchema) {
    try {
      const supabase = createClientComponentClient();
      const { title, price, currency, category, description, images } =
        formValues;

      const onlyUrlFromImages = images.map((image) => image.value);

      const { error } = await supabase.from('products').insert({
        title,
        price,
        description,
        currency,
        category,
        images: onlyUrlFromImages,
        profile_id: userStore.userId,
      });

      if (error) {
        console.error('REGISTER: ', error);
      }

      form.reset();
    } catch (error) {
      console.error('REGISTER: ', error);
    }
  }

  return (
    <Shad.Container className="py-3 px-3 sm:w-full max-h-[80vh] overflow-y-auto">
      <div className="flex flex-col justify-center items-center space-y-2">
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-start flex-col space-y-3"
          >
            <Shad.FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>Title</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Input placeholder="Product Name" {...field} />
                  </Shad.FormControl>
                  <Shad.FormDescription>
                    Title helps users to find your products.
                  </Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

            <Shad.Container className="flex flex-row justify-start">
              <Shad.FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <Shad.FormItem>
                    <Shad.FormLabel>Price $</Shad.FormLabel>
                    <Shad.FormControl>
                      <Shad.Input
                        type="number"
                        step=".01"
                        min={0}
                        placeholder="$0.00"
                        {...field}
                      />
                    </Shad.FormControl>
                    <Shad.FormMessage />
                  </Shad.FormItem>
                )}
              />

              <Shad.FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <Shad.FormItem>
                    <Shad.FormLabel>Currency</Shad.FormLabel>
                    <Shad.FormControl>
                      <Shad.Input
                        placeholder="BRL, CAD, EUR, USD..."
                        {...field}
                      />
                    </Shad.FormControl>
                    <Shad.FormMessage />
                  </Shad.FormItem>
                )}
              />
            </Shad.Container>

            <Shad.FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>Catewgory</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Input {...field} />
                  </Shad.FormControl>
                  <Shad.FormDescription>
                    Categories help clientes to list products by specifically
                    field.
                  </Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

            <Shad.FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>Description</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Textarea
                      className="min-h-[250px]"
                      placeholder="This is an incredible..."
                      {...field}
                    />
                  </Shad.FormControl>
                  <Shad.FormDescription>
                    Try to be clear about all technical specification of your
                    product. Including size, dimensions and all relevant stuffs.
                  </Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

            <>
              {fields.map((field, index) => (
                <Shad.FormField
                  control={form.control}
                  key={field.id}
                  name={`images.${index}.value`}
                  render={({ field }) => (
                    <Shad.FormItem>
                      <Shad.FormLabel className={cn(index !== 0 && 'sr-only')}>
                        Imagens
                      </Shad.FormLabel>
                      <Shad.FormDescription
                        className={cn(index !== 0 && 'sr-only')}
                      >
                        Ads with images sell 5x more.
                      </Shad.FormDescription>
                      <Shad.Container className="flex flex-row items-center">
                        <Shad.Container className="w-[80%]">
                          <Shad.FormControl>
                            <Shad.Input
                              placeholder="https://exemplo.com/imagem.png"
                              {...field}
                            />
                          </Shad.FormControl>
                        </Shad.Container>
                        <Shad.Container className="w-fit ml-1">
                          <Shad.Button
                            type="button"
                            variant="destructive"
                            size="default"
                            onClick={() => remove(index)}
                          >
                            REMOVE
                          </Shad.Button>
                        </Shad.Container>
                      </Shad.Container>
                      <Shad.FormMessage />
                    </Shad.FormItem>
                  )}
                />
              ))}

              <Shad.Button
                type="button"
                variant="secondary"
                size="sm"
                className="mt-2"
                onClick={() => append({ value: '' })}
              >
                ADD URL
              </Shad.Button>
            </>

            <Shad.Button type="submit">REGISTER PRODUCT</Shad.Button>
          </form>
        </Shad.Form>
      </div>
    </Shad.Container>
  );
}
