CREATE TABLE [dbo].[msdyn_actioncardrolesettingBase] (
    [msdyn_actioncardrolesettingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerId]                       UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                   INT              CONSTRAINT [DF_msdyn_actioncardrolesettingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]            UNIQUEIDENTIFIER NULL,
    [statecode]                     INT              NOT NULL,
    [statuscode]                    INT              NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [msdyn_name]                    NVARCHAR (100)   NULL,
    [msdyn_cardtypeid]              UNIQUEIDENTIFIER NULL,
    [msdyn_IsDisabled]              BIT              NULL,
    [msdyn_Roleid]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_actioncardrolesettingBase] PRIMARY KEY CLUSTERED ([msdyn_actioncardrolesettingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_actioncardrolesetting] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [lk_msdyn_cardtypeid] FOREIGN KEY ([msdyn_cardtypeid]) REFERENCES [dbo].[CardTypeBase] ([CardTypeId]),
    CONSTRAINT [lk_msdyn_roleid] FOREIGN KEY ([msdyn_Roleid]) REFERENCES [dbo].[RoleBaseIds] ([RoleId]),
    CONSTRAINT [owner_msdyn_actioncardrolesetting] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_actioncardrolesettingBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_actioncardrolesettings]
    ON [dbo].[msdyn_actioncardrolesettingBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_actioncardrolesettingBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_actioncardrolesettingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_actioncardrolesettingBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5C9251E1CDE04100AD4F53B7F3CF7DAC]
    ON [dbo].[msdyn_actioncardrolesettingBase]([msdyn_name] ASC, [msdyn_actioncardrolesettingId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5C9251E1CDE04100AD4F53B7F3CF7DAC]
    ON [dbo].[msdyn_actioncardrolesettingBase]([msdyn_actioncardrolesettingId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5C9251E1CDE04100AD4F53B7F3CF7DAC]
    ON [dbo].[msdyn_actioncardrolesettingBase]([msdyn_actioncardrolesettingId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

