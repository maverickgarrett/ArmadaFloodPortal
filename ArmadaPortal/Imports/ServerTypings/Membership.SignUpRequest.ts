namespace ArmadaPortal.Membership {
    export interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        FirstName?: string;
        LastName?: string;
        Email?: string;
        Password?: string;
    }
}

