<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:user="http://www.microsoft.com/crm" version="1.0">
	<xsl:output method="text"/>
	
	<xsl:template match="/">
		<xsl:for-each select="/ReportFilter/ReportEntity">
			<xsl:choose><xsl:when test=".//condition[(not(@uihidden) or @uihidden='0')]">
				<xsl:value-of select="@displayname"/>
				<xsl:text>:&#xA;</xsl:text>
				<xsl:apply-templates select="fetch/entity/*">
					<xsl:with-param name="labelprefix" select="concat(@displayname, ' -&gt; ')"/>
				</xsl:apply-templates>
				<xsl:text>&#xA;</xsl:text>
			</xsl:when></xsl:choose>
		</xsl:for-each>
	</xsl:template>
	
	<xsl:template match="filter">
		<xsl:apply-templates select="*"/>
	</xsl:template>
	
	<xsl:template match="link-entity">
		<xsl:param name="labelprefix"/>
		<xsl:value-of select="$labelprefix"/>
		<xsl:value-of select="@uiname"/>
		<xsl:text>:&#xA;</xsl:text>
		<xsl:apply-templates select="*">
			<xsl:with-param name="labelprefix" select="concat($labelprefix, @uiname, ' -&gt; ')"/>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="condition">
		<xsl:choose><xsl:when test="(not(@uihidden) or @uihidden='0')">
			<xsl:text>&#160;&#160;&#160;&#160;&#160;</xsl:text>
			<xsl:value-of select="@uiattributename"/>
			<xsl:text>: </xsl:text>
			<em><xsl:value-of select="@uioperatorname"/></em>
			<xsl:text> </xsl:text>
			<xsl:value-of select="@uiname"/>
			<xsl:text>&#xA;</xsl:text>
		</xsl:when></xsl:choose>
	</xsl:template>
	
</xsl:stylesheet>