CREATE TABLE [dbo].[UpgradeActionTracker] (
    [ActionId]               UNIQUEIDENTIFIER NOT NULL,
    [UpgradeToVersionNumber] NVARCHAR (20)    NULL,
    [ExecutionOrder]         INT              IDENTITY (1, 1) NOT NULL,
    [WasExecuted]            BIT              NOT NULL,
    [ActionName]             NVARCHAR (MAX)   NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [ExecutionTime]          NVARCHAR (64)    NULL,
    [HashFile]               NVARCHAR (MAX)   NULL,
    [HashValue]              NVARCHAR (MAX)   NULL,
    [CreatedOnUtc]           DATETIME         NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UpgradeActionTracker]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UpgradeActionTracker] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_UpgradeActionTracker]
    ON [dbo].[UpgradeActionTracker]([ActionId] ASC);

