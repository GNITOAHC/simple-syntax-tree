'use client'
import React from 'react'
import BTree from '@/app/components/BTree'

export default function Home() {
  const [func, setFunc] = React.useState('')

  return (
    <main className="flex min-h-screen flex-col gap-9 items-center p-24 tree">
      <h1 className="text-4xl font-bold">Syntax Tree</h1>

      <label>
        function:{' '}
        <input type="text" onChange={(e) => setFunc(e.target.value)} />
        <ul>
          <BTree func={func} />
        </ul>
      </label>
    </main>
  )
}
