import React, { useState } from 'react'
import axios from 'axios'
import { DefaultButton, PrimaryButton, Dropdown, Stack, IStackTokens } from 'office-ui-fabric-react'
//import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack'


import EmployeeDetails from './EmployeeDetails'
import './App.css'

const EmployeeDashboard = (props) => {
    const [department, setDepartment] = useState('')
    const [empId, setEmpId] = useState('')
    const [dropDownIds, setDropDownIds] = useState([])
    const [empDetails, setEmpDetails] = useState({})
    
    const handleDepartment = (e, selectedOption) => {
        setDepartment(selectedOption.key)
        console.log(selectedOption.key)
        

        if(selectedOption.key === 'hr') {
            setDropDownIds([1, 2, 3, 4, 5])
        } else {
            setDropDownIds([6, 7, 8 , 9, 10])
        }
    }

    // const handleEmpId = (e) => {
    //     setEmpId(e.target.value)
    // }
    const handleEmpId = (e, selectedEmpId) => {
        setEmpId(selectedEmpId.key)
    }

    const getEmpDetails = () => {
        if(empId) {
            axios.get( ` https://reqres.in/api/users/${empId} `)
            .then(response => {
                //console.log(response.data.data)
                setEmpDetails(response.data.data)
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }

    const handleClear = (e) => {
        //console.log('clearing')
        setDepartment('')
        setEmpId('')
        setEmpDetails({})
    }
    
    //const stackTokens: IStackTokens = { childrenGap: 40 }

    return (
        <div>                    
            <Stack horizontal tokens={{ childrenGap: 30 }} verticalAlign="end">
                <Dropdown
                    label="Departments : "  
                    onChange={handleDepartment}                            
                    options={
                        [
                            { key: 'hr', text: 'HR'},
                            { key: 'engineering', text: 'ENGINEERING'},
                        ]
                    }      
                    required          
                    styles={{ dropdown: {width: 350} }}      
                    
                >
                </Dropdown>
    
                <Dropdown
                    label= "Employee Id : "                        
                    onChange={handleEmpId}
                    
                    options={ 
                        ( department === '' )
                        ?
                        [{ key: '', text: 'select department first' }]
                        :
                        // department === 'HR' ?
                        // dropDownIds.map(id => ( { text: id, key: id } ))
                        // :
                        dropDownIds.map(e => ({ text: e, key: e } ))
                    }       
                    required                 
                    styles={{ dropdown: {width: 350} }}                    
                >
                </Dropdown>

                <DefaultButton text="GetDetails" onClick={getEmpDetails}  />
                <DefaultButton text="Clear" onClick={handleClear}  />
            </Stack>

            <EmployeeDetails empDetails={empDetails} />
        </div>
    )
}

export default EmployeeDashboard
