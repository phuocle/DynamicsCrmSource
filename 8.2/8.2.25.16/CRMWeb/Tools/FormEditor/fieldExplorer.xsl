<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html"/>
	<xsl:param name="sortColumnName"/>
	<xsl:param name="languageName"/>
	<xsl:param name="userLanguageCode"/>
	<xsl:param name="sortOrder"/>
	<xsl:param name="RTL"/>
	<xsl:param name="ToolTip_DisplayName"/>
	<xsl:param name="ToolTip_DBName"/>
	<xsl:param name="ToolTip_DataType"/>
	<xsl:param name="isCustomizable"/>

	<xsl:template match="/fields">
		<xsl:choose>
			<xsl:when test="$sortOrder='ascending'">
				<xsl:for-each select="field">
					<xsl:sort order="ascending"
								select="@*[local-name()=$sortColumnName]"
								lang="{$languageName}"/>
					<xsl:call-template name="renderRow"/>
				</xsl:for-each>
			</xsl:when>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="renderRow">
		<li tabindex="10" class="ms-crm-Dialog-ListItem-ImportMap"  type="cell">
			<xsl:if test="$isCustomizable='true'">
				<xsl:attribute name="onmouseover">
					OnField(Mscrm.Utilities.eventToDomEvent(event), this);
				</xsl:attribute>
				<xsl:attribute name="onmouseout">
					OffField(Mscrm.Utilities.eventToDomEvent(event), this);
				</xsl:attribute>
				<xsl:attribute name="ondblclick">
					AddFields(Mscrm.Utilities.eventToDomEvent(event).target, true);
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="id">
				<xsl:value-of select="concat('field_',@name)"/>
			</xsl:attribute>
			<xsl:attribute name="dataType">
				<xsl:value-of select="@datatype"/>
			</xsl:attribute>
			<xsl:attribute name="displayName">
				<xsl:value-of select="@displayname"/>
			</xsl:attribute>
			<xsl:attribute name="format">
				<xsl:value-of select="@format"/>
			</xsl:attribute>
			<xsl:attribute name="languageCode">
				<xsl:value-of select="$userLanguageCode"/>
			</xsl:attribute>

			<xsl:attribute name="style">
				<xsl:if test="$RTL='true'">
					padding-right: 5px;
				</xsl:if>
				<xsl:if test="$RTL!='true'">
					padding-left: 5px;
				</xsl:if>
				width:200;
			</xsl:attribute>
			<xsl:attribute name="title">
				<xsl:value-of select="concat($ToolTip_DisplayName,@displayname)"/>
				<xsl:text>&#10;</xsl:text>
				<xsl:value-of select="concat($ToolTip_DBName,@name)"/>
				<xsl:text>&#10;</xsl:text>
				<xsl:value-of select="concat($ToolTip_DataType,@datatype)"/>

			</xsl:attribute>
			<img alt="" align="absmiddle" class="dlg_create_RenderListItem_img" src="/_imgs/ico_18_attributes.gif"/>
			<xsl:value-of select="@displayname"/>

		</li>

	</xsl:template>


	<xsl:template match="/relationships">
		<xsl:choose>
			<xsl:when test="$sortOrder='ascending'">
				<xsl:for-each select="relationship">
					<xsl:sort order="ascending"
								select="@*[local-name()=$sortColumnName]"
								lang="{$languageName}"/>
					<xsl:call-template name="renderRelationShipRow"/>
				</xsl:for-each>
			</xsl:when>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="renderRelationShipRow">
		<li tabindex="10" class="ms-crm-Dialog-ListItem-ImportMap" type="relationship" ondblclick="Mscrm.FormNavigationUtils.addNavItemFromRelationshipExplorer(Mscrm.Utilities.eventToDomEvent(event));" onmouseover="OnField(Mscrm.Utilities.eventToDomEvent(event), this)" onmouseout="OffField(Mscrm.Utilities.eventToDomEvent(event), this)">
			<xsl:attribute name="id">
				<xsl:value-of select="@id"/>
			</xsl:attribute>
			<xsl:attribute name="displayName">
				<xsl:value-of select="@displayname"/>
			</xsl:attribute>
			<xsl:attribute name="languageCode">
				<xsl:value-of select="$userLanguageCode"/>
			</xsl:attribute>
			<xsl:attribute name="schemaName">
				<xsl:value-of select="@name"/>
			</xsl:attribute>
			<xsl:attribute name="Icon">
				<xsl:value-of select="@icon"/>
			</xsl:attribute>
			<xsl:attribute name="navPaneId">
				<xsl:value-of select="@navPaneId"/>
			</xsl:attribute>

			<xsl:attribute name="style">
				<xsl:if test="$RTL='true'">
					padding-right: 5px;
				</xsl:if>
				<xsl:if test="$RTL!='true'">
					padding-left: 5px;
				</xsl:if>
				<xsl:choose>
					<xsl:when test="@icon=''">
						text-indent:19px;width:180;
					</xsl:when>
					<xsl:otherwise>
						width:200;
					</xsl:otherwise>
				</xsl:choose>
			</xsl:attribute>

			<xsl:attribute name="title">
				<xsl:value-of select="@displayname"/>
			</xsl:attribute>
			<xsl:attribute name="relationType">
				<xsl:value-of select="@relationType"/>
			</xsl:attribute>
			<img alt="" align="absmiddle" class="dlg_create_RenderListItem_img" src="/_imgs/picklist.gif">
				<xsl:attribute name="src">
					<xsl:value-of select="@icon"/>
				</xsl:attribute>
			</img>
			<xsl:value-of select="@displayname"/>
		</li>

	</xsl:template>
	
	<xsl:template match="/businessrules">
		<xsl:choose>
			<xsl:when test="$sortOrder='ascending'">
				<xsl:for-each select="businessrule">
					<xsl:sort order="ascending"
								select="@*[local-name()=$sortColumnName]"
								lang="{$languageName}"/>
					<xsl:call-template name="renderBusinessRulesRow"/>
				</xsl:for-each>
			</xsl:when>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="renderBusinessRulesRow">
		<li tabindex="10" class="ms-crm-Dialog-ListItem-ImportMap" type="businessrule" onkeypress="Mscrm.BusinessRulesExplorer.HandleKeyPress(Mscrm.Utilities.eventToDomEvent(event));" ondblclick="Mscrm.BusinessRulesExplorer.openBusinessRuleEditorForEdit(Mscrm.Utilities.eventToDomEvent(event));" onmouseover="OnField(Mscrm.Utilities.eventToDomEvent(event), this)" onmouseout="OffField(Mscrm.Utilities.eventToDomEvent(event), this)">
			<xsl:attribute name="id">
				<xsl:value-of select="@id"/>
			</xsl:attribute>
			<xsl:attribute name="displayName">
				<xsl:value-of select="@displayname"/>
			</xsl:attribute>
			<xsl:attribute name="languageCode">
				<xsl:value-of select="$userLanguageCode"/>
			</xsl:attribute>
			<xsl:attribute name="schemaName">
				<xsl:value-of select="@name"/>
			</xsl:attribute>
			<xsl:attribute name="Icon">
				<xsl:value-of select="@icon"/>
			</xsl:attribute>
			<xsl:attribute name="navPaneId">
				<xsl:value-of select="@navPaneId"/>
			</xsl:attribute>
			<xsl:attribute name="style">
				<xsl:if test="$RTL='true'">
					padding-right: 5px;
				</xsl:if>
				<xsl:if test="$RTL!='true'">
					padding-left: 5px;
				</xsl:if>
				<xsl:choose>
					<xsl:when test="@icon=''">
						text-indent:19px;width:180;
					</xsl:when>
					<xsl:otherwise>
						width:200;
					</xsl:otherwise>
				</xsl:choose>
			</xsl:attribute>

			<xsl:attribute name="title">
				<xsl:value-of select="@displayname"/>
			</xsl:attribute>
			<img alt="" align="absmiddle" class="dlg_create_RenderListItem_img" src="/_imgs/picklist.gif">
				<xsl:attribute name="src">
					<xsl:value-of select="@icon"/>
				</xsl:attribute>
			</img>
			<xsl:value-of select="@displayname"/>
		</li>

	</xsl:template>

</xsl:stylesheet>
