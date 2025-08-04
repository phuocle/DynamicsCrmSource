CREATE TABLE [dbo].[msdyn_flowcardtypeBase] (
    [msdyn_flowcardtypeId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_flowcardtypeBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (100)   NULL,
    [msdyn_actionCommand]       NVARCHAR (100)   NULL,
    [msdyn_actionname]          NVARCHAR (256)   NULL,
    [msdyn_cardname]            NVARCHAR (256)   NULL,
    [msdyn_cardtypeid]          UNIQUEIDENTIFIER NULL,
    [msdyn_description]         NVARCHAR (500)   NULL,
    [msdyn_flowname]            NVARCHAR (256)   NULL,
    [msdyn_iscdsflow]           BIT              NULL,
    [msdyn_isdeleted]           BIT              NULL,
    [msdyn_samplebody]          NVARCHAR (256)   NULL,
    [msdyn_sampletitle]         NVARCHAR (100)   NULL,
    [msdyn_workflowid]          NVARCHAR (256)   NULL,
    CONSTRAINT [PK_msdyn_flowcardtypeBase] PRIMARY KEY CLUSTERED ([msdyn_flowcardtypeId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_flowcardtype] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_cardtype_msdyn_flowcardtype_cardtypeid] FOREIGN KEY ([msdyn_cardtypeid]) REFERENCES [dbo].[CardTypeBase] ([CardTypeId]),
    CONSTRAINT [owner_msdyn_flowcardtype] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_flowcardtypeBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_flowcardtypes]
    ON [dbo].[msdyn_flowcardtypeBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_flowcardtypeBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_flowcardtypeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_flowcardtypeBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3AA229A5A8E3418E87FC431DF26EE222]
    ON [dbo].[msdyn_flowcardtypeBase]([msdyn_flowcardtypeId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3AA229A5A8E3418E87FC431DF26EE222]
    ON [dbo].[msdyn_flowcardtypeBase]([msdyn_flowcardtypeId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_3AA229A5A8E3418E87FC431DF26EE222]
    ON [dbo].[msdyn_flowcardtypeBase]([msdyn_name] ASC, [msdyn_flowcardtypeId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

