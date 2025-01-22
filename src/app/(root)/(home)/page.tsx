import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Header from "@/components/Header"
import {features, services, ctaSection } from "@/constants/home"

export default function Page() {
  return (
    <main className="min-h-screen w-full pt-20  lg:min-h-screen mx-auto max-w-screen-2xl">
      {/* Hero Section */}
     
      <Header/>
      {/* Features Section */}
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white rounded-3xl shadow-sm border-none">
              <CardHeader className="pb-2">
                <CardTitle className="flex flex-col gap-4">
                  <span className="text-4xl flex items-center justify-center mx-auto">
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">{services.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.devices.map((device) => (
            <Card key={device.name}>
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-lg gap-2 md:items-start">
                  <Image src={device.image} width={50} height={50} alt={device.name} />
                  {device.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{device.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-[#555555]">{ctaSection.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">{ctaSection.description}</p>
            <Button className="bg-[#52ab98] rounded-3xl hover:bg-[#00c9a7] text-cyan-50 px-10 py-2 h-auto" size="lg">{ctaSection.buttonText}</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
  