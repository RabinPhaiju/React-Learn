import React,{useState,useTransition} from 'react'

const HookTransition = () => {
    const [isPending,startTransition] = useTransition()
    const [input,setInput] = useState("")
    const [list,setList] = useState([])

    const LIST_SIZE = 20000

    const handleChange = (e)=>{
        // React tries to combine all the diff state changes and make them all call before re-rendering the app.
        // All states changes in react are high priority, they run one after another, after they finish then re-render
        setInput(e.target.value)

        // So, we can put setList to low priority state.
        // but is do more render then normal
        startTransition(()=>{

            const l = []
            for(let i=0;i<LIST_SIZE;i++){
                l.push(e.target.value)
            }
            setList(l)
        })
    }

  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        {
            isPending?<div>Loadingg...</div>:
            list?.map((item,index)=>{
                return <div key={index}>{item}</div>
            })
        }
    </div>
  )
}

export default HookTransition