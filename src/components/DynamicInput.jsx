import { useEffect, useRef, useState } from "react"

const tags = ["React", "Next.js", "Tailwind", "JavaScript", "CSS", "Node.js"]

const DynamicInput = () => {
  const [content, setContent] = useState([]) // array to hold the text and tags
  const [inputText, setInputText] = useState('') // to hold the current input value
  const inputRef = useRef(null) // tracks the value typed on the input field

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [content])

  const insertTag = (tag) => {
    setContent([...content, { type: 'tag', value: tag }]) // adds the tag to the existing content
  }

  const handleChange = (e) => {
    setInputText(e.target.value) // assigns inputText to the typed value
  }

  const handleKeyDown = (e) => {
    if (e.key == 'Enter' && inputText.trim() !=='') {
      setContent([...content, inputText.trim()]) // adds inputText 
      setInputText('')
    } else if (e.key == 'Backspace' && inputText === '') {
      e.preventDefault()
      if (content.length > 0) {
        const newContent = [...content]
        newContent.pop()
        setContent(newContent) // removes last item (tag or inputText)
      }
    }
  }

  const removeTag = (index) => {
    const newContent = content.filter((_, i) => i !== index)
    setContent(newContent) // for the 'x' delete button on tags
  }

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <div className="flex-grow mr-4">
          <div className="border rounded p-2 flex flex-wrap items-center">
            {content.map((item, index) => typeof item === 'string' ? ( 
              <span key={index} className="mr-1">{item}</span> ) : (
              <span key={index} className="bg-blue-200 rounded-full px-2 py-1 text-sm mr-1 mb-1 flex items-center">
                {item.value}
                <button onClick={() => removeTag(index)} className="ml-1 text-xs">&times;</button>
              </span>))
            }
            <input type="text" ref={inputRef} className="flex-grow outline-none" value={inputText} onChange={handleChange} onKeyDown={handleKeyDown}/>
          </div>
        </div>
        <div>
          {tags.map((t) => (
            <button key={t} onClick={() => insertTag(t)} className="bg-gray-200 rounded px-2 py-1 text-sm mr-1 mb-1">{t}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DynamicInput
