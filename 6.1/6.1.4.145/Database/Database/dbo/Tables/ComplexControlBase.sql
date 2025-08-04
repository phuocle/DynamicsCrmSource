CREATE TABLE [dbo].[ComplexControlBase] (
    [Type]                   INT              CONSTRAINT [DF_ComplexControlBase_Type] DEFAULT ((0)) NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [Name]                   NVARCHAR (100)   NOT NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [ComplexControlId]       UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ComplexControlIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ComplexControlBase_ComplexControlIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComplexControlXml]      NVARCHAR (MAX)   NOT NULL,
    [Version]                INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ComplexControl] PRIMARY KEY CLUSTERED ([ComplexControlId] ASC) WITH (FILLFACTOR = 80)
);

