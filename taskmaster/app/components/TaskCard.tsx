import React, { useState } from 'react'
import Link from 'next/link';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { Card, Flex, Box, Text} from '@radix-ui/themes';
import { FaRegTrashCan } from 'react-icons/fa6'
import { TfiPencil } from 'react-icons/tfi'
import Conditional from './Conditional';
import CheckBox from './CheckBox';


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
                        {completed===true ? (
                            <Text as="div" size="6" className='line-through'>
                                {taskName} 
                            </Text>
                        ) : (
                            <Text as="div" size="6">
                                {taskName} 
                            </Text>
                        )}
                        <Text as="div" size="2">
                            Due on: {dueOn}
                        </Text>
                        {completed === false ? (
                            <CheckBox completed={completed} />
                        ) : (
                            null
                        )} 
                        <span className="mr-3">
                            <button className='p-3 bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-lg'>
                                <FaRegTrashCan className='fill-current text-white'/>
                            </button>
                        </span>
                        <span className="mr-3">
                            <button className="p-3 bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-lg">
                                <Link href='/tasks/update'>
                                    <TfiPencil className="fill-current text-white"/>
                                </Link>
                            </button>
                        </span>
                    </Box>
                </Flex>
            </Card>
        </div>
  )
}

export default TaskCard