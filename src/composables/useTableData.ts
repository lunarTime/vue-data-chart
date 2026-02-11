import { ref } from 'vue'
import type { TableRow } from '@/types/table.types'

export const useTableData = () => {
    const tableData = ref<TableRow[]>([
        {
            id: 'revenue',
            indicator: 'Выручка, руб',
            current: 500521,
            yesterday: 480521,
            weekDay: 4805121,
            unit: 'rub',
            chartData: [420000, 450000, 465000, 485000, 490000, 475000, 460000, 480521, 500521]
        },
        {
            id: 'cash',
            indicator: 'Наличные',
            current: 300000,
            yesterday: 300000,
            weekDay: 300000,
            unit: 'rub',
            chartData: [280000, 285000, 290000, 295000, 300000, 300000, 300000, 300000, 300000]
        },
        {
            id: 'cashless',
            indicator: 'Безналичный расчет',
            current: 100000,
            yesterday: 100000,
            weekDay: 100000,
            unit: 'rub',
            chartData: [95000, 97000, 98000, 99000, 100000, 100000, 100000, 100000, 100000]
        },
        {
            id: 'credit-cards',
            indicator: 'Кредитные карты',
            current: 100521,
            yesterday: 100521,
            weekDay: 100521,
            unit: 'rub',
            chartData: [98000, 99000, 99500, 100000, 100521, 100521, 100521, 100521, 100521]
        },
        {
            id: 'avg-check',
            indicator: 'Средний чек, руб',
            current: 1300,
            yesterday: 900,
            weekDay: 900,
            unit: 'rub',
            chartData: [850, 870, 880, 890, 895, 900, 920, 900, 1300]
        },
        {
            id: 'avg-guest',
            indicator: 'Средний гость, руб',
            current: 1200,
            yesterday: 800,
            weekDay: 800,
            unit: 'rub',
            chartData: [750, 770, 780, 790, 795, 800, 820, 800, 1200]
        },
        {
            id: 'check-removal-after',
            indicator: 'Удаления из чека (после оплаты), руб',
            current: 1000,
            yesterday: 1100,
            weekDay: 900,
            unit: 'rub',
            chartData: [1200, 1180, 1150, 1130, 1120, 1100, 1080, 1100, 1000]
        },
        {
            id: 'check-removal-before',
            indicator: 'Удаления из чека (до оплаты), руб',
            current: 1300,
            yesterday: 1300,
            weekDay: 900,
            unit: 'rub',
            chartData: [1250, 1270, 1280, 1290, 1295, 1300, 1300, 1300, 1300]
        },
        {
            id: 'checks-count',
            indicator: 'Количество чеков',
            current: 34,
            yesterday: 36,
            weekDay: 34,
            unit: 'count',
            chartData: [32, 33, 34, 35, 36, 37, 36, 36, 34]
        },
        {
            id: 'guests-count',
            indicator: 'Количество гостей',
            current: 34,
            yesterday: 36,
            weekDay: 32,
            unit: 'count',
            chartData: [30, 31, 32, 33, 34, 36, 35, 36, 34]
        }
    ])

    return {
        tableData
    }
}
