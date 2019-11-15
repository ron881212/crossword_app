import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../../components/Nav'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import QuestionForm from '../../components/Forms/QuestionForm'
import BylineForm from '../../components/Forms/BylineForm'

const CreatePuzzle = (props) => {
    const [gridNum, setGridNum] = useState([])
    const [gridComplete, setGridComplete] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [questions, setQuestions] = useState(false)
    const [byline, setByline] = useState(false)
    const [block, setBlock] = useState(false)
    const puzzleContainer = useRef(null)
    const toggle = () => setDropdownOpen(prevState => !prevState);
    let wordArray = []
    let gridArray = []    

    useEffect(()=> highlightGrid())

    const grid = () => {
        var gridStyle={
            gridboxes: {
                display:'flex',
                flexGrow: 3,
                border:'1px solid black',
                backgroundColor: 'white',
                fontSize: '70%',
                margin:0,
                padding:0
            }
        }
        if(gridNum.length == 16) gridStyle.gridboxes.width = 500 / 4 - 1 + 'px'
        else if(gridNum.length == 36) gridStyle.gridboxes.width = 500 / 6 - 1 + 'px'
        else if(gridNum.length == 64) gridStyle.gridboxes.width = 500 / 8 - 1 + 'px'
        else if(gridNum.length == 100) gridStyle.gridboxes.width = 500 / 10 - 1 + 'px'
        else if(gridNum.length == 225) gridStyle.gridboxes.width = 500 / 15 - 1 + 'px'
        else if(gridNum.length == 0 || 1) gridStyle.gridboxes.width = '499px'

        return gridNum.map(grids=> (
            <input key={grids} maxLength="1" datatype={grids} style={gridStyle.gridboxes} placeholder={grids}
                onChange={handleChange} className='gridboxes text-center'

                onMouseOver={(here)=> { !block ?
                    here.currentTarget.style.border = '10px inset #5bc0de' :
                    here.currentTarget.style.border = '10px inset #292b2c'
                }}

                onMouseOut={(here)=> {
                    !block ? here.currentTarget.style.border = '1px solid black' :
                    here.currentTarget.style.border = '1px solid black'
                }}
                    
                onClick={(a)=> {
                    if(block) {
                        a.target.style.backgroundColor = '#292b2c'
                        a.target.datatype = null 
                    } 
                    else if(!block){
                        a.target.style.backgroundColor = 'white'
                        a.target.datatype = 1
                    }
                }}
            />))
    }

    const pickGridNumber = (num) => {
        setGridComplete(false)
        setGridNum(gridNum.length = 0)
        for (let i = 0; i < num * num; i++){ 
            setGridNum([...gridNum, gridNum.push(i)])
        }
        // setGridNum(gridNum.push(gridArray))
        // console.log(gridArray)
        // console.log(gridNum)    
        // console.log(typeof gridNum)
        // console.log(typeof gridArray)
        setGridComplete(true)
    }
    const highlightGrid = () => {
        const highlightBox = puzzleContainer.current.childNodes
        highlightBox.onmouseover = ()=> this.style.backgroundColor = "blue"
        highlightBox.onmouseout = ()=> this.style.backgroundColor = "blue" 
    }
    const handleChange = (e) => {
        e.target.value = e.target.value
        console.log(e.target.value)
        console.log(e.target)
    }
    const autoBlock = () => {
        Array.from(document.getElementsByClassName('gridboxes'))
        .forEach(element => {
            if(!element.datatype){
                element.style.backgroundColor = '#292b2c'
            }
        })
    }
    // highlightAcross and highlightDown are callbacks to hightlight question area
    // use "placeholder" of cell for logic
    const questionMode = (highlightAcross, highlightDown) => {
        setQuestions(!questions)

    }
        return (
            <div>
                <NavBar />
                <div style={styles.container}>
                    <div style={styles.box}>
                        <div ref={puzzleContainer} style={styles.containerTwo}>
                            { gridComplete ? grid() : null }
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='mb-3 ml-3'>
                      <DropdownToggle caret>
                      Number of Rows and Column
                        </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Grids</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(4)}>4 x 4</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(6)}>6 x 6</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(8)}>8 x 8</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(10)}>10 x 10</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(15)}>15 x 15</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Button className='mb-3 ml-3' color="dark" onClick={()=> setBlock(!block)}>{!block ? 'BLOCK' : 'UNBLOCK'}</Button>
                    <Button className='mb-3 ml-3' color="dark" onClick={()=> autoBlock()}>Auto-Block</Button>
                    <Button className='mb-3 ml-3' color="info" onClick={()=> questionMode()}>Questions</Button>
                    <Button className='mb-3 ml-3' color="success" onClick={()=> setByline(!byline)}>Byine</Button>
                    <Button className='mb-3 ml-3' color="primary" onClick={()=> console.log('Submit to database')}>Submit</Button>
                    </div>
                        {questions ? <QuestionForm /> : null}
                        {byline ? <BylineForm /> : null}
                </div>
            </div>
        )
}

const styles = {
    container: {
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
    box: {
        display:'flex', 
        border:'1px solid black',
        width:'500px',
        height:'500px',
        // borderRadius:'5%',
        marginTop:'5%'
    },
    containerTwo: {
        display:'flex',
        flexFlow: 'row wrap'
    }
}

export default CreatePuzzle