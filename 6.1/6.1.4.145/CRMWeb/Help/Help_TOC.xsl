<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:crm="http://mscrm" version="1.0" exclude-result-prefixes="msxsl crm">
	<xsl:output method="html" indent="no" encoding="UTF-8"/>
	<xsl:param name="autoLoadTopic"/>
	<xsl:param name="lcid" />
	<xsl:param name="helpSku" />
	<xsl:param name="helpVersionPath" />

	<xsl:template match="books/volume">
		<xsl:if test="not(@hidden)">

			<table class="toc" cellspacing="0">
				<col width="20"/><col/>
				<tr level="0">
					<td colspan="2">
						<table class="tocPageOff">
							<xsl:attribute name="id">
								<!-- Because ID are case-sensitive in JS, we need to make sure this is lowercase -->
								<xsl:value-of select="translate(@topic,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')"/>
							</xsl:attribute>
							<col width="20"/><col/>
							<tr level="0" onclick="toggle(this);" style="cursor:hand;">
								<xsl:attribute name="code">
									<xsl:value-of select="@code"/>
								</xsl:attribute>
								<xsl:attribute name="href"><xsl:if test="@topic">/help/<xsl:value-of select="$helpVersionPath" /><xsl:value-of select="$lcid" />/<xsl:value-of select="$helpSku" />/content/<xsl:value-of select="@topic"/>.htm</xsl:if></xsl:attribute>
								<td>
									<img>
										<xsl:attribute name="src">
											<xsl:choose>
												<xsl:when test="not(chapter[child::*/@topic=$autoLoadTopic])">/help/imgs/16_closedBook.gif</xsl:when>
												<xsl:otherwise>/help/imgs/16_openBook.gif</xsl:otherwise>
											</xsl:choose>
										</xsl:attribute>
									</img>
								</td>
								<td><xsl:value-of select="@name"/></td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<xsl:attribute name="style">
						<xsl:choose>
							<xsl:when test="not(chapter[child::*/@topic=$autoLoadTopic])">display:none</xsl:when>
							<xsl:otherwise>display:inline</xsl:otherwise>
						</xsl:choose>
					</xsl:attribute>
					<td class="help_chapter"><br/></td>
					<td>
						<xsl:apply-templates select="page"/>
						<xsl:apply-templates select="chapter"/>
					</td>
				</tr>
			</table>
		</xsl:if>
	</xsl:template>


	<xsl:template match="chapter">

		<xsl:if test="not(@hidden)">
			<table class="toc" cellspacing="0">
				<col width="20"/><col/>
				<tr level="1">
					<td colspan="2">
						<table class="tocPageOff">
							<xsl:attribute name="id">
								<!-- Because ID are case-sensitive in JS, we need to make sure this is lowercase -->
								<xsl:value-of select="translate(@topic,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')"/>
							</xsl:attribute>
							<col width="20"/><col/>
							<tr level="1" onclick="toggle(this);" style="cursor:hand;">
								<xsl:attribute name="code">
									<xsl:value-of select="../@code"/>
								</xsl:attribute>
								<xsl:attribute name="href"><xsl:if test="@topic">/help/<xsl:value-of select="$helpVersionPath" /><xsl:value-of select="$lcid" />/<xsl:value-of select="$helpSku" />/content/<xsl:value-of select="@topic"/>.htm</xsl:if></xsl:attribute>
								<td>
									<img>
										<xsl:attribute name="src">
											<xsl:choose>
												<xsl:when test="not(page[@topic=$autoLoadTopic])">/help/imgs/16_closedBook.gif</xsl:when>
												<xsl:otherwise>/help/imgs/16_openBook.gif</xsl:otherwise>
											</xsl:choose>
										</xsl:attribute>
									</img>
								</td>
								<td><xsl:value-of select="@name"/></td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<xsl:attribute name="style">
						<xsl:choose>
							<xsl:when test="not(page[@topic=$autoLoadTopic])">display:none</xsl:when>
							<xsl:otherwise>display:inline</xsl:otherwise>
						</xsl:choose>
					</xsl:attribute>

					<td class="help_chapter"><br/></td>
					<td>
						<xsl:apply-templates select="page"/>
					</td>
				</tr>
			</table>


		</xsl:if>
	</xsl:template>


	<xsl:template match="page">

		<table cellspacing="0" cellpadding="2" class="tocPageOff">
			<xsl:attribute name="id">
				<!-- Because ID are case-sensitive in JS, we need to make sure this is lowercase -->
				<xsl:value-of select="translate(@topic,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')"/>
			</xsl:attribute>
			<col width="20"/>
			<col/>
			<tr level="2">
				<td>
					<xsl:choose>
						<xsl:when test="@procedure">
							<img src="/help/imgs/16_help_process.gif"/>
						</xsl:when>
						<xsl:when test="@security">
              <img src="/help/imgs/16_ico_security.gif"/>
            </xsl:when>
						<xsl:otherwise>
							<img src="/help/imgs/16_helpDoc.gif"/>
						</xsl:otherwise>
					</xsl:choose>
				</td>
				<td>
					<a target="helpContents" onclick="selectArticle(this);" class="helpLink">
						<xsl:attribute name="href">/help/<xsl:value-of select="$helpVersionPath" /><xsl:value-of select="$lcid" />/<xsl:value-of select="$helpSku" />/content/<xsl:value-of select="@topic"/>.htm</xsl:attribute>
						<xsl:value-of select="."/>
					</a>
				</td>
			</tr>
		</table>

	</xsl:template>

	<xsl:template match="books/section">
		<br/>
		<b>
			<xsl:value-of select="." />
		</b>
	</xsl:template>

</xsl:stylesheet>