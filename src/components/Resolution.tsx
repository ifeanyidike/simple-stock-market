import { Dispatch, SetStateAction } from 'react'
import Dropdown from './Dropdown'
import {type ResolutionType } from '../types'

type Props = {
    resolution: ResolutionType;
    setResolution: Dispatch<SetStateAction<ResolutionType>>
}
const Resolution = ({setResolution, resolution}: Props) => {
    const resolutions = [
        {label: 'Daily', value: 'daily'},
        {label: 'Weekly', value: 'weekly'},
        {label: 'Monthly', value: 'monthly'},
        {label: 'Intraday', value: 'intraday'}
    ]
    const defaultValue =  {label: 'Intraday', value: 'intraday'}
  return (
    <div>
        <Dropdown 
            items={resolutions} 
            hasSearch={false} 
            defaultValue={defaultValue} 
            callback={(data) => {
                if(data.value === resolution) return
                setResolution(data.value as ResolutionType)
            }}
        />
    </div>
  )
}

export default Resolution