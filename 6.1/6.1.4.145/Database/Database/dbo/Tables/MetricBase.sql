CREATE TABLE [dbo].[MetricBase] (
    [UTCConversionTimeZoneCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsAmount]                  BIT              CONSTRAINT [DF_MetricBase_IsAmount] DEFAULT ((1)) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [MetricId]                  UNIQUEIDENTIFIER NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [AmountDataType]            INT              NULL,
    [IsStretchTracked]          BIT              CONSTRAINT [DF_MetricBase_IsStretchTracked] DEFAULT ((0)) NULL,
    [StateCode]                 INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_MetricBase] PRIMARY KEY CLUSTERED ([MetricId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[MetricBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MetricBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[MetricBase]([Name] ASC) WITH (FILLFACTOR = 80);

