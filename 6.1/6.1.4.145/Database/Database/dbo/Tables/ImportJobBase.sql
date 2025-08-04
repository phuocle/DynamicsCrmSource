CREATE TABLE [dbo].[ImportJobBase] (
    [CompletedOn]               DATETIME         NULL,
    [StartedOn]                 DATETIME         NULL,
    [ImportJobId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Data]                      NVARCHAR (MAX)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SolutionName]              NVARCHAR (256)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportJobBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Progress]                  FLOAT (53)       NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportJob] PRIMARY KEY CLUSTERED ([ImportJobId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_SolutionName]
    ON [dbo].[ImportJobBase]([SolutionName] ASC) WHERE ([SolutionName] IS NOT NULL) WITH (FILLFACTOR = 80);

