type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([cls]) => cls),
        ...additional.filter(Boolean),
    ].join(' ');
}
