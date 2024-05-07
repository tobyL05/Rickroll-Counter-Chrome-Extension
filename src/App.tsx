
import { useEffect, useState } from "react"
import AnimatedNumbers from "react-animated-numbers";

function App() {

  const [num_rickroll, setNumRickroll] = useState(0)
  const [initialRender, setInitialRender] = useState(true);


  useEffect(() => {
    if (initialRender) {
      chrome.storage.sync.get(["num_rickrolled"]).then((value) => {
        setNumRickroll(value.num_rickrolled);
      })
      setInitialRender(false)
    } else {
      chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "storage") {
          chrome.storage.sync.get(["num_rickrolled"]).then((value) => {
            setNumRickroll(value.num_rickrolled);
          })
        }
      })
    }
  })


  return (
    <div className="border-black border-[5px]">
      <div className="w-44 py-4 flex flex-col justify-start items-center bg-bg">
        <h1 className="text-center text-xl font-heading font-public-sans">You've been Rickrolled...</h1>
        <AnimatedNumbers 
          fontStyle={{
            fontSize: 40,
            fontWeight: "bold",
          }}
          animateToNumber={num_rickroll} 
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
        })}/>
        <h1 className="text-center text-xl font-heading font-public-sans">times!</h1>
      </div>
      <div className="w-full p-1 mt-1 flex flex-row justify-between bg-main border-t-[5px] border-solid border-black">
        <p className="text-left font-semibold font-inter text-xs">Rickroll Counter</p>
        <p className="text-right font-semibold font-inter text-xs">Developed by <a className="underline" href="https://www.github.com/tobyL05" target="_blank">Toby</a></p>
      </div>
    </div>
  )
}

export default App
