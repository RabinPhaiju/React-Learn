import React,{useState,useCallback} from 'react'
import debounce from '../../utils/debounce'

const Debouce = () => {
    const [input,setInput] = useState("")
    const [list,setList] = useState([])

    const LIST_SIZE = 20000

    const handleDebounce = useCallback(
    debounce((func, ...args) => func(...args), 680),
    []
);

    const handleChange = (e)=>{
        setInput(e.target.value)
        handleDebounce(updateList,e)
    }
        const updateList = (e)=>{
        const l = []
        for(let i=0;i<LIST_SIZE;i++){
            l.push(e.target.value)
        }
        setList(l)
    }

  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        {
            list?.map((item,index)=>{
                return <div key={index}>{item}</div>
            })
        }
    </div>
  )
}

export default Debouce