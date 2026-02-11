import { ref, onBeforeUnmount } from 'vue'
import Highcharts from 'highcharts'
import { formatValue } from '@/utils/formatters'
import type { TableRow } from '@/types/table.types'

export const useChartManager = () => {
    const expandedRows = ref<Set<string>>(new Set())
    const chartRefs = ref<Map<string, HTMLElement>>(new Map())
    const chartInstances = ref<Map<string, Highcharts.Chart>>(new Map())

    const setChartRef = (rowId: string, el: HTMLElement | null) => {
        if (el) {
            chartRefs.value.set(rowId, el)
        }
    }

    const createChart = (rowId: string, row: TableRow) => {
        const container = chartRefs.value.get(rowId)

        if (!container) {
            return
        }

        const chart = Highcharts.chart(container, {
            chart: {
                type: 'line',
                height: 250,
                backgroundColor: 'transparent',
                spacing: [10, 10, 10, 10]
            },
            title: {
                text: undefined
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['', '', '', '', '', '', '', '', ''],
                lineColor: '#e5e7eb',
                tickLength: 0,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: undefined
                },
                gridLineColor: '#f3f4f6',
                labels: {
                    style: {
                        color: '#6b7280',
                        fontSize: '11px'
                    }
                }
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: true,
                        radius: 4,
                        fillColor: '#10b981',
                        lineWidth: 2,
                        lineColor: '#10b981'
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    }
                }
            },
            series: [
                {
                    type: 'line',
                    name: row.indicator,
                    data: row.chartData,
                    color: '#10b981'
                }
            ],
            tooltip: {
                backgroundColor: '#ffffff',
                borderColor: '#e5e7eb',
                borderRadius: 8,
                shadow: false,
                useHTML: true,
                formatter: function () {
                    return `<div style="padding: 4px 8px;">
            <strong>${formatValue(this.y || 0, row.unit)}</strong>
          </div>`
                }
            }
        })

        chartInstances.value.set(rowId, chart)
    }

    const destroyChart = (rowId: string) => {
        const chart = chartInstances.value.get(rowId)

        if (chart) {
            chart.destroy()
            chartInstances.value.delete(rowId)
        }
    }

    const toggleRow = (rowId: string) => {
        if (expandedRows.value.has(rowId)) {
            expandedRows.value.delete(rowId)
            destroyChart(rowId)
        } else {
            expandedRows.value.add(rowId)
        }
    }

    onBeforeUnmount(() => {
        chartInstances.value.forEach(chart => chart.destroy())
    })

    return {
        expandedRows,
        setChartRef,
        createChart,
        destroyChart,
        toggleRow
    }
}
