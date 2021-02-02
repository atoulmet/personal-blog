const base = {
    xxs: 480,
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
}

export const breakpoints = Object.entries(base).reduce(
    (acc, [key, value]) => {
        acc.minWidth[key] = value
        acc.maxWidth[key] = value - 1
        return acc
    },
    {
        minWidth: {},
        maxWidth: {},
    }
)

export const media = {
    minWidth: {
        xxs: `@media (min-width: ${breakpoints.minWidth.xxs}px)`,
        xs: `@media (min-width: ${breakpoints.minWidth.xs}px)`,
        sm: `@media (min-width: ${breakpoints.minWidth.sm}px)`,
        md: `@media (min-width: ${breakpoints.minWidth.md}px)`,
        lg: `@media (min-width: ${breakpoints.minWidth.lg}px)`,
    },
    maxWidth: {
        xxs: `@media (max-width: ${breakpoints.maxWidth.xxs}px)`,
        xs: `@media (max-width: ${breakpoints.maxWidth.xs}px)`,
        sm: `@media (max-width: ${breakpoints.maxWidth.sm}px)`,
        md: `@media (max-width: ${breakpoints.maxWidth.md}px)`,
        lg: `@media (max-width: ${breakpoints.maxWidth.lg}px)`,
    },
}