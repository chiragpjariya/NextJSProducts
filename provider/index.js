'use client'
import React from 'react'
import QueryProvider from '../tanstack_query'
import Providers from '../redux'


function index({ children }) {
  return (
    <Providers>
      <QueryProvider>
        {children}
      </QueryProvider>
    </Providers>
  )
}

export default index