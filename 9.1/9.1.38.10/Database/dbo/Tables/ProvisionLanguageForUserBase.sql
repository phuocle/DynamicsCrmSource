CREATE TABLE [dbo].[ProvisionLanguageForUserBase] (
    [ProvisionLanguageForUserId] UNIQUEIDENTIFIER NOT NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [OperationStatus]            INT              NULL,
    [AsyncOperationId]           UNIQUEIDENTIFIER NULL,
    [Lcid]                       INT              NULL,
    [UserId]                     UNIQUEIDENTIFIER NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_ProvisionLanguageForUserBase] PRIMARY KEY CLUSTERED ([ProvisionLanguageForUserId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);

