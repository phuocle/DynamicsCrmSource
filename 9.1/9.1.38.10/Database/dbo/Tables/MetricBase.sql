CREATE TABLE [dbo].[MetricBase] (
    [Name]                      NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsAmount]                  BIT              CONSTRAINT [DF_MetricBase_IsAmount] DEFAULT ((1)) NULL,
    [MetricId]                  UNIQUEIDENTIFIER NOT NULL,
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
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MetricBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MetricBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[MetricBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MetricBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5D7C1523B70D4FBDB19D6749AFC3BBDA]
    ON [dbo].[MetricBase]([MetricId] ASC)
    INCLUDE([Name], [IsAmount], [AmountDataType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[MetricBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5D7C1523B70D4FBDB19D6749AFC3BBDA]
    ON [dbo].[MetricBase]([MetricId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

