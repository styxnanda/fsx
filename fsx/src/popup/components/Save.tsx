import { Button } from "flowbite-react"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import "~style.css"

export const config: PlasmoCSConfig = {
  matches: ["https://archiveofourown.org/works/*/chapters/*"]
}

const Save = () => {
  const [count, setCount] = useState(0)

  if (count > 10) setCount(0)
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-5 h-full">
      <div className="flex flex-row justify-center items-center gap-5">
        <img
          src="https://avatars.githubusercontent.com/u/185469216?s=200&v=4"
          alt="fangarc logo"
          className="rounded-full h-10"
        />
        <h1 className="text-xl overflow-y-auto">Fangarc Bookmarker</h1>
      </div>
      <Button
        className="w-auto px-4 py-2"
        color="blue"
        onClick={() => {
          setCount(count + 1)
        }}>
        Why Not working count: {count}
      </Button>
    </div>
  )
}

export default Save
