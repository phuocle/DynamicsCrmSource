<?xml version="1.0"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" />
  <xsl:param name="Label_Name" />
  <xsl:param name="Label_DisplayName" />
  <xsl:param name="Label_Description" />
  <xsl:param name="Label_LibraryName" />
  <xsl:param name="Label_FunctionName" />
  <xsl:param name="Label_Enabled" />
  <xsl:param name="Alignment" />
  <xsl:param name="Label_True" />
  <xsl:param name="Label_False" />
  <xsl:template match="/event">
    <table cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed;">
      <col width="40%" />
      <col width="40%" />
      <col width="20%" />
      <tr height="20px" class="ms-crm-library-header-row">
        <xsl:attribute name="align">
          <xsl:value-of select="$Alignment" />
        </xsl:attribute>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_LibraryName" />
          </xsl:attribute>
          <xsl:value-of select="$Label_LibraryName" />
        </th>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_FunctionName" />
          </xsl:attribute>
          <xsl:value-of select="$Label_FunctionName" />
        </th>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_Enabled" />
          </xsl:attribute>
          <xsl:value-of select="$Label_Enabled" />
        </th>
      </tr>
      <xsl:apply-templates select="Handlers" />
    </table>
  </xsl:template>
  <xsl:template match="Handlers">
    <xsl:for-each select="Handler">
      <xsl:call-template name="renderHandler" />
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="renderHandler">
    <tr height="20px"
        onclick="Mscrm.FormLibraryAndEventHandlerUtils.setHandlerActive(Mscrm.Utilities.eventToDomEvent(event));"
        ondblclick="Mscrm.FormLibraryAndEventHandlerUtils.editHandler();">
      <xsl:attribute name="id">
        <xsl:value-of select="@handlerUniqueId" />
      </xsl:attribute>
      <xsl:attribute name="handlerUniqueId">
        <xsl:value-of select="@handlerUniqueId" />
      </xsl:attribute>
      <xsl:attribute name="functionName">
        <xsl:value-of select="@functionName" />
      </xsl:attribute>
      <xsl:attribute name="enabled">
        <xsl:value-of select="@enabled" />
      </xsl:attribute>
      <xsl:attribute name="libraryName">
        <xsl:value-of select="@libraryName" />
      </xsl:attribute>
      <xsl:attribute name="passExecutionContext">
        <xsl:value-of select="@passExecutionContext" />
      </xsl:attribute>
      <xsl:attribute name="parameters">
        <xsl:value-of select="@parameters" />
      </xsl:attribute>
      <xsl:attribute name="align">
        <xsl:value-of select="$Alignment" />
      </xsl:attribute>
      <td class="ms-crm-library-cell">
        <a title=""
           onkeydown="Mscrm.FormLibraryAndEventHandlerUtils.handlerKeyPress(Mscrm.Utilities.eventToDomEvent(event));"
           onclick="return false;" href="javascript:onclick();" target="_self">
          <xsl:value-of select="@libraryName" />
        </a>
      </td>
      <td class="ms-crm-library-cell">
        <xsl:value-of select="@functionName" />
      </td>
      <td class="ms-crm-library-cell">
        <xsl:if test="@enabled = 'true'">
          <xsl:value-of select="$Label_True" />
        </xsl:if>
        <xsl:if test="@enabled = 'false'">
          <xsl:value-of select="$Label_False" />
        </xsl:if>
      </td>
    </tr>
  </xsl:template>
  <xsl:template match="/formLibraries | /Dependency[@componentType='WebResource']">
    <table cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed;">
      <col width="40%" />
      <col width="40%" />
      <col width="20%" />
      <tr height="20px" class="ms-crm-library-header-row">
        <xsl:attribute name="align">
          <xsl:value-of select="$Alignment" />
        </xsl:attribute>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_Name" />
          </xsl:attribute>
          <xsl:value-of select="$Label_Name" />
        </th>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_DisplayName" />
          </xsl:attribute>
          <xsl:value-of select="$Label_DisplayName" />
        </th>
        <th class="ms-crm-library-header-cell">
          <xsl:attribute name="title">
            <xsl:value-of select="$Label_Description" />
          </xsl:attribute>
          <xsl:value-of select="$Label_Description" />
        </th>
      </tr>
      <xsl:for-each select="Library">
        <xsl:call-template name="renderLibrary" />
      </xsl:for-each>
    </table>
  </xsl:template>
  <xsl:template name="renderLibrary">
    <tr onclick="Mscrm.FormLibraryAndEventHandlerUtils.setLibraryActive(Mscrm.Utilities.eventToDomEvent(event)); "
        ondblclick="Mscrm.FormLibraryAndEventHandlerUtils.editLibrary();" height="20px">
      <xsl:attribute name="id">
        <xsl:value-of select="@libraryUniqueId" />
      </xsl:attribute>
      <xsl:attribute name="align">
        <xsl:value-of select="$Alignment" />
      </xsl:attribute>
      <xsl:attribute name="libraryName">
        <xsl:value-of select="@name" />
      </xsl:attribute>
      <td class="ms-crm-library-cell">
        <a
          onkeydown="Mscrm.FormLibraryAndEventHandlerUtils.handleLibraryKeyPress(Mscrm.Utilities.eventToDomEvent(event));"
          onclick="return false;" href="javascript:onclick();" target="_self">
          <xsl:attribute name="title">
            <xsl:value-of select="@name" />
          </xsl:attribute>
          <xsl:value-of select="@name" />
        </a>
      </td>
      <td class="ms-crm-library-cell">
        <xsl:attribute name="title">
          <xsl:value-of select="@displayName" />
        </xsl:attribute>
        <xsl:value-of select="@displayName" />
      </td>
      <td class="ms-crm-library-cell">
        <xsl:attribute name="title">
          <xsl:value-of select="@description" />
        </xsl:attribute>
        <xsl:value-of select="@description" />
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>