import type { ColumnDef } from "@tanstack/vue-table";
import type { Photo } from "../data/schema";

import { h } from "vue";
import DataTableColumnHeader from "./DataTableColumnHeader.vue";
import DataTableCellTooltip from "./DataTableCellTooltip.vue";

export const columns: ColumnDef<Photo>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => h(DataTableColumnHeader, { column, title: "Ид" }),
    cell: ({ row }) => h("p", { class: "w-[22px]" }, row.getValue("id")),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "albumId",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Альбом" }),
    cell: ({ row }) => h("p", { class: "w-[22px]" }, row.getValue("albumId")),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) =>
      h(DataTableColumnHeader, {
        column,
        title: "Название",
      }),

    cell: ({ row }) => {
      return h(DataTableCellTooltip, {
        title: row.getValue("title") as string,
        class: "max-w-[150px] truncate font-medium",
      });
    },
  },
  {
    accessorKey: "url",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Ссылка" }),

    cell: ({ row }) => {
      return h(DataTableCellTooltip, {
        title: row.getValue("url") as string,
        class: "max-w-[140px]  font-medium",
      });
    },
  },

  {
    accessorKey: "thumbnailUrl",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Миниатюра" }),

    cell: ({ row }) => {
      return h(DataTableCellTooltip, {
        title: row.getValue("thumbnailUrl") as string,
        class: "max-w-[140px] truncate font-medium",
      });
    },
  },
];
