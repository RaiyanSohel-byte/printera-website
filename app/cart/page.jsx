"use client";
import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  Lock,
  CreditCard,
  ShieldCheck,
  ChevronLeft,
  CreditCard as CardIcon,
  CheckCircle2,
  Info,
  Package,
  Home,
  Download,
  ArrowRight,
  MapPin,
  Truck,
  Clock,
} from "lucide-react";

// Reusable Input Component for consistent spacing/styling
const FormField = ({
  label,
  placeholder,
  gridSpan = "col-span-2",
  type = "text",
}) => (
  <div className={gridSpan}>
    <label className="block text-[13px] font-black text-[#1e1e2d] mb-1.5 uppercase tracking-tight">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl p-3.5 text-sm font-bold focus:outline-none focus:border-[#2B6BFF] transition-colors placeholder:text-gray-300 bg-white"
    />
  </div>
);

export default function CheckoutFlow() {
  const [step, setStep] = useState(2); // Starting at 2 for your current focus
  const [quantity, setQuantity] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("pickup"); // 'pickup' | 'shipping'

  // Logic Constants
  const basePrice = 53.0;
  const subtotal = basePrice * quantity;
  const shippingFee = deliveryMethod === "shipping" ? 15.0 : 0;
  const tax = 4.24; // Flat for demo matching your PNG
  const total = subtotal + shippingFee + tax;

  // Shared Progress Bar
  const ProgressBar = () => (
    <div className="flex items-center gap-6 mb-10 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm w-fit">
      {[
        { id: 2, label: "Shipping" },
        { id: 3, label: "Payment" },
        { id: 4, label: "Review" },
      ].map((s, i) => (
        <React.Fragment key={s.id}>
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= s.id ?
                  "bg-[#2B6BFF] text-white"
                : "bg-gray-100 text-gray-400"
              }`}
            >
              {step > s.id ?
                <CheckCircle2 size={16} />
              : i + 1}
            </div>
            <span
              className={`font-black text-sm ${
                step >= s.id ? "text-[#1e1e2d]" : "text-gray-300"
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < 2 && <div className="w-12 h-[2px] bg-gray-100" />}
        </React.Fragment>
      ))}
    </div>
  );

  // --- VIEW COMPONENTS ---

  const CartView = () => (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-black text-[#1e1e2d] mb-10">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-grow bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex gap-8">
          {/* Product info placeholder */}
          <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-[10px] text-center p-4">
            ADA RESTROOM SIGN
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-black text-[#1e1e2d]">
                ADA Restroom Sign
              </h2>
              <button className="text-[#EE2A24]">
                <Trash2 size={20} />
              </button>
            </div>
            <p className="text-gray-400 font-bold text-sm mt-1">
              Size: 8" x 6"
            </p>
            <div className="flex justify-between items-end mt-6">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 px-4 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-4 font-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 px-4 hover:bg-gray-50 text-[#2B6BFF]"
                >
                  +
                </button>
              </div>
              <span className="text-2xl font-black text-[#2B6BFF]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-[400px]">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-lg font-black mb-6">Order Summary</h3>
            <div className="flex justify-between font-black text-2xl">
              <span>Total</span>
              <span className="text-[#2B6BFF]">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-[#2B6BFF] text-white py-4 rounded-2xl font-black mt-8"
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );

  const DeliveryView = () => (
    <div className="animate-in slide-in-from-right duration-500">
      <h1 className="text-2xl font-black text-[#1e1e2d] mb-8">Checkout</h1>
      <ProgressBar />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-grow bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
          <h3 className="text-md font-black text-[#1e1e2d] mb-6">
            Delivery Information
          </h3>

          {/* Method Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setDeliveryMethod("pickup")}
              className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                deliveryMethod === "pickup" ?
                  "border-[#2B6BFF] bg-blue-50/10"
                : "border-gray-100"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${deliveryMethod === "pickup" ? "border-[#2B6BFF]" : "border-gray-300"}`}
              >
                {deliveryMethod === "pickup" && (
                  <div className="w-2.5 h-2.5 bg-[#2B6BFF] rounded-full" />
                )}
              </div>
              <div>
                <p className="font-black text-[#1e1e2d] text-sm">
                  Store Pickup
                </p>
                <p className="text-xs text-gray-500 mt-0.5 font-bold">
                  Pick up at our location
                </p>
                <p className="text-[10px] text-green-500 font-black mt-2 uppercase">
                  ✓ FREE - Available in 3-5 days
                </p>
              </div>
            </button>

            <button
              onClick={() => setDeliveryMethod("shipping")}
              className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                deliveryMethod === "shipping" ?
                  "border-[#2B6BFF] bg-blue-50/10"
                : "border-gray-100"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${deliveryMethod === "shipping" ? "border-[#2B6BFF]" : "border-gray-300"}`}
              >
                {deliveryMethod === "shipping" && (
                  <div className="w-2.5 h-2.5 bg-[#2B6BFF] rounded-full" />
                )}
              </div>
              <div>
                <p className="font-black text-[#1e1e2d] text-sm">
                  Ship to Address
                </p>
                <p className="text-xs text-gray-500 mt-0.5 font-bold">
                  Deliver to your door
                </p>
                <p className="text-[10px] text-gray-400 font-black mt-2 uppercase">
                  $15.00 flat rate (FREE over $100)
                </p>
              </div>
            </button>
          </div>

          {/* Pickup Details Box */}
          {deliveryMethod === "pickup" && (
            <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-2xl p-6 mb-8 animate-in fade-in zoom-in-95">
              <h4 className="text-[#9333EA] font-black text-sm mb-2">
                Pickup Location
              </h4>
              <p className="text-[#9333EA] text-sm font-bold opacity-80">
                123 Business Avenue
              </p>
              <p className="text-[#9333EA] text-sm font-bold opacity-80">
                New York, NY 10001
              </p>
              <p className="text-[#9333EA] text-[11px] mt-3 font-bold">
                Hours: Monday-Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="border-t border-gray-100 pt-8 mt-8">
            <h3 className="text-md font-black text-[#1e1e2d] mb-1">
              Contact Information
            </h3>
            <p className="text-xs text-gray-400 font-bold mb-6">
              We'll use this to contact you if there are any issues with your
              order
            </p>

            <div className="grid grid-cols-2 gap-5">
              <FormField label="Full Name *" placeholder="Enter full name" />
              <FormField
                label="Phone *"
                placeholder="(555) 123-4567"
                gridSpan="col-span-1"
              />
              <FormField
                label="Email *"
                placeholder="your@email.com"
                gridSpan="col-span-1"
              />
              <FormField
                label="Organization / Building Name"
                placeholder="e.g., City Hall, ABC Corporation"
              />
            </div>
          </div>

          {/* Shipping Address Toggled Form */}
          {deliveryMethod === "shipping" && (
            <div className="border-t border-gray-100 pt-8 mt-8 animate-in slide-in-from-top-4 duration-300">
              <h3 className="text-md font-black text-[#1e1e2d] mb-6">
                Shipping Address
              </h3>
              <div className="grid grid-cols-4 gap-5">
                <FormField
                  label="Street Address *"
                  placeholder="123 Street Name"
                  gridSpan="col-span-4"
                />
                <FormField
                  label="City *"
                  placeholder="City"
                  gridSpan="col-span-2"
                />
                <FormField
                  label="State *"
                  placeholder="State"
                  gridSpan="col-span-1"
                />
                <FormField
                  label="ZIP Code *"
                  placeholder="10001"
                  gridSpan="col-span-1"
                />
              </div>
            </div>
          )}

          <button
            onClick={() => setStep(3)}
            className="w-full bg-[#2B6BFF] text-white py-4.5 rounded-2xl font-black text-lg mt-10 hover:shadow-xl transition-all"
          >
            Continue to Payment
          </button>
        </div>

        {/* Sidebar Summary */}
        <aside className="w-full lg:w-[380px] sticky top-6">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
            <h3 className="text-lg font-black text-[#1e1e2d] mb-8">
              Order Summary
            </h3>
            <div className="space-y-4 font-bold text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-[#1e1e2d]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-[#1e1e2d]">
                  ${shippingFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (8%)</span>
                <span className="text-[#1e1e2d]">${tax.toFixed(2)}</span>
              </div>
              <div className="h-[1px] bg-gray-100 my-4" />
              <div className="flex justify-between items-center">
                <span className="text-xl font-black text-[#1e1e2d]">Total</span>
                <span className="text-3xl font-black text-[#2B6BFF]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">
                Estimated Delivery
              </p>
              <p className="text-md font-black text-[#1e1e2d]">
                3-5 Business Days
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );

  const PaymentView = () => (
    <div className="animate-in slide-in-from-right duration-500 max-w-4xl">
      <h1 className="text-2xl font-black mb-8">Payment</h1>
      <ProgressBar />
      <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
        <h3 className="text-lg font-black mb-6">Credit Card Info</h3>
        <div className="space-y-4">
          <FormField label="Cardholder Name" placeholder="John Doe" />
          <FormField label="Card Number" placeholder="0000 0000 0000 0000" />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Exp Date"
              placeholder="MM / YY"
              gridSpan="col-span-1"
            />
            <FormField label="CVV" placeholder="123" gridSpan="col-span-1" />
          </div>
        </div>
        <button
          onClick={() => setStep(4)}
          className="w-full bg-[#2B6BFF] text-white py-4.5 rounded-2xl font-black mt-10"
        >
          Review Order
        </button>
      </div>
    </div>
  );

  const ReviewView = () => (
    <div className="animate-in slide-in-from-right duration-500 max-w-4xl">
      <h1 className="text-2xl font-black mb-8">Review Order</h1>
      <ProgressBar />
      <div className="space-y-6">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex justify-between">
          <div>
            <h4 className="font-black text-sm uppercase text-gray-400 mb-2">
              Shipping to
            </h4>
            <p className="font-black">123 Business Ave, New York, NY</p>
          </div>
          <button
            onClick={() => setStep(2)}
            className="text-[#2B6BFF] font-black"
          >
            Edit
          </button>
        </div>
        <button
          onClick={() => setStep(5)}
          className="w-full bg-[#2B6BFF] text-white py-5 rounded-2xl font-black text-xl shadow-lg"
        >
          Place Order • ${total.toFixed(2)}
        </button>
      </div>
    </div>
  );

  const SuccessView = () => (
    <div className="text-center py-20 animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
        <CheckCircle2 size={40} />
      </div>
      <h1 className="text-4xl font-black mb-4">Order Confirmed!</h1>
      <p className="text-gray-400 font-bold mb-10">
        Your order #ADA-9921-X is on its way.
      </p>
      <button
        onClick={() => setStep(1)}
        className="bg-[#2B6BFF] text-white px-10 py-4 rounded-2xl font-black"
      >
        Continue Shopping
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {step === 1 && <CartView />}
        {step === 2 && <DeliveryView />}
        {step === 3 && <PaymentView />}
        {step === 4 && <ReviewView />}
        {step === 5 && <SuccessView />}
      </div>
    </main>
  );
}
