CREATE TABLE [dbo].[CallbackRegistrationBase] (
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [Scope]                  INT              NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [Version]                INT              NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [Name]                   NVARCHAR (256)   NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [Url]                    NVARCHAR (2000)  NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_CallbackRegistrationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Message]                INT              NOT NULL,
    [RunAs]                  INT              CONSTRAINT [DF_CallbackRegistrationBase_RunAs] DEFAULT ((1)) NOT NULL,
    [EntityName]             NVARCHAR (255)   NOT NULL,
    [PostponeUntil]          NVARCHAR (MAX)   NULL,
    [FilterExpression]       NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [FilteringAttributes]    NVARCHAR (MAX)   NULL,
    [CallbackRegistrationId] UNIQUEIDENTIFIER CONSTRAINT [DF_CallbackRegistrationBase_CallbackRegistrationId] DEFAULT (newid()) NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_CallbackRegistrationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [UQ_CallbackRegistrationBase_Name] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CallbackRegistrationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CallbackRegistrationBase] SET (LOCK_ESCALATION = DISABLE);

