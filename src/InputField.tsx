import React, { FormEvent } from 'react'
import './App.css'
interface Props {
    inputText: string,
    setInputText: React.Dispatch<React.SetStateAction<string>>
    addTodo: ()=>void
}
const InputField: React.FC<Props> = ({ inputText, setInputText, addTodo }) => {

    const handleSubmit = (e: FormEvent<EventTarget>)=>{
        e.preventDefault();
        console.log("Handle Submit")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='Form'>
                <input placeholder='Enter Your Task Here...' type="text" name="text" id="text" value={inputText} onChange={(e) => {
                    setInputText(e.target.value)
                }} />
                <input type="submit" value="Add" onClick={addTodo}/>
            </form>
        </>
    )
}

export default InputField