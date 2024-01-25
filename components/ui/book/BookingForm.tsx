"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Apple, Bitcoin, CreditCard } from "lucide-react";

export default function BookingForm() {
  const guaranteeText =
    "A valid credit card must be provided at the time of booking. While no charges will be applied to the card at that time, the hotel reserves the right to pre-authorize the card for the amount of the stay prior to arrival. Cancel Policy Cancellations must be received by 3PM local time two days prior to arrival to avoid a one night room & tax charge.";

  return (
    <>
      <Card className="border-neutral-200 mb-32">
        <CardContent className="grid gap-4 pt-8 pb-0">
          <CardTitle className="text-4xl">your information</CardTitle>
          <CardDescription className="text-neutral-400">
            book directly with us for{" "}
            <span className="text-neutral-200 font-semibold">
              exclusive benefits
            </span>
            . more info{" "}
            <span className="text-neutral-200 font-semibold underline cursor-pointer">
              here
            </span>
            .
          </CardDescription>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstname">first name</Label>
              <Input
                id="firstname"
                className="border-neutral-200 rounded-none"
              ></Input>
            </div>
            <div>
              <Label htmlFor="lastname">last name</Label>
              <Input
                id="lastname"
                className="border-neutral-200 rounded-none"
              ></Input>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">email</Label>
            <Input
              className="border-neutral-200 rounded-none"
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2 mb-4">
            <Label htmlFor="password">phone number</Label>
            <Input
              className="border-neutral-200 rounded-none"
              id="password"
              type="password"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground"></span>
            </div>
          </div>
          <CardTitle className="text-4xl">payment method</CardTitle>
          <CardDescription>
            add a new payment method to your account.
          </CardDescription>
          <CardContent className="grid gap-6 p-0 mb-4">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem
                  value="card"
                  id="card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="card"
                  className="flex flex-col gap-y-2 items-center justify-between rounded-none border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard />
                  card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col gap-y-2 items-center justify-between rounded-none border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Bitcoin />
                  bitcoin
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="apple"
                  id="apple"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="apple"
                  className="flex flex-col gap-y-2 items-center justify-between rounded-none border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Apple />
                  apple
                </Label>
              </div>
            </RadioGroup>
            <div className="grid gap-2">
              <Label htmlFor="name">name</Label>
              <Input
                className="border-neutral-200 rounded-none"
                id="name"
                placeholder="first last"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">card number</Label>
              <Input
                className="border-neutral-200 rounded-none"
                id="number"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="month">expires</Label>
                <Select>
                  <SelectTrigger
                    className="border-neutral-200 rounded-none"
                    id="month"
                  >
                    <SelectValue placeholder="month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">year</Label>
                <Select>
                  <SelectTrigger
                    className="border-neutral-200 rounded-none"
                    id="year"
                  >
                    <SelectValue placeholder="year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() + i}`}
                      >
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">cvc</Label>
                <Input
                  className="border-neutral-200 rounded-none"
                  id="cvc"
                  placeholder="cvc"
                />
              </div>
            </div>
          </CardContent>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground"></span>
            </div>
          </div>
          <CardTitle className="text-4xl">policies</CardTitle>
          <div className="flex flex-row gap-x-8">
            <div>
              <div className="text-neutral-400 text-sm">check in</div>
              <div className="text-xl">after 3pm</div>
            </div>
            <div>
              <div className="text-neutral-400 text-sm">check out</div>
              <div className="text-xl">before 12pm</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-neutral-400 text-sm">
              <span className="text-neutral-200 text-base">
                guarantee policy:{" "}
              </span>
              {guaranteeText.toLowerCase()}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground"></span>
            </div>
          </div>
          <CardTitle className="text-4xl">acknowledgement</CardTitle>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                by completing this booking, i agree with the booking conditions.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground"></span>
            </div>
          </div>
          <Button className="w-full h-10">confirm book</Button>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
