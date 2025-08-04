<?xml version="1.0"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
                xmlns:exslt="http://exslt.org/common" exclude-result-prefixes="exslt msxsl" version="2.0">
  <xsl:output method="html" />
  <xsl:param name="sortColumnName" />
  <xsl:param name="languageName" />
  <xsl:param name="sortOrder" />
  <xsl:param name="RTL" />
  <xsl:variable name="FriendlyTypeNames" />


  <xsl:template match="/fields">
    <table id="Fields" cellpadding="0" cellspacing="0" style="table-layout: fixed;">

      <xsl:choose>
        <xsl:when test="function-available('exslt:node-set')">
          <xsl:choose>
            <xsl:when test="$sortOrder='ascending'">
              <xsl:for-each select="field">
                <xsl:sort order="ascending"
                          select="@displayname[$sortColumnName='displayname'] |
										@name[$sortColumnName='name'] |
										exslt:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype and $sortColumnName='datatype']"
                          lang="$languageName" />
                <xsl:call-template name="renderRow" />
              </xsl:for-each>
            </xsl:when>
            <xsl:otherwise>
              <xsl:for-each select="field">
                <xsl:sort order="descending"
                          select="@displayname[$sortColumnName='displayname'] |
										@name[$sortColumnName='name'] |
										exslt:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype and $sortColumnName='datatype']"
                          lang="$languageName" />
                <xsl:call-template name="renderRow" />
              </xsl:for-each>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:when test="function-available('msxsl:node-set')">
          <xsl:choose>
            <xsl:when test="$sortOrder='ascending'">
              <xsl:for-each select="field">
                <xsl:sort order="ascending"
                          select="@displayname[$sortColumnName='displayname'] |
										@name[$sortColumnName='name'] |
										msxsl:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype and $sortColumnName='datatype']"
                          lang="$languageName" />
                <xsl:call-template name="renderRow" />
              </xsl:for-each>
            </xsl:when>
            <xsl:otherwise>
              <xsl:for-each select="field">
                <xsl:sort order="descending"
                          select="@displayname[$sortColumnName='displayname'] |
										@name[$sortColumnName='name'] |
										msxsl:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype and $sortColumnName='datatype']"
                          lang="$languageName" />
                <xsl:call-template name="renderRow" />
              </xsl:for-each>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>
      </xsl:choose>

    </table>
  </xsl:template>

  <xsl:template name="renderRow">
    <xsl:if test="not(starts-with(@datatype, 'bad-news-here'))">
      <tr height="20" style="cursor: pointer;" onmouseover="on(new Sys.UI.DomEvent(event));"
          onmouseout="off(new Sys.UI.DomEvent(event));" onclick="chkSwitch(this.cells[0].children[0]);">
        <xsl:attribute name="format">
          <xsl:value-of select="@format" />
        </xsl:attribute>
        <xsl:attribute name="required">
          <xsl:value-of select="@required" />
        </xsl:attribute>
        <xsl:attribute name="orgrequired">
          <xsl:value-of select="@orgrequired" />
        </xsl:attribute>
        <xsl:attribute name="id">
          <xsl:value-of select="@name" />
        </xsl:attribute>
        <td width="5%" class="checkBoxTd">
          <input type="checkbox" class="checkbox" onclick="chkClick(this, new Sys.UI.DomEvent(event));">
            <xsl:attribute name="id">
              <xsl:value-of select="concat('ch_', @name)" />
            </xsl:attribute>
          </input>
        </td>
        <td width="36%">
          <div>
            <xsl:if test="$RTL='true'">
              <xsl:attribute name="style">
                padding-right: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <xsl:if test="$RTL!='true'">
              <xsl:attribute name="style">
                padding-left: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <label onclick="XUI.Html.DispatchDomEvent(this.parentNode.parentNode, XUI.Html.CreateDomEvent('click'));">
              <xsl:attribute name="for">
                <xsl:value-of select="concat('ch_', @name)" />
              </xsl:attribute>
              <nobr>
                <xsl:value-of select="@displayname" />
              </nobr>
            </label>
          </div>
        </td>
        <td width="30%">
          <div>
            <xsl:if test="$RTL='true'">
              <xsl:attribute name="style">
                padding-right: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <xsl:if test="$RTL!='true'">
              <xsl:attribute name="style">
                padding-left: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <nobr>
              <xsl:value-of select="@name" />
            </nobr>
          </div>
        </td>
        <td style="display:none;width:0px;">
          <nobr>
            <xsl:value-of select="@datatype" />
          </nobr>
        </td>
        <td width="29%">
          <div>
            <xsl:if test="$RTL='true'">
              <xsl:attribute name="style">
                padding-right: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <xsl:if test="$RTL!='true'">
              <xsl:attribute name="style">
                padding-left: 10px;overflow:hidden;text-overflow: ellipsis;
              </xsl:attribute>
            </xsl:if>
            <nobr>
              <xsl:choose>
                <xsl:when test="function-available('exslt:node-set')">
                  <xsl:value-of select="exslt:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype]" />
                </xsl:when>
                <xsl:when test="function-available('msxsl:node-set')">
                  <xsl:value-of select="msxsl:node-set($FriendlyTypeNames)/types/type[@xmlName=current()/@datatype]" />
                </xsl:when>
              </xsl:choose>
            </nobr>
          </div>
        </td>
      </tr>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>