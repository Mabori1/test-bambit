import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import type { IPhotos } from "~/types";

export const columns: ColumnDef<IPhotos>[] = [
  {
    accessorKey: "id",
    header: () => h("div", { class: "text-left" }, "Ид"),
    cell: ({ row }) => {
      const id = Number.parseFloat(row.getValue("id"));

      return h("div", { class: "text-left font-medium" }, id);
    },
  },
  {
    accessorKey: "albumId",
    header: () => h("div", { class: "text-left" }, "Альбом"),
    cell: ({ row }) => {
      const albumId: number = row.getValue("albumId");
      return h("div", { class: "text-left font-medium" }, albumId);
    },
  },
  {
    accessorKey: "title",
    header: () => h("div", { class: "text-left" }, "Название"),
    cell: ({ row }) => {
      const title: string = row.getValue("title");
      return h("div", { class: "text-left font-medium" }, title);
    },
  },
  {
    accessorKey: "url",
    header: () => h("div", { class: "text-left" }, "Ссылка"),
    cell: ({ row }) => {
      const url: string = row.getValue("thumbnailUrl");
      return h("div", { class: "text-left font-medium" }, url);
    },
  },
  {
    accessorKey: "thumbnailUrl",
    header: () => h("div", { class: "text-left" }, "Миниатюра"),
    cell: ({ row }) => {
      const thumbnailUrl = String(row.getValue("thumbnailUrl"));
      return h("div", { class: "text-left font-medium" }, thumbnailUrl);
    },
  },
];
