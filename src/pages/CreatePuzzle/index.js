import React, { useState } from 'react';
import NavBar from '../../components/Nav';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CreatePuzzle = (props) => {
    const [gridNum, setGridNum] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    let wordArray = []
    let gridArray = []

    const grid = (num) => {
        gridArray.length = 0
        for (let i = 0; i < num; i++) {
            setGridNum(gridNum.push(i))
        }
        console.log(gridArray)
    }
        return (
            <div>
                <NavBar />
                <div style={styles.container}>
                    <div style={styles.box}>
                        {gridNum.map(grids=> (<p key={grids}>number of grids: {grids}</p>))}
                    </div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret>
                        Number of rows
                        </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Grid</DropdownItem>
                        <DropdownItem onClick={()=>grid(4)}>4</DropdownItem>
                        <DropdownItem>6</DropdownItem>
                        <DropdownItem>8</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
}

const styles = {
    box: {
    display:'flex', 
    border:'1px solid black',
    width:'500px',
    height:'500px',
    // borderRadius:'5%',
    marginTop:'5%'
    },
    container: {
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    }
}

export default CreatePuzzle