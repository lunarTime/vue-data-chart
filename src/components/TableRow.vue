<script setup lang="ts">
    import type { TableRow } from '@/types/table.types'
    import { formatValue, getChangeClass } from '@/utils/formatters'
    import { getChangePercent } from '@/utils/getChange'

    const props = defineProps<{
        row: TableRow
        isExpanded: boolean
    }>()

    const emit = defineEmits<{
        toggle: [rowId: string]
    }>()

    const changePercent = getChangePercent(props.row)
</script>

<template>
    <div
        class="table-row"
        :class="{ expanded: isExpanded }"
        @click="emit('toggle', row.id)"
    >
        <div class="data-cell indicator-cell">
            {{ row.indicator }}
        </div>
        <div class="data-cell">
            {{ formatValue(row.current, row.unit) }}
        </div>
        <div class="data-cell">
            <span>
                {{ formatValue(row.yesterday, row.unit) }}
            </span>
            <span
                v-if="changePercent !== 0"
                class="change-badge"
                :class="getChangeClass(changePercent)"
            >
                {{ changePercent > 0 ? '+' : '' }}{{ changePercent }}%
            </span>
        </div>
        <div class="data-cell">
            {{ formatValue(row.weekDay, row.unit) }}
        </div>
    </div>
</template>

<style scoped>
    .table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1.2fr 1fr;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .table-row:hover {
        background-color: #f9fafb;
    }

    .table-row.expanded {
        background-color: #f0fdf4;
    }

    .data-cell {
        padding: 14px 16px;
        font-size: 14px;
        color: #111827;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .data-cell:not(.indicator-cell) {
        justify-content: flex-end;
    }

    .indicator-cell {
        font-weight: 400;
        color: #374151;
    }

    .change-badge {
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
    }

    .change-badge.positive {
        background-color: #d1fae5;
        color: #065f46;
    }

    .change-badge.negative {
        background-color: #fee2e2;
        color: #991b1b;
    }
</style>
