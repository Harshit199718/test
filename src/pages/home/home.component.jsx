import React from 'react'
import {MainStyle} from '../../components/styled/Main/main.styled'
import Details from '../../components/common/Details/details.component'
import Questions from '../../components/common/Questions/questions.component'
import Button from '../../components/common/Button/button.component'
import Input from '../../components/common/Input/input.component'

function Home() {
    return (
        <MainStyle>
            <h2>Add Question</h2>
            <h5>
                <span className='mr-2'>HOME</span>
                <i className="fa fa-angle-right"></i>
                <span className='ml-2'>ADD QUESTION</span>
            </h5>
            <Details/>
            <Questions/>
            <Button bg_color='#FFE200' font_size = '10px'>SAVE AND ADD MORE</Button>
        </MainStyle>
    )
}

export default Home
