export const formatValue = (value: number, unit: string): string => {
    if (unit === 'rub') {
        return new Intl.NumberFormat('ru-RU').format(value)
    }

    return value.toString()
}

export const getChangeClass = (change: number): string => {
    const isPositive = change > 0

    return isPositive ? 'positive' : 'negative'
}
