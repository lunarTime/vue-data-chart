export interface TableRow {
    id: string
    indicator: string
    current: number
    yesterday: number
    weekDay: number
    unit: 'rub' | 'count'
    chartData: number[]
}
