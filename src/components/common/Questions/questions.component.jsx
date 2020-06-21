import React, {useState} from 'react'
import Input from '../Input/input.component'
import Textarea from '../Textarea/textarea.component'
import './questions.scss'
import Button from '../Button/button.component'
import CheckBox from '../CheckBox/checkbox.component'
import TextEditor from '../TextEditor/texteditor.component'
import { InputStyle } from '../../styled/Input/input.styled'

function Questions() {
    const [text, setText] = useState("hbh")
    const [check, setCheck] = useState(false)
    const [option, setOption] = useState([])
    const [optionCount, setCount] = useState(1)
    
    const checkHandle = (e) => {
        setCheck(!check)
    }
    
    const handleChange = (event,editor) =>{
        const data = editor.getData()
        // setText(data)
        console.log(data)
    }

    const addOption = async () =>{
        await setCount(optionCount + 1)
        setOption(option=>
            [...option,<div className="row mt-3 ml-1">
                            <div className="col-6 pr-2">
                                <h6>Option {optionCount}</h6>
                                <Input/>
                            </div>
                            <div className="col-6 d-flex align-items-end pl-0">
                                <CheckBox  mb='10px'/>
                            </div>
                        </div>]
        )
        console.log(optionCount,option)
    }
    return (
        <div className='mt-3'>
            <h6 className="d-flex justify-content-between">
                <span>Question 1</span>
                <span>Add More Questions</span>
            </h6>
            <div className="bg-white pl-3 pr-3 pt-3 pb-4" style={{border:'1px solid #eBeBeB'}}>
                <div className="d-flex align-items-center">
                    <h6 className='font-weight-bold' style={{fontSize: '16px'}}>Q.</h6>
                    <div id='input-with-tool' className="p-0 pl-1" style={{width: '100%'}}>
                        <Input onChange/>
                    </div>
                </div>
                <div className="row mt-3 ml-1">
                    <div className="col-6 pr-1">
                        <h6>Add Option</h6>
                        <Input/>
                    </div>
                    <div className="col-6 d-flex align-items-end pl-0">
                        <Button bg_color='#299884' color='#fff' font_size='14px' mt='0' handleClick={optionCount<=5&&addOption}>ADD</Button>
                        <span className='ml-2 mt-3 align-self-center' style={{fontSize: '8px', fontWeight:'900'}}>MAX 5 OPTIONS</span>
                    </div>
                </div>
                {
                    option.map(value => (
                        <>
                        {value}
                        </>
                    ))
                }
                <div className='mt-5'>
                    <h6 className='d-flex align-items-center'><CheckBox checked={check} checkHandle={checkHandle} id='explanation'/><span className='ml-1'>Explanation</span></h6>
                    {check && (
                        <div id='editor-ck' className={text.length ? '':'editor-ck'}>
                            <TextEditor handleChange = {handleChange}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Questions
