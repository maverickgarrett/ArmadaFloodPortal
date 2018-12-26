namespace ArmadaPortal.Flood {
    export interface FloodOrderListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
        BranchId?: string;
        OrderStatusGrouping?: number;
    }
}

