CREATE TABLE [dbo].[TeamTemplateBase] (
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [DefaultAccessRightsMask] INT              NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [ObjectTypeCode]          INT              NOT NULL,
    [TeamTemplateName]        NVARCHAR (100)   NULL,
    [TeamTemplateId]          UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [IsSystem]                BIT              CONSTRAINT [DF_TeamTemplateBase_IsSystem] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamTemplate] PRIMARY KEY CLUSTERED ([TeamTemplateId] ASC) WITH (FILLFACTOR = 80)
);

