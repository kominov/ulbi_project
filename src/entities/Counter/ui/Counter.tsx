import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterAction } from '../model/slice/counterSlice';

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterAction.increment());
    };
    const decrement = () => {
        dispatch(counterAction.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title-counter">{counterValue}</h1>
            <AppButton data-testid="increment-btn" onClick={increment}>increment</AppButton>
            <AppButton data-testid="decrement-btn" onClick={decrement}>decrement</AppButton>
        </div>
    );
}
