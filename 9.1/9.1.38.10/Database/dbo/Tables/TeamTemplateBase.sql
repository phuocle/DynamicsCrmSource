CREATE TABLE [dbo].[TeamTemplateBase] (
    [ObjectTypeCode]          INT              NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [TeamTemplateName]        NVARCHAR (100)   NULL,
    [ModifiedOn]              DATETIME         NULL,
    [DefaultAccessRightsMask] INT              NOT NULL,
    [TeamTemplateId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [IsSystem]                BIT              CONSTRAINT [DF_TeamTemplateBase_IsSystem] DEFAULT ((0)) NOT NULL,
    [versionnumber]           ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamTemplate] PRIMARY KEY CLUSTERED ([TeamTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TeamTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TeamTemplateBase] SET (LOCK_ESCALATION = DISABLE);

