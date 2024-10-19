
'use client'
import DOMPurify from 'dompurify';


import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const MAX_TITLE_LENGTH = 100

export default function AddQuestion() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', { title, description })
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block font-semibold">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, MAX_TITLE_LENGTH))}
              placeholder="Enter your title"
              maxLength={MAX_TITLE_LENGTH}
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-400">
              {title.length}/{MAX_TITLE_LENGTH} characters
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="block font-semibold">Description (Markdown supported)</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description (Markdown supported)"
              rows={4}
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border rounded p-4 prose bg-gray-700 max-w-full">
            <h3 className="text-lg font-semibold mb-2">Markdown Preview</h3>
            <ReactMarkdown>{DOMPurify.sanitize(description)}</ReactMarkdown>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
