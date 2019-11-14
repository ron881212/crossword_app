import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../../components/Nav';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CreatePuzzle = (props) => {
    const [gridNum, setGridNum] = useState([]);
    const [gridComplete, setGridComplete] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [confirmGrid, setConfirmGrid] = useState(null);
    const puzzleContainer = useRef(null)
    const toggle = () => setDropdownOpen(prevState => !prevState);
    let wordArray = []
    let gridArray = []    

    useEffect(()=> highlightGrid())

    const grid = () => {
        console.log(gridNum.length)
        var gridStyle={
            gridboxes: {display:'flex',
            flexGrow: 2,
            border:'1px solid black',
            width: '100px'
        }}
        // boxSize.boxSet = gridNum.length
        if(gridNum.length == 16) gridStyle.gridboxes.width = 500 / 4 - 1 + 'px'
        else if(gridNum.length == 36) gridStyle.gridboxes.width = 500 / 6 - 1 + 'px'
        else if(gridNum.length == 64) gridStyle.gridboxes.width = 500 / 8 - 1 + 'px'
        else if(gridNum.length == 100) gridStyle.gridboxes.width = 500 / 10 - 1 + 'px'
        else if(gridNum.length == 0 || 1) gridStyle.gridboxes.width = '499px'
        return gridNum.map(grids=> (<div key={grids} datatype={grids} style={gridStyle.gridboxes}> {grids} </div>))
    }

    const pickGridNumber = (num) => {
        setGridComplete(false)
        setGridNum(gridNum.length = 0)
        for (let i = 0; i < num * num; i++){ 
            setGridNum([...gridNum, gridNum.push(i)])
        }
        // setGridNum(gridNum.push(gridArray))
        // console.log(gridArray)
        console.log(gridNum)    
        console.log(typeof gridNum)
        // console.log(typeof gridArray)
        setGridComplete(true)
    }
    const highlightGrid = () => {
        const highlightBox = puzzleContainer.current.childNodes
        highlightBox.onmouseover = ()=> this.style.backgroundColor = "blue"
        highlightBox.onmouseout = ()=> this.style.backgroundColor = "blue" 
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
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret>
                      Number of Rows and Column
                        </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Grids</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(4)}>4</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(6)}>6</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(8)}>8</DropdownItem>
                        <DropdownItem onClick={()=>pickGridNumber(10)}>10</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
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
    // gridboxes: {
    //     display:'flex',
    //     border:'1px solid black',
    //     width: '100px'
    // },
    containerTwo: {
        display:'flex',
        flexFlow: 'row wrap'
    }
}

export default CreatePuzzle