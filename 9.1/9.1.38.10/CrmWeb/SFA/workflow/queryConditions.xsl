<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" indent="no" encoding="UTF-8" omit-xml-declaration="yes"/>
  <xsl:template match="/*">
    <table style="height: 100%; width: 100%; border: 0px; margin: 0px; table-layout:fixed;" cellspacing="0px" cellpadding="0px">
      <col width="70%"/>
      <col width="30%"/>
      <tr style="height: 100%;">
        <td valign="top">
          <div style="height: 190px; width: 100%; border: 0px; margin: 0px; overflow-y: scroll; overflow-x: hidden;">
            <table id="tableAttributes" width="100%" cellspacing="0" cellpadding="0" style="table-layout:fixed;">
              <col width="20%"/>
              <col width="75%"/>
              <col width="5%"/>
              <xsl:for-each select="condition">
                <xsl:variable name="dataTypeValue" select="@type"></xsl:variable>
                <tr class="queryConditionRow">
                  <td nowrap="true" style="padding-left:14px;">
                    <label>
                      <xsl:attribute name="for">
                        <xsl:value-of select="@textboxId"/>
                      </xsl:attribute>
                      <xsl:value-of select="@textboxId"/>
                    </label>
                  </td>
                  <xsl:choose>
                    <xsl:when test="$dataTypeValue= 'Picklist'">
                      <td>
                        <select req="0" style="width: 100%;" defaultselected="1" class="ms-crm-SelectBox " onfocus="modifyPreview(new Sys.UI.DomEvent(event));">
                          <xsl:attribute name="id">
                            <xsl:value-of select="@textboxId"/>
                          </xsl:attribute>
                          <xsl:attribute name="name">
                            <xsl:value-of select="@textboxId"/>
                          </xsl:attribute>
                          <xsl:attribute name="value">
                            <xsl:value-of select="@value"/>
                          </xsl:attribute>
                          <xsl:attribute name="dataType">
                            <xsl:value-of select="@type"/>
                          </xsl:attribute>
                          <xsl:attribute name="attrName">
                            <xsl:value-of select="@attrName"/>
                          </xsl:attribute>
                          <xsl:attribute name="attrOperator">
                            <xsl:value-of select="@attrOperator"/>
                          </xsl:attribute>
                          <xsl:attribute name="style">
                            width:358px;
                          </xsl:attribute>
                        </select>
                      </td>
                    </xsl:when>
                    <xsl:otherwise>
                      <td>                    
                        <input tabindex ="130" type="text" class="ms-crm-Text" onfocus="modifyPreview(new Sys.UI.DomEvent(event));">
                          <xsl:attribute name="id">
                            <xsl:value-of select="@textboxId"/>
                          </xsl:attribute>
                          <xsl:attribute name="value">
                            <xsl:value-of select="@value"/>
                          </xsl:attribute>
                          <xsl:attribute name="dataType">
                            <xsl:value-of select="@type"/>
                          </xsl:attribute>
                          <xsl:attribute name="attrName">
                            <xsl:value-of select="@attrName"/>
                          </xsl:attribute>
                          <xsl:attribute name="attrOperator">
                            <xsl:value-of select="@attrOperator"/>
                          </xsl:attribute>
                          <xsl:attribute name="style">
                             width:358px;
                          </xsl:attribute>
                        </input>
                      </td>
                    </xsl:otherwise>
                  </xsl:choose>
                  <td>
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
        </td>
        <td valign="top">
          <div id="detailsControl" style="height: 190px; overflow: auto;">
            <table style="margin-left: 14px; margin-right: 14px;">
              <tr class="queryDisplayRow">
                <td>
                  <label id="nameLabel"/>
                </td>
                <td>
                  <label id="nameValue"/>
                </td>
              </tr>
              <tr class="queryDisplayRow">
                <td>
                  <label id="typeLabel"/>
                </td>
                <td>
                  <label id="typeValue"/>
                </td>
              </tr>
              <tr class="queryDisplayRow">
                <td>
                  <label id="operatorLabel"/>
                </td>
                <td>
                  <label id="operatorValue"/>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </xsl:template>
</xsl:stylesheet>
