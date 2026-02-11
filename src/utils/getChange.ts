import type { TableRow } from '@/types/table.types'

export const getChangePercent = (row: TableRow): number => {
    if (row.yesterday === 0) return 0

    const diff = row.current - row.yesterday

    return Math.round((diff / row.yesterday) * 100)
}
