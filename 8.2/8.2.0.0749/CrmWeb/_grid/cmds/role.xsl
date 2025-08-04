<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" indent="no" encoding="UTF-8" omit-xml-declaration="yes" />

  <xsl:template match="/*">
    <table id="tableRoles" width="100%" height="100%" cellspacing="0" cellpadding="0" style="table-layout:fixed">
      <col width="20" />
      <col />
      <col width="200" />
      <xsl:for-each select="role">
        <tr height="20">
          <xsl:attribute name="oid">
            <xsl:value-of select="roleid" />
          </xsl:attribute>
          <xsl:attribute name="bid">
            <xsl:value-of select="businessunitid" />
          </xsl:attribute>
          <td>
            <input type="checkbox" class="checkbox">
              <xsl:attribute name="id">
                <xsl:value-of select="roleid" />
              </xsl:attribute>
              <xsl:if test="roleid/@checked">
                <xsl:attribute name="checked" />
              </xsl:if>
            </input>
          </td>
          <td>
            <div style="overflow:hidden;width:100%; text-overflow:ellipsis;white-space:nowrap;">
              <xsl:attribute name="title">
                <xsl:value-of select="name" />
              </xsl:attribute>
              <label tabindex="-1">
                <xsl:attribute name="id">
                  <!-- bug #93880. Generate a new ID for this label by concatenating the roleID with "_ID"-->
                  <xsl:value-of select='concat(roleid, "_ID")' />
                </xsl:attribute>
                <xsl:attribute name="for">
                  <xsl:value-of select="roleid" />
                </xsl:attribute>
                <xsl:value-of select="name" />
              </label>
            </div>
          </td>
          <td nowrap="true">
            <label>
              <xsl:attribute name="for">
                <!--The second label (businessunitid) is now a label for roleId instead of the checkbox.
										Now, the tab selection is recursive. businessUnitID->RoleId->Checkbox-->
                <xsl:value-of select='concat(roleid, "_ID")' />
              </xsl:attribute>
              <xsl:value-of select="businessunitid/@name" />
            </label>
          </td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

</xsl:stylesheet>