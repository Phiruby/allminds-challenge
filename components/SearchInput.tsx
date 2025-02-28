'use client'
import Image from 'next/image'

interface SearchInputProps {
  placeholder?: string
  onSubmit?: (value: string) => void
}

const SearchInput = ({ placeholder = "Talk to le Chat", onSubmit }: SearchInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements.namedItem('search') as HTMLInputElement
    onSubmit?.(input.value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-white rounded-md text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded hover:bg-orange-700 transition-colors text-white"
        >
          <span className="sr-only">Submit</span>
          <Image
            src="/whitetailarrow.svg"
            alt="Submit"
            width={13}
            height={8}
          />
        </button>
      </div>
    </form>
  )
}

export default SearchInput 