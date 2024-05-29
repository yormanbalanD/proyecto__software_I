"use client";

import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { Footer } from "flowbite-react";




export default function Login() {
  return (
    <div class="bg-[#01205f] flex-col flex justify-between min-h-screen">
      <div class="h-[100vh] max-h-[calc(100vh-125px)] flex justify-center items-center">
        <div className="flex max-w-md w-full flex-col gap-4 bg-[#eef2f4] p-4 rounded-lg">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Correo Electrónico" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="correo@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Contraseña" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Recuerdame</Label>
          </div>
          <Button type="submit">Ingresar</Button>
          <p className="text-center text-sm text-gray-500">
            ¿No tienes una cuenta aún?{" "}
            <a href="/Singup" className="underline">
              Registrate
            </a>
          </p>
        </div>
      </div>

      <div>
        <Footer_page/>
      </div>
    </div>
  );
}

export function Footer_page() {
  return (
    <div class="bg-[#eef2f4] rounded-lg h-[140px] p-5">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src="#"
            alt="#"
            name="M&R"
          />
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="M&R™" year={2024} />
      </div>
    </div>
      
    
  );
}




