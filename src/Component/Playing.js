import React from 'react'
import { Bar } from './Seccomponent/Bar'
import { Paris } from './Seccomponent/Paris'
import { Miami } from './Seccomponent/Miami'

export const Playing = () => {
  return (
    <div className='Playing'>
        <Bar/>
        <Paris/>
        <Miami/>
    </div>
  )
}
