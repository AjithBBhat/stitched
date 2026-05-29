import React from "react";
import { defineDashboardExtension } from "@vendure/dashboard";
import { DataTableBulkActionItem } from "@/vdb/components/data-table/data-table-bulk-action-item.js";
import { BulkActionComponent } from "@/vdb/framework/extension-api/types/data-table.js";
import { usePaginatedList } from "@/vdb/hooks/use-paginated-list.js";
import { api } from "@/vdb/graphql/api.js";
import { Trans } from "@lingui/react/macro";
import { Power } from "lucide-react";

// Bulk action component to disable selected products
export const DisableProductsBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  const { refetchPaginatedList } = usePaginatedList();

  const doDisable = async () => {
    const inputs = selection.map((s: any) => ({ id: s.id, enabled: false }));
    await api.mutate(
      `mutation UpdateProducts($input: [UpdateProductInput!]!) { updateProducts(input: $input) { id } }`,
      { input: inputs },
    );
    refetchPaginatedList();
    table.resetRowSelection();
  };

  return (
    <DataTableBulkActionItem
      requiresPermission={["UpdateCatalog", "UpdateProduct"]}
      onClick={doDisable}
      label={<Trans>Disable</Trans>}
      icon={Power}
      confirmationText={<Trans>Disable the selected products?</Trans>}
      className="text-destructive"
    />
  );
};

export const EnableProductsBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  const { refetchPaginatedList } = usePaginatedList();

  const doEnable = async () => {
    const inputs = selection.map((s: any) => ({ id: s.id, enabled: true }));
    await api.mutate(
      `mutation UpdateProducts($input: [UpdateProductInput!]!) { updateProducts(input: $input) { id } }`,
      { input: inputs },
    );
    refetchPaginatedList();
    table.resetRowSelection();
  };

  return (
    <DataTableBulkActionItem
      requiresPermission={["UpdateCatalog", "UpdateProduct"]}
      onClick={doEnable}
      label={<Trans>Enable</Trans>}
      icon={Power}
      confirmationText={<Trans>Enable the selected products?</Trans>}
      className="text-primary"
    />
  );
};

// Register the data table extension for the product list
defineDashboardExtension({
  dataTables: [
    {
      pageId: "product-list",
      bulkActions: [
        {
          order: 40,
          component: EnableProductsBulkAction,
        },
        {
          order: 50,
          component: DisableProductsBulkAction,
        },
      ],
    },
  ],
});

export default null;
