
namespace ArmadaPortal.Serene.Default {
    export interface ExceptionsRow {
        Id?: number;
        Guid?: string;
        ApplicationName?: string;
        MachineName?: string;
        CreationDate?: string;
        Type?: string;
        IsProtected?: boolean;
        Host?: string;
        Url?: string;
        HttpMethod?: string;
        IpAddress?: string;
        Source?: string;
        Message?: string;
        Detail?: string;
        StatusCode?: number;
        Sql?: string;
        DeletionDate?: string;
        FullJson?: string;
        ErrorHash?: number;
        DuplicateCount?: number;
    }

    export namespace ExceptionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ApplicationName';
        export const localTextPrefix = 'Default.Exceptions';

        export namespace Fields {
            export declare const Id;
            export declare const Guid;
            export declare const ApplicationName;
            export declare const MachineName;
            export declare const CreationDate;
            export declare const Type;
            export declare const IsProtected;
            export declare const Host;
            export declare const Url;
            export declare const HttpMethod;
            export declare const IpAddress;
            export declare const Source;
            export declare const Message;
            export declare const Detail;
            export declare const StatusCode;
            export declare const Sql;
            export declare const DeletionDate;
            export declare const FullJson;
            export declare const ErrorHash;
            export declare const DuplicateCount;
        }

        [
            'Id',
            'Guid',
            'ApplicationName',
            'MachineName',
            'CreationDate',
            'Type',
            'IsProtected',
            'Host',
            'Url',
            'HttpMethod',
            'IpAddress',
            'Source',
            'Message',
            'Detail',
            'StatusCode',
            'Sql',
            'DeletionDate',
            'FullJson',
            'ErrorHash',
            'DuplicateCount'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}