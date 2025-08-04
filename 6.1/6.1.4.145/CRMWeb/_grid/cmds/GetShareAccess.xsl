<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:param name="Web._grid.cmds.getshareaccess.xsl_37" select="0"/>
	<xsl:param name="Web._grid.cmds.getshareaccess.xsl_30" select="0"/>
	<xsl:param name="GetShareAccess.OrganizationOwned" select="0"/>
	<xsl:output method="html" indent="no" encoding="UTF-8" />


<xsl:template match="/accessors">

	<table id="tableUsers" width="100%" cellspacing="0" cellpadding="0" style="margin:0px;table-layout:fixed;">
		<col align="center" width="18"/><col width="22"/><col width="70" align="center"/><col width="70" align="center"/><col width="70" align="center"/><col width="70" align="center"/><col width="70" align="center"/><col width="70" align="center"/><col width="70" align="center"/>
		<xsl:for-each select="accessor">
			<tr valign="center" height="25">
				<xsl:attribute name="oid"><xsl:value-of select="accessorid"/></xsl:attribute>
				<xsl:attribute name="rights"><xsl:value-of select="rights"/></xsl:attribute>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='se' onclick='selectUser()'>
					<xsl:attribute name='title'><xsl:value-of select="titleForSelectRow"/></xsl:attribute>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_selectUser')"/></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<img alt=''>
						<xsl:attribute name="src">/_imgs/ico_18_<xsl:value-of select="accessortype"/>.gif</xsl:attribute>
					</img>
				</td>
				<td class="gridRecord">
					<nobr>
						<xsl:value-of select="name"/>
					</nobr>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='r' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForRead"/></xsl:attribute>
					<xsl:if test="read"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_read')"/></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='w' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForWrite"/></xsl:attribute>
					<xsl:if test="write"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_write')"/></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='d' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForDelete"/></xsl:attribute>
					<xsl:if test="delete"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_delete')"/></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='ap' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForAppend"/></xsl:attribute>
					<xsl:if test="append"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name="id"><xsl:value-of select="concat(accessorid,'_append')" /></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='as' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForAssign"/></xsl:attribute>
					<xsl:if test="assign"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_assign')"/></xsl:attribute>
					</input>
				</td>
				<td class="gridRecord">
					<input type='checkbox' class='checkbox' chkType='sh' onclick='requireRead(new Sys.UI.DomEvent(event))'>
					<xsl:attribute name='title'><xsl:value-of select="titleForShare"/></xsl:attribute>
					<xsl:if test="share"><xsl:attribute name="checked"/></xsl:if>
					<xsl:attribute name='id'><xsl:value-of select="concat(accessorid,'_share')"/></xsl:attribute>
					</input>
				</td>
			</tr>
		</xsl:for-each>
	</table>
	<xsl:choose>
		<xsl:when test="multiple">
			<table id="tableWarning" width="100%" height="100%">
				<tr>
					<td align="center"><xsl:value-of select="$Web._grid.cmds.getshareaccess.xsl_30"/></td>
				</tr>
			</table>
		</xsl:when>
		<xsl:when test="organizationowned">
			<table id="tableWarning" width="100%" height="100%">
				<tr>
					<td align="center"><xsl:value-of select="$GetShareAccess.OrganizationOwned"/></td>
				</tr>
			</table>
		</xsl:when>
		<xsl:when test="not(accessor)">
			<table id="tableWarning" width="100%" height="100%">
				<tr>
					<td align="center"><xsl:value-of select="$Web._grid.cmds.getshareaccess.xsl_37"/></td>
				</tr>
			</table>
		</xsl:when>
		<xsl:otherwise>
			<table id="tableWarning" width="100%" height="100%" style="display:none;">
				<tr>
					<td align="center"><xsl:value-of select="$Web._grid.cmds.getshareaccess.xsl_37"/></td>
				</tr>
			</table>
		</xsl:otherwise>
	</xsl:choose>
	
</xsl:template>
</xsl:stylesheet>