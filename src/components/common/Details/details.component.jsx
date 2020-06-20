import React from 'react'
import Select  from '../Select/select.component'
import Input  from '../Input/input.component'
import Textarea  from '../Textarea/textarea.component'
import CheckBox from '../CheckBox/checkbox.component'
import './details.scss';

function Details() {
    return (
        <section className='details row'>
            <div className="select-block col-6">
                <h6 id='imp'>Subject <span>*</span> </h6>
                <Select></Select>
            </div>
            <div className="select-block col-6">
                <h6 id='imp'>Difficulty level <span>*</span> </h6>
                <Select></Select>
            </div>
            <div className="select-block mt-3 col-6">
                <h6 id='imp'>Topic & Tags <span>*</span> </h6>
                <Input/>
            </div>
            <div className="select-block mt-3 col-6">
                <h6 id='imp'>Question Types <span>*</span> </h6>
                <Select></Select>
            </div>
            <div className="select-block mt-3 col-12">
                <h6 className='d-flex align-items-center'><CheckBox/><span className='ml-1'>Common Data</span></h6>
                <Textarea/>
            </div>
        </section>
    )
}

export default Details
