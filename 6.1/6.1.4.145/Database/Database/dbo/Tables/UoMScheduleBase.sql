CREATE TABLE [dbo].[UoMScheduleBase] (
    [UoMScheduleId]        UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                 NVARCHAR (200)   NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [CreatedOn]            DATETIME         NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ImportSequenceNumber] INT              NULL,
    [BaseUoMName]          NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [StatusCode]           INT              NULL,
    [StateCode]            INT              CONSTRAINT [DF_UoMScheduleBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_UoMSchedule] PRIMARY KEY CLUSTERED ([UoMScheduleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_UoMScheduleBase] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UoMScheduleBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UoMScheduleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

