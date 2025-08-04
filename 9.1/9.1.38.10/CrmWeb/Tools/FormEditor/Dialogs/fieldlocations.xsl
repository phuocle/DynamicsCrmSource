<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="no"/>
<xsl:param name="Tools.FormEditor.Dialogs.fieldlocations.xsl_36" select="0"/>
<xsl:param name="Tools.FormEditor.Dialogs.fieldlocations.xsl_1" select="0"/>
<xsl:param name="tabName"/>
<xsl:param name="sectionName"/>
<xsl:param name="languageCode"/>

<xsl:template match="/entity/form/tabs">
	<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
		<col width="30"/><col width="70"/>
		<tr>
			<td class="ms-crm-Field-Normal"><xsl:value-of select="$Tools.FormEditor.Dialogs.fieldlocations.xsl_1"/></td>
			<td>
				<select id="SelectTab"  class="ms-crm-SelectBox" name="TabName" onchange="UpdateSections(this)">
					<xsl:if test="tab[@name = $tabName and @locklevel and @locklevel != '0'] or tab[@name = $tabName]/sections/section[@name = $sectionName and @locklevel and @locklevel != '0']">
						<xsl:attribute name="disabled"></xsl:attribute>
					</xsl:if>
					<xsl:for-each select="tab[sections/section[not(@locklevel) or @locklevel = '0'] and (not(@locklevel) or @locklevel = '0')]">
							<option>
								<xsl:attribute name="value"><xsl:value-of select="@name"/></xsl:attribute>
								<xsl:if test="@name=$tabName"><xsl:attribute name="selected"></xsl:attribute></xsl:if>
								<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
							</option>
					</xsl:for-each>
				</select>
			</td>
		</tr>
		<tr>
			<td class="ms-crm-Field-Normal"><xsl:value-of select="$Tools.FormEditor.Dialogs.fieldlocations.xsl_36"/></td>
			<td id="Sections">
				<select id="SelectSection"  class="ms-crm-SelectBox" name="SectionName">
					<xsl:if test="tab[@name = $tabName and @locklevel and @locklevel != '0'] or tab[@name = $tabName]/sections/section[@name = $sectionName and @locklevel and @locklevel != '0']">
						<xsl:attribute name="disabled"></xsl:attribute>
					</xsl:if>
					<xsl:choose>
						<xsl:when test="tab[@name = $tabName]">
							<xsl:choose>
								<xsl:when test="tab/sections/section[@name = $sectionName and @locklevel and @locklevel != '0']">
									<xsl:for-each select="tab[@name = $tabName]/sections/section">
											<option>
												<xsl:attribute name="value"><xsl:value-of select="@name"/></xsl:attribute>
												<xsl:if test="@name=$sectionName or (''=$sectionName and position()=last())"><xsl:attribute name="selected"></xsl:attribute></xsl:if>
												<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
											</option>
									</xsl:for-each>
								</xsl:when>
								<xsl:otherwise>
									<xsl:for-each select="tab[@name = $tabName]/sections/section[not(@locklevel) or @locklevel = '0']">
											<option>
												<xsl:attribute name="value"><xsl:value-of select="@name"/></xsl:attribute>
												<xsl:if test="@name=$sectionName or (''=$sectionName and position()=last())"><xsl:attribute name="selected"></xsl:attribute></xsl:if>
												<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
											</option>
									</xsl:for-each>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<xsl:otherwise>
								<xsl:for-each select="tab[1]/sections/section[not(@locklevel) or @locklevel = '0']">
									<option>
											<xsl:attribute name="value"><xsl:value-of select="@name"/></xsl:attribute>
											<xsl:value-of select="@name"/>
									</option>
								</xsl:for-each>
						</xsl:otherwise>
					</xsl:choose>
				</select>
			</td>
		</tr>
	</table>
</xsl:template>
<xsl:template match="/entity/form/events">
</xsl:template>
</xsl:stylesheet>
