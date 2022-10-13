import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('withOneArg', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('withAdditional', () => {
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2');
    });

    test('withMods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }))
            .toBe('someClass hovered scrollable');
    });

    test('with all arg', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe('someClass hovered scrollable class1 class2');
    });

    test('with mode undefined', () => {
        expect(classNames('', { hovered: true, scrollable: undefined }))
            .toBe(' hovered');
    });

    test('only additional', () => {
        expect(classNames('', {}, ['class1']))
            .toBe(' class1');
    });

    test('without cls', () => {
        expect(classNames(
            '',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(' hovered class1 class2');
    });
});
