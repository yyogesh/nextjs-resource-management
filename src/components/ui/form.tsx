"use client"

import React, { createContext, useContext, useId } from "react"
import { cn } from "@cms/libs/utils"

interface FormFieldContextValue {
  name: string
}

const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined)

function useFormField() {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext) || { id: undefined }

  if (!fieldContext) {
    throw new Error("useFormField must be used within a FormField")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
  }
}

interface FormItemContextValue {
  id: string
}

const FormItemContext = createContext<FormItemContextValue | undefined>(undefined)

const Form = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => {
    return <form ref={ref} className={cn("space-y-6", className)} {...props} />
  },
)
Form.displayName = "Form"

interface FormFieldProps {
  name: string;
  children?: React.ReactNode;
  render: (props: { field: any }) => React.ReactNode;
  control: any;
}

const FormField = ({ name, render, control, children }: FormFieldProps) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      {render ? render({ field: { name, id: name, onChange: () => {}, value: '', onBlur: () => {} } }) : children}
    </FormFieldContext.Provider>
  )
}

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    const { id } = useContext(FormItemContext) || { id: undefined }

    return (
      <label
        ref={ref}
        htmlFor={id}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className,
        )}
        {...props}
      />
    )
  },
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => {
  const { id } = useContext(FormItemContext) || { id: undefined }

  return <div ref={ref} id={id} {...props} />
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  },
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {children}
      </p>
    )
  },
)
FormMessage.displayName = "FormMessage"

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
