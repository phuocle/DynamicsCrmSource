CREATE TABLE [dbo].[cascadegrantrevokeaccessversiontrackerBase] (
    [cascadegrantrevokeaccessversiontrackerId] UNIQUEIDENTIFIER NOT NULL,
    [name]                                     NVARCHAR (100)   NULL,
    [CreatedBy]                                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                                DATETIME         NULL,
    [CreatedOnBehalfBy]                        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]                     INT              NULL,
    [MessageName]                              NVARCHAR (100)   NULL,
    [ModifiedBy]                               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                               DATETIME         NULL,
    [ModifiedOnBehalfBy]                       UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]                      DATETIME         NULL,
    [ParentEntityId]                           NVARCHAR (100)   NULL,
    [ParentObjectTypeCode]                     INT              NULL,
    [statecode]                                INT              NULL,
    [statuscode]                               INT              NULL,
    [TimeZoneRuleVersionNumber]                INT              NULL,
    [UTCConversionTimeZoneCode]                INT              NULL,
    CONSTRAINT [PK_cascadegrantrevokeaccessversiontrackerBase] PRIMARY KEY CLUSTERED ([cascadegrantrevokeaccessversiontrackerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);

