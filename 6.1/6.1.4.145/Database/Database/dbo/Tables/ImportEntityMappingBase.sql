CREATE TABLE [dbo].[ImportEntityMappingBase] (
    [ImportMapId]           UNIQUEIDENTIFIER NULL,
    [StatusCode]            INT              CONSTRAINT [DF_ImportEntityMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ImportEntityMappingId] UNIQUEIDENTIFIER NOT NULL,
    [StateCode]             INT              CONSTRAINT [DF_ImportEntityMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]            DATETIME         NOT NULL,
    [CreatedOn]             DATETIME         NOT NULL,
    [DeDupe]                INT              CONSTRAINT [DF_ImportEntityMappingBase_DeDupe] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ProcessCode]           INT              CONSTRAINT [DF_ImportEntityMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [TargetEntityName]      NVARCHAR (160)   NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [SourceEntityName]      NVARCHAR (160)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportEntityMapping] PRIMARY KEY CLUSTERED ([ImportEntityMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [ImportEntityMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportEntityMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SourceEntityName]
    ON [dbo].[ImportEntityMappingBase]([SourceEntityName] ASC) WITH (FILLFACTOR = 80);

