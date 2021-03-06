USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetCustomAttributeIds]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetCustomAttributeIds]() 
returns table
as
    return(
        select distinct AttributeId
        from MetadataSchema.Attribute
        where AttributeId not in (
                    select AttributeId
                    from MetadataSchema.Attribute
                    where SolutionId = 'FD140AAD-4DF4-11DD-BD17-0019B9312238')); -- SystemSolutionId
GO
