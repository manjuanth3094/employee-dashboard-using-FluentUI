import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, Image } from 'office-ui-fabric-react'

import './App.css'

const EmployeeDetails = (props) => {
    const { empDetails } = props

    return (
            <div>
                {
                    Object.keys(empDetails).length !== 0 ? (
                        <div className='container'>					
                                <Card className='container' aria-label='Basic vertical card'>							
                                    <Card.Item fill>
                                        <Image
                                            src={empDetails.avatar}
                                            alt="Placeholder image."
                                            width='100%'
                                            
                                        />
                                        <Text> 
                                            ID : {empDetails.id}                                    
                                        </Text>  &emsp;  &emsp; &emsp;  &emsp; &emsp;
                                        <Text > 
                                            Name : {empDetails.first_name} {empDetails.last_name}
                                        </Text> 
                                    </Card.Item>				
                                </Card>
                           
                        </div>
                    ) : ('')				
                }          
            </div>  
    )
}

export default EmployeeDetails
