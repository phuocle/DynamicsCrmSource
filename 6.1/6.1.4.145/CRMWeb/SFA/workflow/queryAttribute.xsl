<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="html" indent="no" encoding="UTF-8" omit-xml-declaration="yes"/>

	<xsl:template match="/*">
		<table id="tableAttributes" width="100%" cellspacing="0" cellpadding="0" style="table-layout:fixed">
			<col width="20"/>
			<col/>
			<xsl:for-each select="attribute">
				<tr height="20">
					<td>
						<input tabindex ="130" type="checkbox" class="checkbox ms-crm-checkboxoverride" onclick="modifyPreview(new Sys.UI.DomEvent(event));">
							<xsl:attribute name="id">
								<xsl:value-of select="@value"/>
							</xsl:attribute>
							<xsl:if test="@checked">
								<xsl:attribute name="checked"/>
							</xsl:if>
							<xsl:if test="@disabled">
								<xsl:attribute name="disabled">
									<xsl:value-of select="@disabled"/>
								</xsl:attribute>
							</xsl:if>
						</input>
					</td>
					<td nowrap="true" class="ms-crm-Field-Normal" style="padding:0px">
						<label>
							<xsl:attribute name="for">
								<xsl:value-of select="@value"/>
							</xsl:attribute>
							<xsl:if test="@disabled">
								<xsl:attribute name="disabled">
									<xsl:value-of select="@disabled"/>
								</xsl:attribute>
							</xsl:if>
							<xsl:value-of select="@label"/>
						</label>
					</td>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>

</xsl:stylesheet>

