<script setup lang="ts">
    import { watch, nextTick, type VNodeRef } from 'vue'
    import type { TableRow } from '@/types/table.types'

    const props = defineProps<{
        row: TableRow
        isExpanded: boolean
    }>()

    const emit = defineEmits<{
        chartRef: [rowId: string, el: HTMLElement | null]
        createChart: [rowId: string, row: TableRow]
    }>()

    const setRef: VNodeRef = el => {
        emit('chartRef', props.row.id, el instanceof HTMLElement ? el : null)
    }

    watch(
        () => props.isExpanded,
        newVal => {
            if (newVal) {
                nextTick(() => {
                    emit('createChart', props.row.id, props.row)
                })
            }
        }
    )
</script>

<template>
    <transition name="expand">
        <div
            v-if="isExpanded"
            class="chart-container"
        >
            <div
                :ref="setRef"
                class="chart"
            ></div>
        </div>
    </transition>
</template>

<style scoped>
    .chart-container {
        padding: 16px;
        background: #fafafa;
        border-top: 1px solid #e5e7eb;
        overflow: hidden;
    }

    .chart {
        width: 100%;
        height: 250px;
    }

    .expand-enter-active,
    .expand-leave-active {
        transition: all 0.3s ease;
        max-height: 300px;
    }

    .expand-enter-from,
    .expand-leave-to {
        max-height: 0;
        opacity: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
