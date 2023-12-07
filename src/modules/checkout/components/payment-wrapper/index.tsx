import { PaymentSession } from "@medusajs/medusa"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import React from "react"

type WrapperProps = {
  paymentSession?: PaymentSession | null
}

const Wrapper: React.FC<WrapperProps> = ({ paymentSession, children }) => {
  if (!paymentSession) {
    return <div>{children}</div>
  }

  switch (paymentSession.provider_id) {
    case "stripe":
      return (
        <StripeWrapper paymentSession={paymentSession}>
          {children}
        </StripeWrapper>
      )

    default:
      return <div>{children}</div>
  }
}

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY || "pk_test_51OI13aJgnTW8GthiaUGB0kEzbadyMzIskoMLP0jT2OJFI6WeDuKqPJBci67GIpxRRrFkoGGWgldOsUcjVHMXE8kL00pLwQijqP";
const stripePromise = stripeKey ? loadStripe(stripeKey) : null

const StripeWrapper: React.FC<WrapperProps> = ({
  paymentSession,
  children,
}) => {
  const options: StripeElementsOptions = {
    clientSecret: paymentSession!.data.client_secret as string | undefined,
  }

  if (!stripePromise) {
    return <div>{children}</div>
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  )
}

export default Wrapper
