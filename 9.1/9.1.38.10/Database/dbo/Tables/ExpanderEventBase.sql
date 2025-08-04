CREATE TABLE [dbo].[ExpanderEventBase] (
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [Registrations]      NVARCHAR (MAX)   NULL,
    [Name]               NVARCHAR (256)   NOT NULL,
    [CorrelationId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]          DATETIME         NULL,
    [ContextUri]         NVARCHAR (2000)  NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [ExpanderEventId]    UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ExpanderEvent] PRIMARY KEY CLUSTERED ([ExpanderEventId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ExpanderEventBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ExpanderEventBase] SET (LOCK_ESCALATION = DISABLE);

