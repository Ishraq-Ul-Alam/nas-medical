import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              src="/doctors.jpg"
              alt="hero"
              width={800}
              height={800}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find & Book an
              <span className="text-primary"> Appoinment</span> with our best{' '}
              <span className="text-primary">Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              At NAS Medical Center, we're dedicated to your health and
              well-being. Our services cover a wide spectrum of medical needs,
              from routine check-ups to specialized treatments. With expert
              physicians and advanced facilities, we offer personalized care in
              areas such as cardiology, gastroenterology, neurology, and more.
              Our goal is simple: to provide you with exceptional healthcare
              that's tailored to your unique needs. Whether you're seeking
              preventive care, diagnostic services, or treatment for a specific
              condition, you can trust NAS Medical Center to deliver
              compassionate care and excellent outcomes. Your health is our
              priority, and we're here to support you every step of the way.
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
