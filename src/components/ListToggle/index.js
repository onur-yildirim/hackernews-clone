import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedList } from 'store/reducers/app'

import { Input, Label, Wrapper } from './styles';

const options = ["latest", "starred"]


export default function ListToggle() {
    const dispatch = useDispatch();
    const { selectedList } = useSelector((state) => state.app)

    return (
        <Wrapper>
            {
                options.map((option, index) => {
                    return (
                        <Fragment key={index}>
                            <Input type="radio" id={`radio-${option}`} name={`switch-${option}`} value={option} checked={option === selectedList} onChange={e => { dispatch(setSelectedList(e.target.value)) }} />
                            <Label htmlFor={`radio-${option}`}>{option}</Label>
                        </Fragment>
                    )
                })
            }
        </Wrapper>
    )
}