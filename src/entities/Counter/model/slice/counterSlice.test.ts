import { ICounterSchema } from 'entities/Counter';
import { counterReducer, counterAction } from './counterSlice';

describe('counterSlice.test', () => {
    test('test decrement', () => {
        const state:ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterAction.decrement()))
            .toEqual({ value: 9 });
    });

    test('test increment', () => {
        const state:ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterAction.increment()))
            .toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterAction.increment()))
            .toEqual({ value: 1 });
    });
});
