CREATE TABLE [dbo].[marketingformdisplayattributesBase] (
    [marketingformdisplayattributesId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OrganizationId]                   UNIQUEIDENTIFIER NULL,
    [statecode]                        INT              NOT NULL,
    [statuscode]                       INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [Name]                             NVARCHAR (100)   NULL,
    [EntityLogicalName]                NVARCHAR (4000)  NULL,
    [DisplayAttributeList]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_marketingformdisplayattributesBase] PRIMARY KEY CLUSTERED ([marketingformdisplayattributesId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_762990672B4E44828741C77924D3FAB7]
    ON [dbo].[marketingformdisplayattributesBase]([marketingformdisplayattributesId] ASC)
    INCLUDE([Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_762990672B4E44828741C77924D3FAB7]
    ON [dbo].[marketingformdisplayattributesBase]([marketingformdisplayattributesId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_762990672B4E44828741C77924D3FAB7]
    ON [dbo].[marketingformdisplayattributesBase]([Name] ASC, [marketingformdisplayattributesId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[marketingformdisplayattributesBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

