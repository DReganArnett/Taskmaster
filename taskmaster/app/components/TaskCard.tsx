import React, { useState } from 'react'
import Link from 'next/link';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { Card, Flex, Box, Text} from '@radix-ui/themes';
import { FaRegTrashCan } from 'react-icons/fa6'
import Conditional from './Conditional';


interface Props {
  id: number;
  taskName: string,
  dueOn: string,
  completed: boolean
}


const TaskCard = ({id, taskName, completed, dueOn}: Props) => {

   return (
        <div className="mb-10">
            <Card style={{ maxWidth: 300 }}>
                <Flex gap="3" align="center">
                    <Box>
                        <Text as="div" size="6">
                        {taskName} 
                        </Text>
                        <Text as="div" size="2">
                        Due on: {dueOn}
                        </Text>
                        <div>
                        Completed: <input type='checkbox'  />
                        </div>
                        <span className="mr-3">
                            <button className='p-3 bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-lg'>
                                <FaRegTrashCan className='fill-current text-white'/>
                            </button>
                        </span>
                        {/* <Conditional showWhen={completed}> */}
                            
                        {/* </Conditional> */}
                    </Box>
                </Flex>
            </Card>
        </div>
  )
}

export default TaskCard