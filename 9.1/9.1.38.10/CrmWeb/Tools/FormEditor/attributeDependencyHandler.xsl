<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="html" />
	<xsl:param name="Label_Entity" />
	<xsl:param name="Label_AttributeName" />
	<xsl:param name="Label_AttributeId" />
	<xsl:param name="Label_Enabled" />
	<xsl:param name="Alignment" />
	<xsl:param name="Label_True"/>
	<xsl:param name="Label_False"/>
	<xsl:template match="/formLibraries | /Dependency[@componentType='Attribute']">
		<table cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed;">
			<col width="50%" />
			<col width="50%" />
			<tr height="20px" class="ms-crm-library-header-row">
				<xsl:attribute name="align">
					<xsl:value-of select="$Alignment" />
				</xsl:attribute>
				<th class="ms-crm-library-header-cell">
					<xsl:attribute name="title">
						<xsl:value-of select="$Label_Entity" />
					</xsl:attribute>
					<xsl:value-of select="$Label_Entity" />
				</th>
				<th class="ms-crm-library-header-cell">
					<xsl:attribute name="title">
						<xsl:value-of select="$Label_AttributeName" />
					</xsl:attribute>
					<xsl:value-of select="$Label_AttributeName" />
				</th>
			</tr>
			<xsl:for-each select="Attribute">
				<xsl:call-template name="renderAttributeDependency" />
			</xsl:for-each>
		</table>
	</xsl:template>
	<xsl:template name="renderAttributeDependency">
		<tr onclick="Mscrm.FormLibraryAndEventHandlerUtils.setAttributeActive(Mscrm.Utilities.eventToDomEvent(event)); " ondblclick="return false;" height="20px">
			<xsl:attribute name="id">
				<xsl:value-of select="@attributeId" />
			</xsl:attribute>
			<xsl:attribute name="align">
				<xsl:value-of select="$Alignment" />
			</xsl:attribute>
			<xsl:attribute name="entityId">
				<xsl:value-of select="@entityId" />
			</xsl:attribute>
			<td class="ms-crm-library-cell">
				<a onkeydown="Mscrm.FormLibraryAndEventHandlerUtils.handleAttributeKeyPress(Mscrm.Utilities.eventToDomEvent(event));" onclick="return false;" href="javascript:onclick();" target="_self" >
					<xsl:attribute name="title">
						<xsl:value-of select="@entityName" />
					</xsl:attribute>
					<xsl:value-of select="@entityName" />
				</a>
			</td>
			<td class="ms-crm-library-cell">
				<xsl:attribute name="title">
					<xsl:value-of select="@attributeName" />
				</xsl:attribute>
				<xsl:value-of select="@attributeName" />
			</td>
		</tr>
	</xsl:template>
</xsl:stylesheet>