export default defineAppConfig({
  ui: {
    colors: {
      primary: 'beige',
      neutral: 'avocado',
    },
    blogPost: {
      slots: {
        root: 'bg-beige-100 dark:bg-avocado-800 rounded-xl',
        title: 'text-2xl font-bold dark:text-beige-200 text-avocado-900',
        description: 'text-avocado-600 dark:text-beige-100',
      },

      defaultVariants: {
        variant: 'soft',
      },
    },

    pagination: {
      slots: {
        list: 'flex items-center gap-1',
        item: 'bg-avocado-800 dark:bg-beige-400',
        label: 'min-w-5 text-center text-beige-300 dark:text-avocado-100',
      },
    },
    input: {
      slots: {
        base:' w-full rounded-md light:bg-beige-100 dark:bg-avocado-700 light:placeholder:text-avocado-800  placeholder:text-beige-100 disabled:cursor-not-allowed disabled:opacity-75 ',
        leadingIcon:'dark:text-beige-300'
      },
       variants: {
        variant: {
          outline: ' ring-0', 
        },
      },
    },
    selectMenu:{
      slots:{
        leadingIcon:'dark:text-beige-300',
        value:'dark:text-beige-100 light:text-avocado-800',
        item:'dark:text-beige-100/60 light:text-avocado-800',
        trailingIcon:'dark:text-beige-300',
        itemTrailingIcon:'dark:text-beige-300'
      }
    }

  },
 
})
