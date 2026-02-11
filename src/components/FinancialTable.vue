<script setup lang="ts">
    import { useTableData } from '@/composables/useTableData'
    import { useChartManager } from '@/composables/useChartManager'
    import TableRow from '@/components/TableRow.vue'
    import ChartSection from '@/components/ChartSection.vue'

    const { tableData } = useTableData()
    const { expandedRows, setChartRef, createChart, toggleRow } = useChartManager()

    const handleToggle = (rowId: string) => {
        const row = tableData.value.find(r => r.id === rowId)

        if (row) {
            toggleRow(rowId)
        }
    }
</script>

<template>
    <div class="financial-table-wrapper">
        <div class="table-container">
            <div class="table-header">
                <div class="header-cell indicator-cell">Показатель</div>
                <div class="header-cell">Текущий день</div>
                <div class="header-cell">Вчера</div>
                <div class="header-cell">Этот день недели</div>
            </div>

            <div
                v-for="row in tableData"
                :key="row.id"
                class="table-row-wrapper"
            >
                <TableRow
                    :row="row"
                    :is-expanded="expandedRows.has(row.id)"
                    @toggle="handleToggle"
                />

                <ChartSection
                    :row="row"
                    :is-expanded="expandedRows.has(row.id)"
                    @chart-ref="setChartRef"
                    @create-chart="createChart"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .financial-table-wrapper {
        width: 100%;
        max-width: 800px;
        margin-inline: auto;
        padding-bottom: 3rem;
    }

    .table-container {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .table-header {
        display: grid;
        grid-template-columns: 2fr 1fr 1.2fr 1fr;
        background: #f9fafb;
        border-bottom: 2px solid #e5e7eb;
        font-weight: 500;
        font-size: 13px;
        color: #6b7280;
    }

    .header-cell {
        padding: 12px 16px;
        text-align: left;
    }

    .header-cell:not(.indicator-cell) {
        text-align: right;
    }

    .table-row-wrapper {
        border-bottom: 1px solid #f3f4f6;
    }
</style>
