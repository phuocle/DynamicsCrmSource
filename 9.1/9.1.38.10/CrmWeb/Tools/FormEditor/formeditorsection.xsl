<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<!-- Chromium Bug#60708: When trying to transform xml through XSLTProcessor.transformToFragment out of JS and the xslt template tries to return root elements such as 'tr' or 'td', only contained elements returned.
	Due to this bug, we cannot use the output as HTML and thus getting the output as xml-->
	<xsl:output method="xml" indent="no" omit-xml-declaration="yes" />
	<xsl:param name="Tools.previewmanager.previewmanager.xsl_58" select="0" />
	<xsl:param name="Tools.previewmanager.previewmanager.xsl_1" select="0"/>
	<xsl:param name="languageCode"/>
	<xsl:param name="mode"/>
	<xsl:param name="RTL"/>
	<xsl:param name="spacerCaption"/>
	<xsl:param name="headerCaption"/>
	<xsl:param name="footerCaption"/>
	<xsl:param name="editorType"/>
	<xsl:param name="formType"/>
	<xsl:param name="webResourceRootUrl"/>
	<xsl:param name="isCustomizable" />
	<xsl:param name="iconPath" />
	<xsl:param name="formLabel" />
	<xsl:param name="solutionLabel"/>
	<xsl:param name="formPrefix"/>
	<xsl:param name="formAccessType"/>
	<xsl:param name="supportSocialInsights"/>
	<xsl:param name="supportPowerBITile"/>
  <xsl:param name="supportOrgInsights"/>
	<xsl:param name="supportDelve"/>
	<xsl:param name="supportInteractionCentric"/>
	<xsl:param name="isRiCardsCell"/>
	<xsl:variable name="isPreviewMode" select="$mode = 'preview'"/>
	<xsl:variable name="tabColumn" select="0"/>
	<xsl:variable name="lockedString" select="entity/strings/lockedsection"/>
	<xsl:variable name="officeGraphDocument" select="'officegraphdocument'"/>
	<xsl:variable name="card" select="'Card'"/>
	<xsl:template match="entity/strings">
	</xsl:template>
	<xsl:template match="/FormNavigation">
		<xsl:call-template name="RenderNavigation"/>
	</xsl:template>
	<xsl:template match="/entity/formeditor/form">
		<xsl:choose>
			<!-- Preview mode -->
			<xsl:when test="$isPreviewMode">
				<table width="100%" height="100%" style="background-color:#ffffff;" cellspacing="0" cellpadding="0">
					<!-- Grid header -->
					<tr height="22">
						<td>
							<table id="gridBar" cellpadding="0" cellspacing="0" class="ms-crm-List-Header">
								<tr id="trHeader" pagesize="">
									<td width="42" align="center">
										<input type="checkbox" onclick="return false;"></input>
									</td>
									<td class="ms-crm-List-Spacer">
										<img alt="" src="/_imgs/grid/bar_line.gif"></img>
									</td>
									<th nowrap="" style="padding-left:10px">
										<xsl:value-of select="$Tools.previewmanager.previewmanager.xsl_1"/>
										<img alt="" src="/_imgs/grid/bar_up.gif">
											<xsl:if test="$RTL='true'">
												<xsl:attribute name="style">
													visibility:visible;filter:FlipH();
												</xsl:attribute>
											</xsl:if>
											<xsl:if test="$RTL!='true'">
												<xsl:attribute name="style">
													visibility:visible;
												</xsl:attribute>
											</xsl:if>
										</img>
									</th>
									<td class="ms-crm-List-Spacer">
										<img alt="" src="/_imgs/grid/bar_line.gif"></img>
									</td>
									<td width="14">
										<img alt="" src="/_imgs/grid/grid_Refresh.gif"></img>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td>
							<div style="text-align:left;font-size:11px;color:#999999;width:100%;height:100%;overflow:auto;">
								<!-- Grid item -->
								<table id="tempGridItem" cellpadding="0" cellspacing="0" class="ms-crm-List-Row">
									<td width="20" align="center" class="ms-crm-List-SelectedRow">
										<img alt="" src="/_imgs/grid/d.gif"></img>
									</td>
									<td width="22" align="center" class="ms-crm-List-SelectedRow">
										<img alt="" src="/_imgs/ico_16_1.gif"></img>
									</td>
									<td class="ms-crm-List-SelectedRow" style="padding-left:10px">
										<xsl:value-of select="$Tools.previewmanager.previewmanager.xsl_58"/>
									</td>
								</table>
								<!-- Preview -->
								<xsl:call-template name="RenderForm"/>
							</div>
						</td>
					</tr>
					<!-- Grid footer -->
					<tr>
						<td style="height:21px; background-color: #f0f0f0;">
							<br />
						</td>
					</tr>
				</table>
			</xsl:when>
			<!-- Form mode -->
			<xsl:otherwise>
				<xsl:call-template name="RenderForm"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template name="RenderForm">
				<xsl:if test="$editorType='formEditor' and $formType!='quick' and $formType!='quickCreate'">
					<div id="formNavigationRoot" class="form-editor-nav-style" style="position:absolute; height:100%; width:180px; top:0px;">
							<!--FormName-->
							<br/>
						<div id="formSelectorDiv">
							<xsl:choose>
								<xsl:when test="count(tabs/tab) &lt; 5">
									<xsl:attribute name="style">
										<xsl:value-of select="concat('height:',(count(tabs/tab)+1)*20,'px;')"/>
									</xsl:attribute>
								</xsl:when>
								<xsl:otherwise>
									<xsl:attribute name="style">height:120px;</xsl:attribute>
								</xsl:otherwise>
							</xsl:choose>
							<ul style="width:100%;height:100%;overflow-x:hidden;overflow-y:auto;">
								<li class="navSubArea" atype="none" id="Information">
									<xsl:if test="$isCustomizable='true'">
										<xsl:attribute name="onclick">
											SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
										</xsl:attribute>
										<xsl:attribute name="onmousedown">
											SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
										</xsl:attribute>
									</xsl:if>
									<a height="40px" atype="group" class="ms-crm-Nav-Group-Heading" >
										<!--Group Item Name-->
										<img alt="" src="/_imgs/navup.png" class="ms-crm-Nav-Group-RightIcon"/>
										<NOBR name="Navigation Item" class="ms-crm-Nav-Group-Title">
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id='formName']"/>
											</xsl:attribute>
											<xsl:value-of select="//resources/resource[@id='formName']"/>
										</NOBR>
									</a>
									<!--Tab List-->
									<ul class="ms-crm-FormSelector">
										<xsl:for-each select="tabs/tab">
											<li class="ms-crm-FormSelector">
												<xsl:if test="$isCustomizable='true'">
													<xsl:attribute name="tabindex">10</xsl:attribute>
													<xsl:attribute name="hidefocus">true</xsl:attribute>
													<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
													<xsl:attribute name="onclick">
														Mscrm.TabUtils.scrollIntoTab(this);
													</xsl:attribute>
												</xsl:if>
												<xsl:attribute name="id">
													<xsl:value-of select="concat('leftNavTab_',@id)"/>
												</xsl:attribute>
												<a class="ms-crm-FormSelector-SubItem" >
													<img align="absMiddle" class="ms-crm-ImageStrip-formNavTreeLine ms-crm-FormSelector-SubItem" alt="" src="/_imgs/imagestrips/transparent_spacer.gif" complete="complete">
														<xsl:if test="$RTL='true'">
															<xsl:attribute name="class">
																ms-crm-ImageStrip-formNavTreeLineRTL ms-crm-FormSelector-SubItem
															</xsl:attribute>
														</xsl:if>
														<xsl:if test="position() = count(../tab)">
															<xsl:attribute name="class">
																ms-crm-ImageStrip-formNavTreeLineBottom ms-crm-FormSelector-SubItem
															</xsl:attribute>
															<xsl:if test="$RTL='true'">
																<xsl:attribute name="class">
																	ms-crm-ImageStrip-formNavTreeLineBottomRTL ms-crm-FormSelector-SubItem
																</xsl:attribute>
															</xsl:if>
														</xsl:if>
													</img>
													<nobr class="ms-crm-FormSelector-SubItem">
														<xsl:attribute name="title">
															<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
														</xsl:attribute>
														<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
													</nobr>
												</a>
											</li>
										</xsl:for-each>
									</ul>
								</li>
							</ul>
						</div>
						<div style="vertical-align:top;width:100%; position:absolute; bottom:7px;" id="formNavigationBarTD">
							<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
								<ul id="formNavigationBar" class="nav-container">
									<xsl:call-template name="RenderNavigation"/>
								</ul>
							</div>
						</div>
					</div>
				</xsl:if>
				<div id="formbody">
					<xsl:choose>
						<xsl:when test="$editorType='formEditor'">
							<xsl:choose>
								<xsl:when test="$formType='quick' or $formType='quickCreate'">
									<xsl:attribute name="class">Form-Editor-Body-No-Nav</xsl:attribute>
								</xsl:when>
								<xsl:otherwise>
									<xsl:attribute name="class">Form-Editor-Body</xsl:attribute>
								</xsl:otherwise>
							</xsl:choose>
							<div id="formEntityIconDiv" class="ms-crm-Form-Editor-Entity-Icon" >
								<img alt="" src="/_imgs/navup.png" complete="complete" margin="10px" title="Picture">
									<xsl:attribute name="src">
										<xsl:value-of select="$iconPath"/>
									</xsl:attribute>								
									<xsl:attribute name="title">
										<xsl:value-of select="//resources/resource[@id = 'pictureCaptionProperty']"/>
									</xsl:attribute>
								</img>
							</div>
							<div class="Form-Editor-Breadcrumb-Container">
								<table >
									<col/>
									<col width="100%"/>
									<tr>
										<td colspan="2">
											<div class="ms-crm-Form-Breadcrumb">
												<SPAN style="WIDTH: 100%" id="form_title_div" class="ms-crm-Form-Breadcrumb">
													<NOBR>
														<H3 class="ms-crm-Form">
															<xsl:value-of select="$solutionLabel"/>
														</H3>
													</NOBR>
												</SPAN>
											</div>
										</td>
									</tr>
									<tr>
										<td >
											<div class="ms-crm-Form-Breadcrumb">
												<SPAN style="WIDTH: 100%" class="ms-crm-Form-Breadcrumb">
													<NOBR>
														<H3 class="ms-crm-Form">
															<xsl:value-of select="$formPrefix"/>
														</H3>
													</NOBR>
												</SPAN>
											</div>
										</td>
										<td >
											<div class="ms-crm-Form-Breadcrumb">
												<SPAN style="WIDTH: 100%" id="form_title_div" class="ms-crm-Form-Breadcrumb">
													<NOBR>
														<H1 class="ms-crm-Form">
															<xsl:value-of select="$formLabel"/>
														</H1>
													</NOBR>
												</SPAN>
											</div>
										</td>
									</tr>
								</table>
							</div>
						</xsl:when>
						<xsl:otherwise>
							<xsl:attribute name="class">Dashboard-Body</xsl:attribute>
						</xsl:otherwise>
					</xsl:choose>
					<div id="editor">
						<xsl:choose>
							<xsl:when test="$editorType='dashboardEditor'">
								<xsl:attribute name="class">DashboardEditor</xsl:attribute>
							</xsl:when>
							<xsl:otherwise>
								<xsl:attribute name="class">Tools_formeditor_td_Editor</xsl:attribute>
							</xsl:otherwise>
						</xsl:choose>
						<div id="editorDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container" style="overflow-x: hidden;">
							<!-- the form editor renders in the quirk mode and we require the overflow here-->
							<xsl:choose>
								<xsl:when test="$editorType='dashboardEditor'">
									<xsl:attribute name="style">width:100%;height:100%;</xsl:attribute>
								</xsl:when>
								<xsl:otherwise>
									<xsl:attribute name="style">width:100%;height:100%;overflow-y:auto</xsl:attribute>
								</xsl:otherwise>
							</xsl:choose>
							<table class="ms-crm-Form-Editor-Body" cellspacing="8" cellpadding="0">
								<!--<xsl:if test="not($isPreviewMode)">
							<xsl:attribute name="height">100%</xsl:attribute>
							</xsl:if>-->
								<tbody>
									<xsl:if test="$formType!='quick' and $formType!='quickCreate'">
										<tr>
											<td id ="headerSection">
												<!-- Later [SonalS]: Make drag and drop work without header footer. -->
												<xsl:if test="$editorType='dashboardEditor'">
													<xsl:attribute name="style">display:none</xsl:attribute>
												</xsl:if>
												<table cellspacing="0" cellpadding="0" class="stdTable" style="border:1px dashed #6d6e70;">
													<xsl:if test="$isCustomizable='true'">
														<xsl:attribute name="onclick">
															SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
														<xsl:attribute name="onmousedown">
															SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
														<xsl:attribute name="ondblclick">
															ViewPropertiesNow(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
													</xsl:if>
													<xsl:attribute name="controlFor">crmSection</xsl:attribute>
													<xsl:attribute name="summary">
														<xsl:value-of select="//resources/resource[@id = 'sectionProperties']"/>
													</xsl:attribute>
													<xsl:for-each select="header">
														<tr>
															<td>
																<xsl:attribute name="height">100%</xsl:attribute>
																<xsl:call-template name="RenderHeader"></xsl:call-template>
															</td>
														</tr>
													</xsl:for-each>
												</table>
											</td>
										</tr>
									</xsl:if>
									<tr>
										<td id="tabs">
											<xsl:variable name="isSingleTab" select="count(tabs/tab)=1"/>
											<xsl:for-each select="tabs/tab">
												<!--Bug 86719 scrolling in arabic build was not happening for tabs-->
												<div>
													<table class="tab" valign="top" width="100%" style="table-layout: fixed;border:1px dashed #6d6e70;">
														<xsl:if test="$isCustomizable='true'">
															<xsl:attribute name="tabindex">10</xsl:attribute>
															<xsl:attribute name="hidefocus">true</xsl:attribute>
															<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
																<xsl:if test="$editorType!='dashboardEditor'">
																<xsl:attribute name="onmouseover">
																	RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromMainCanvas');
															</xsl:attribute>
															</xsl:if>
															<xsl:attribute name="onclick">
																SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
															</xsl:attribute>
															<xsl:attribute name="onmousedown">
																SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
															</xsl:attribute>
															<xsl:attribute name="ondblclick">
																ViewPropertiesNow(Mscrm.Utilities.eventToDomEvent(event));
															</xsl:attribute>
														</xsl:if>
														<xsl:attribute name="class">ms-crm-Tab</xsl:attribute>
														<xsl:attribute name="summary">
															<xsl:value-of select="//resources/resource[@id = 'tabProperties']"/>
														</xsl:attribute>
														<xsl:attribute name="id">
															<xsl:value-of select="@id"/>
														</xsl:attribute>
														<xsl:attribute name="tabID">
															<xsl:value-of select="@id"/>
														</xsl:attribute>
														<xsl:attribute name="name">
															<xsl:value-of select="@name"/>
														</xsl:attribute>
														<xsl:attribute name="controlFor">crmTab</xsl:attribute>
														<tr>
															<td name="tabData">
																<a name="tabHeader" class="ms-crm-Menu-Label">
																	<xsl:if test="$isCustomizable='true'">
																		<xsl:attribute name="tabindex">10</xsl:attribute>
																		<xsl:attribute name="onclick">
																			Mscrm.TabUtils.expandCollapseTab(this);
																		</xsl:attribute>
																	</xsl:if>
																	<xsl:if test="$isSingleTab and ($editorType='dashboardEditor')">
																		<xsl:attribute name="style">display:none</xsl:attribute>
																	</xsl:if>
																	<xsl:attribute name="id">
																		<xsl:value-of select="concat('tabHeader_',@id)"/>
																	</xsl:attribute>
																	<IMG name="tabImage" src="/_imgs/tab_section_down.png">
																		<xsl:attribute name="id">
																			<xsl:value-of select="concat('tabImage_',@id)"/>
																		</xsl:attribute>
																		<xsl:if test="$RTL='true'">
																			<xsl:attribute name="style">
																				cursor:hand;filter:FlipH();-moz-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);
																			</xsl:attribute>
																		</xsl:if>
																		<xsl:if test="$RTL!='true'">
																			<xsl:attribute name="style">
																				cursor:hand;
																			</xsl:attribute>
																		</xsl:if>
																		<xsl:attribute name ="alt">
																			<xsl:value-of select="//resources/resource[@id = 'tabCollapsed']"/>
																		</xsl:attribute>
																		<xsl:if test="@expanded='false'">
																			<xsl:attribute name="src">
																				/_imgs/tab_section_right.png
																			</xsl:attribute>
																			<xsl:attribute name ="alt">
																				<xsl:value-of select="//resources/resource[@id = 'tabExpanded']"/>
																			</xsl:attribute>
																		</xsl:if>
																	</IMG>
																	<xsl:if test="@locklevel and @locklevel = '1'">
																		<img class="imgLock" src="/_imgs/tools/ico_lock.gif">
																			<xsl:attribute name ="alt">
																				<xsl:value-of select="//resources/resource[@id = 'tabLocked']"/>
																			</xsl:attribute>
																		</img>
																	</xsl:if>
																	<SPAN name="tabText" class="ms-crm-InlineTabHeaderText" style="cursor:hand;font-size:12px;font-weight:bold">
																		<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
																	</SPAN>
																</a>
																<table cellspacing="0" cellpadding="0" class="stdTable">
																	<xsl:attribute name="id">
																		<xsl:value-of select="concat('tabBody_',@id)"/>
																	</xsl:attribute>
																	<xsl:if test="@expanded='false'">
																		<xsl:attribute name="style">
																			display:none;
																		</xsl:attribute>
																	</xsl:if>
																	<xsl:for-each select ="columns/column">
																		<col>
																			<xsl:attribute name="width">
																				<xsl:value-of select="@width"/>
																			</xsl:attribute>
																		</col>
																	</xsl:for-each>
																	<tr>
																		<xsl:for-each select="columns/column">
																			<td style="vertical-align: top;">
																				<table cellspacing="5" cellpadding="0" class="stdTable">
																					<xsl:for-each select="sections/section">
																						<tr>
																							<td>
																								<xsl:attribute name="height">
																									<xsl:choose>
																										<xsl:when test="@height='auto'">100%</xsl:when>
																										<xsl:when test="not(@height)">1%</xsl:when>
																										<xsl:otherwise>
																											<xsl:value-of select="@height"/>
																										</xsl:otherwise>
																									</xsl:choose>
																								</xsl:attribute>
																								<xsl:call-template name="RenderSections">
																								</xsl:call-template>
																							</td>
																						</tr>
																					</xsl:for-each>
																					<tr/>
																				</table>
																			</td>
																		</xsl:for-each>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</div>
												<br/>
											</xsl:for-each>
										</td>
									</tr>

									<xsl:if test="$formType!='quick' and $formType!='quickCreate'">
										<tr>
											<td id ="footerSection">
												<xsl:if test="$editorType='dashboardEditor'">
													<xsl:attribute name="style">display:none</xsl:attribute>
												</xsl:if>
												<table cellspacing="0" cellpadding="0" class="stdTable" style="border:1px dashed #6d6e70;">
													<xsl:if test="$isCustomizable='true'">
														<xsl:attribute name="onclick">
															SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
														<xsl:attribute name="onmousedown">
															SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
														<xsl:attribute name="ondblclick">
															ViewPropertiesNow(Mscrm.Utilities.eventToDomEvent(event));
														</xsl:attribute>
													</xsl:if>
													<xsl:attribute name="controlFor">crmSection</xsl:attribute>
													<xsl:attribute name="summary">
														<xsl:value-of select="//resources/resource[@id = 'sectionProperties']"/>
													</xsl:attribute>
													<xsl:for-each select="footer">
														<tr>
															<td>
																<xsl:attribute name="height">100%</xsl:attribute>
																<xsl:call-template name="RenderFooter"></xsl:call-template>
															</td>
														</tr>
													</xsl:for-each>
													<tr>
														<td></td>
													</tr>
												</table>
											</td>
										</tr>
									</xsl:if>
								</tbody>
							</table>
						</div>
					</div>
				</div>
	</xsl:template>

	<xsl:template name="RenderCustomLink">
		<xsl:attribute name="atype">navLinks</xsl:attribute>
		<xsl:attribute name="url">
			<xsl:value-of select="@Url"/>
		</xsl:attribute>
		<xsl:attribute name="icon">
			<xsl:value-of select="@Icon"/>
		</xsl:attribute>
		<a height="40px" class="ms-crm-Nav-Subarea-Link">
			<xsl:if test="@Icon != ''">
				<img alt="" align="absMiddle" class="ms-crm-Nav-Subarea-Icon" complete="complete">
					<xsl:attribute name="src">
						<xsl:value-of select="concat($webResourceRootUrl,substring(@Icon,14))"/>
					</xsl:attribute>
				</img>
			</xsl:if>
			<!--Group Item Name-->
			<NOBR name="Navigation Item" class="ms-crm-Nav-Subarea-Title">
				<xsl:attribute name="title">
					<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
				</xsl:attribute>
				<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
				<!-- This is just to ensure that the tag doesn't become self ending tag-->
				<xsl:comment>comment</xsl:comment>
			</NOBR>
		</a>
	</xsl:template>
	
	<xsl:template name="RenderNavRelation">
		<xsl:attribute name="atype">navRelations</xsl:attribute>
		<xsl:attribute name="RelationshipName">
			<xsl:value-of select="@RelationshipName"/>
		</xsl:attribute>
		<a height="40px" class="ms-crm-Nav-Subarea-Link">
			<xsl:if test="@Icon != ''">
				<img alt="" align="absMiddle" class="ms-crm-ImageStrip-ico_18_1084 ms-crm-Nav-Subarea-Icon" complete="complete">
					<xsl:attribute name="src">
						<xsl:value-of select="@Icon"/>
					</xsl:attribute>
				</img>
			</xsl:if>
			<!--Group Item Name-->
			<NOBR name="Navigation Item" class="ms-crm-Nav-Subarea-Title">
				<xsl:attribute name="title">
					<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
				</xsl:attribute>
				<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
				<!-- This is just to ensure that the tag doesn't become self ending tag-->
				<xsl:comment>comment</xsl:comment>
			</NOBR>
		</a>
	</xsl:template>
	
	<xsl:template name="RenderNavigation">
		<xsl:for-each select="Navigation/NavBarAreas/NavBarArea">
			<li tabindex="10" hidefocus="true" onfocus="SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);" class="navGroup">
				<xsl:if test="$isCustomizable='true'">
					<xsl:attribute name="onmouseover">
						RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromNavigation');
					</xsl:attribute>
					<xsl:attribute name="onclick">
						SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
					</xsl:attribute>
					<xsl:attribute name="onmousedown">
						SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));
					</xsl:attribute>
					<xsl:attribute name="ondblclick">
						Mscrm.FormNavigationUtils.updateNavItem(Mscrm.Utilities.eventToDomEvent(event));
					</xsl:attribute>
				</xsl:if>
				<xsl:attribute name="id">
					<xsl:value-of select="@Id"/>
				</xsl:attribute>
				<xsl:attribute name="displayName">
					<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
				</xsl:attribute>
				<!--class="ms-crm-Nav-Group"-->
				<a height="40px" atype="group" class="ms-crm-Nav-Group-Heading" >
					<img alt="" src="/_imgs/navup.png" class="ms-crm-Nav-Group-RightIcon"></img>
					<!--GroupName-->
					<NOBR name="Navigation Group" class="ms-crm-Nav-Group-Title" >
						<!--class="ms-crm-Nav-Group-Title"-->
						<xsl:attribute name="title">
							<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
						</xsl:attribute>
						<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
						<!-- This is just to ensure that the tag doesn't become self ending tag-->
						<xsl:comment>comment</xsl:comment>
					</NOBR>
				</a>
				<xsl:variable name="areaId" select="@Id"/>
				<ul>
					<!--<xsl:if test="$areaId='Details'">-->
					<!--Custom Links goes Here-->
					<xsl:for-each select="../../NavBar/child::*[@Area=$areaId]">
						<xsl:if test="(name()='NavBarByRelationshipItem' and (not(@Show) or @Show != 'false')) or (name()='NavBarItem')">
							<li class="navItem">
								<xsl:if test="$isCustomizable='true'">
									<xsl:attribute name="tabindex">10</xsl:attribute>
									<xsl:attribute name="hidefocus">true</xsl:attribute>
									<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
									<xsl:attribute name="onmouseover">
										RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromNavigation');
									</xsl:attribute>
									<xsl:attribute name="ondblclick">
										Mscrm.FormNavigationUtils.updateNavItem(Mscrm.Utilities.eventToDomEvent(event));
									</xsl:attribute>
								</xsl:if>
								<xsl:attribute name="id">
									<xsl:value-of select="@Id"/>
								</xsl:attribute>
								<xsl:attribute name="areaId">
									<xsl:value-of select="@Area"/>
								</xsl:attribute>
								<xsl:attribute name="displayName">
									<xsl:value-of select="Titles/Title[@LCID = $languageCode]/@Text"/>
								</xsl:attribute>
								<xsl:if test="name()='NavBarItem'">
									<xsl:call-template name="RenderCustomLink"/>
								</xsl:if>
								<xsl:if test="name()='NavBarByRelationshipItem'">
									<xsl:call-template name="RenderNavRelation"/>
								</xsl:if>
							</li>
						</xsl:if>
					</xsl:for-each>
				</ul>
			</li>
		</xsl:for-each>

	</xsl:template>


	<xsl:template match="form/section" name="RenderSections">
		<!--tabindex="30" onkeydown="Mscrm.FormEditorKeyboardAccessibility.keyPressHandler();"-->
		<table cellspacing="4" cellpadding="4" class="section" valign="top" width="100%" style="table-layout: fixed;">
			<xsl:attribute name="tabindex">10</xsl:attribute>
			<xsl:attribute name="hidefocus">true</xsl:attribute>
			<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="name">
				<xsl:value-of select="@name"/>
			</xsl:attribute>
			<xsl:attribute name="id">
				<xsl:value-of select="@id"/>
			</xsl:attribute>
			<xsl:attribute name="controlFor">crmSection</xsl:attribute>
			<xsl:attribute name="summary">
				<xsl:value-of select="//resources/resource[@id = 'sectionProperties']"/>
			</xsl:attribute>
			<xsl:attribute name="height">
				<xsl:choose>
					<xsl:when test="@height='auto'">100%</xsl:when>
					<xsl:when test="not(@height)">1%</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="@height"/>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:attribute>
			<!--
			Special case: Starting from IE9 with "table-layout: fixed" we must add a special row to help IE calculate columns' widths correctly.
			Otherwise, if the first row have some cells with colspan then the width of columns will be calculated incorrectly in a number of cases. 
			For example,
				a) in case of 2x2 dashboard layout (which actually allows 4 columns) the first column will be wider than the other one;
				b) in case of 4-column tab with a field in the first column and an IFrame with colspan 3 in second column, the table will be split into two
				columns of equal width
				c) similar weird issues are coming when a 3 column table is having 2x2 in the top 2 rows in 1:2 ratio of colspans. 
			-->
			<xsl:variable name="isFourColumnSection" select="string-length(@columns) = 4"/>
			<xsl:if test="$isFourColumnSection">
				<tr>
					<td style="padding: 0px"/>
					<td style="padding: 0px"/>
					<td style="padding: 0px"/>
					<td style="padding: 0px"/>
				</tr>
			</xsl:if>
			<xsl:variable name="isThreeColumnSection" select="string-length(@columns) = 3"/>
			<xsl:if test="$isThreeColumnSection">
				<tr>
					<td style="padding: 0px"/>
					<td style="padding: 0px"/>
					<td style="padding: 0px"/>
				</tr>
			</xsl:if>

			<xsl:variable name="specialColumnSectionPadding">
				<xsl:choose>
					<xsl:when test="$isFourColumnSection or $isThreeColumnSection">padding-top: 0px;</xsl:when>
				</xsl:choose>
			</xsl:variable>

			<tr>
				<td class="section">
					<xsl:attribute name="colspan">
						<xsl:value-of select="string-length(@columns)"/>
					</xsl:attribute>
					<xsl:if test="@showlabel = 'false' and @showbar = 'false'">
						<xsl:attribute name="style">color: #cccccc;<xsl:value-of select="$specialColumnSectionPadding"/></xsl:attribute>
					</xsl:if>
					<xsl:if test="@showlabel = 'true' and @showbar = 'true'">
						<xsl:attribute name="style">border-bottom: 1px solid #606050;<xsl:value-of select="$specialColumnSectionPadding"/></xsl:attribute>
					</xsl:if>
					<xsl:if test="@showlabel = 'false' and @showbar = 'true'">
						<xsl:attribute name="style">color: #cccccc;border-bottom: 1px solid #606050;<xsl:value-of select="$specialColumnSectionPadding"/></xsl:attribute>
					</xsl:if>
					<xsl:if test="@locklevel and @locklevel = '1'">
						<img class="imgLock" src="/_imgs/tools/ico_lock.gif">
							<xsl:attribute name ="alt">
								<xsl:value-of select="//resources/resource[@id = 'sectionLocked']"/>
							</xsl:attribute>
						</img>
					</xsl:if>
					<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
				</td>
			</tr>
			<xsl:for-each select="rows/row">
				<tr valign="top">
					<xsl:if test="@height">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="@height='auto'">height:100%</xsl:when>
								<xsl:when test="@height='std'">height:25px</xsl:when>
								<xsl:when test="@height='std' and ../../@celllabelposition='Top' and count(cell) > 0 ">height:50px</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="@height"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:if test="not(@height) and not(cell[not(@showlabel) or @showlabel='true']/control)">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="../../@celllabelposition='Top' and count(cell) > 0">height:50px</xsl:when>
								<xsl:otherwise>height:25px</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:for-each select="cell">
						<xsl:apply-templates select=".">
						</xsl:apply-templates>
					</xsl:for-each>
				</tr>
			</xsl:for-each>
			<tr>
				<td height="15px"></td>
			</tr>
		</table>
	</xsl:template>
	<xsl:template match="header" name="RenderHeader">
		<table cellspacing="4" cellpadding="4" class="header" valign="top" width="100%" style="table-layout: fixed;">
			<xsl:attribute name="tabindex">10</xsl:attribute>
			<xsl:attribute name="hidefocus">true</xsl:attribute>
			<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="name">Header</xsl:attribute>
			<xsl:attribute name="id">Header</xsl:attribute>
			<xsl:attribute name="height">100%</xsl:attribute>
			<xsl:attribute name="controlFor">crmSection</xsl:attribute>
			<xsl:attribute name="summary">
				<xsl:value-of select="//resources/resource[@id = 'sectionProperties']"/>
			</xsl:attribute>
			<tr >
				<td class="section">
					<xsl:attribute name="colspan">
						<xsl:value-of select="string-length(@columns)"/>
					</xsl:attribute>
					<xsl:attribute name="style">border-bottom: 1px solid #606050;</xsl:attribute>
					<img alt="" class="imgLock" src="/_imgs/tools/ico_lock.gif">
						<xsl:attribute name ="alt">
							<xsl:value-of select="//resources/resource[@id = 'sectionLocked']"/>
						</xsl:attribute>
					</img>
					<xsl:value-of select="$headerCaption"/>
				</td>
			</tr>
			<xsl:for-each select="rows/row">
				<tr valign="top">
					<xsl:if test="@height">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="@height='auto'">height:100%</xsl:when>
								<xsl:when test="@height='std'">height:25px</xsl:when>
								<xsl:when test="@height='std' and ../../@celllabelposition='Top' and count(cell) > 0 ">height:50px</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="@height"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:if test="not(@height) and not(cell[not(@showlabel) or @showlabel='true']/control)">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="../../@celllabelposition='Top' and count(cell) > 0">height:50px</xsl:when>
								<xsl:otherwise>height:25px</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:for-each select="cell">
						<xsl:apply-templates select=".">
						</xsl:apply-templates>
					</xsl:for-each>
				</tr>
			</xsl:for-each>
			<tr>
				<td height="15px"></td>
			</tr>
		</table>
	</xsl:template>

	<xsl:template match="footer" name="RenderFooter">
		<table cellspacing="4" cellpadding="4" class="footer" valign="top" width="100%" style="table-layout: fixed;">
			<xsl:attribute name="tabindex">10</xsl:attribute>
			<xsl:attribute name="hidefocus">true</xsl:attribute>
			<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="name">Footer</xsl:attribute>
			<xsl:attribute name="id">Footer</xsl:attribute>
			<xsl:attribute name="height">100%</xsl:attribute>
			<xsl:attribute name="controlFor">crmSection</xsl:attribute>
			<xsl:attribute name="summary">
				<xsl:value-of select="//resources/resource[@id = 'sectionProperties']"/>
			</xsl:attribute>
			<tr >
				<td class="section">
					<xsl:attribute name="colspan">
						<xsl:value-of select="string-length(@columns)"/>
					</xsl:attribute>
					<xsl:attribute name="style">border-bottom: 1px solid #606050;</xsl:attribute>
					<img alt="" class="imgLock" src="/_imgs/tools/ico_lock.gif">
						<xsl:attribute name ="alt">
							<xsl:value-of select="//resources/resource[@id = 'sectionLocked']"/>
						</xsl:attribute>
					</img>
					<xsl:value-of select="$footerCaption"/>
				</td>
			</tr>
			<xsl:for-each select="rows/row">
				<tr valign="top">
					<xsl:if test="@height">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="@height='auto'">height:100%</xsl:when>
								<xsl:when test="@height='std'">height:25px</xsl:when>
								<xsl:when test="@height='std' and ../../@celllabelposition='Top' and count(cell) > 0 ">height:50px</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="@height"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:if test="not(@height) and not(cell[not(@showlabel) or @showlabel='true']/control)">
						<xsl:attribute name="style">
							<xsl:choose>
								<xsl:when test="../../@celllabelposition='Top' and count(cell) > 0">height:50px</xsl:when>
								<xsl:otherwise>height:25px</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</xsl:if>
					<xsl:for-each select="cell">
						<xsl:apply-templates select=".">
						</xsl:apply-templates>
					</xsl:for-each>
				</tr>
			</xsl:for-each>
			<tr>
				<td style="height:15px"></td>
			</tr>
		</table>
	</xsl:template>

	<xsl:template match="footer/rows/row/cell">
		<xsl:variable name="isIframe" select="control[starts-with(@id,'IFRAME_')]"/>
		<xsl:variable name="isWebResource" select="control[starts-with(@id,'WebResource_')]"/>
		<xsl:variable name="isUnboundCustomControl" select="control[starts-with(@id,'UnboundCustomControl_')]"/>
		<xsl:variable name="isFormXmlCell" select="control[starts-with(@id,'footer_')]"/>
		<xsl:variable name="fieldName">
			<xsl:choose>
				<xsl:when test="control[starts-with(@id,'footer_')]">
					<xsl:value-of select="substring(control/@id,8)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="control/@id"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="isUserSpacer" select="control[starts-with(@id,'spacer_User')]"/>
		<xsl:variable name="isSystemSpacer" select="control[starts-with(@id,'spacer_System')]"/>
		<xsl:variable name="labelWidth">
			<xsl:choose>
				<xsl:when test="../../../@labelwidth">
					<xsl:value-of select="../../../@labelwidth"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="115"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="cellLabelPosLeft" select="starts-with(../../../@celllabelposition,'Left')"/>
		<xsl:variable name="cellLabelPosTop" select="starts-with(../../../@celllabelposition,'Top')"/>
		<xsl:variable name="cellLabelAlignmentCenter" select="starts-with(../../../@celllabelalignment,'Center')"/>
		<xsl:variable name="cellLabelAlignmentLeft" select="starts-with(../../../@celllabelalignment,'Left')"/>
		<xsl:variable name="cellLabelAlignmentRight" select="starts-with(../../../@celllabelalignment,'Right')"/>
		<xsl:variable name="isSecured" select="/entity/properties/fields/field[@name = $fieldName and @issecured = 'true']"/>
		<xsl:variable name="isLocked" select="(@locklevel and @locklevel = '1')"/>
		<xsl:variable name="isScriptRequired" select="/entity/formeditor/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/header/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/footer/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/externaldependencies/dependency[@id = $fieldName]"/>
		<td>
			<xsl:if test="$isCustomizable='true'">
				<xsl:attribute name="tabindex">10</xsl:attribute>
				<xsl:attribute name="hidefocus">true</xsl:attribute>
				<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
				<xsl:attribute name="onmouseover">
					RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromMainCanvas');
				</xsl:attribute>
			</xsl:if>
			<xsl:if test="@colspan">
				<xsl:attribute name="colspan">
					<xsl:value-of select="@colspan"/>
				</xsl:attribute>
			</xsl:if>
			<xsl:if test="@rowspan">
				<xsl:attribute name="rowspan">
					<xsl:value-of select="@rowspan"/>
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="controlFor">footer</xsl:attribute>
			<xsl:if test="$fieldName">
				<xsl:choose>
					<xsl:when test="$isIframe">
						<xsl:attribute name="class">iframe</xsl:attribute>
					</xsl:when>
					<xsl:when test="$isWebResource">
						<xsl:attribute name="class">webresource</xsl:attribute>
						<xsl:attribute name="referencingName">
							<xsl:value-of select="control/parameters/Url" />
						</xsl:attribute>
					</xsl:when>
					<xsl:when test="$isUnboundCustomControl">
						<xsl:attribute name="class">unboundcustomcontrol</xsl:attribute>
					</xsl:when>
					<xsl:otherwise>
						<xsl:attribute name="class">cell</xsl:attribute>
					</xsl:otherwise>
				</xsl:choose>
				<xsl:if test="$isScriptRequired">
					<xsl:attribute name="scriptrequired">true</xsl:attribute>
				</xsl:if>
				<xsl:attribute name="name">
					<xsl:choose>
						<xsl:when test="$isFormXmlCell">
							<xsl:value-of select="concat('footer_',$fieldName)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="$fieldName"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:attribute>
				<xsl:attribute name="id">
					<xsl:value-of select="@id"/>
					<!--<xsl:value-of select="$fieldName"/>-->
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="datatype">
				<xsl:value-of select="/entity/metadata/fields/field[@name = $fieldName]/@datatype"/>
			</xsl:attribute>
			<xsl:if test="$fieldName">
				<table cellspacing="0" cellpadding="0" class="cell" style="table-layout: fixed;">
					<xsl:if test="$isSystemSpacer">
						<xsl:attribute name="style">TABLE-LAYOUT: fixed; HEIGHT: 15px</xsl:attribute>
					</xsl:if >
					<col>
						<xsl:attribute name="max-width">
							<xsl:value-of select="$labelWidth"/>
						</xsl:attribute>
					</col>
					<col/>
					<tr>
						<xsl:choose>
							<xsl:when test="$cellLabelPosLeft">
								<xsl:if test="not(@showlabel) or @showlabel='true'">
									<td style="vertical-align: top;height: 100%" class="label">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<!--<xsl:value-of select="../../../@id"/>-->
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
									</td>
								</xsl:if>
								<td valign="top" nowrap="" class="field">
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>

							</xsl:when>
							<xsl:when test="$cellLabelPosTop">
								<td valign="top" height="100%" nowrap="" class="label" colspan="2">
									<xsl:if test="not(@showlabel) or @showlabel='true'">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<br/>
									</xsl:if>
									<div class="field" style="height:100%;">
										<xsl:if test="$isIframe">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isWebResource">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isUserSpacer">
											<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
											<xsl:value-of select="$spacerCaption"/>
										</xsl:if>
										<xsl:if test="$isSystemSpacer">
											<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
										</xsl:if >
										<xsl:if test="$fieldName">
											<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
										</xsl:if>
									</div>
								</td>

							</xsl:when>
							<xsl:otherwise>
								<xsl:if test="not(@showlabel) or @showlabel='true'">
									<td style="vertical-align: top;height: 100%" class="label">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
									</td>
								</xsl:if>
								<td valign="top" nowrap="" class="field">
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>
							</xsl:otherwise>
						</xsl:choose>
					</tr>
					<!--//</xsl:if>-->
				</table>
			</xsl:if>
		</td>
	</xsl:template>
	<xsl:template match="header/rows/row/cell">
		<xsl:variable name="isIframe" select="control[starts-with(@id,'IFRAME_')]"/>
		<xsl:variable name="isWebResource" select="control[starts-with(@id,'WebResource_')]"/>
		<xsl:variable name="isUnboundCustomControl" select="control[starts-with(@id,'UnboundCustomControl_')]"/>
		<xsl:variable name="isFormXmlCell" select="control[starts-with(@id,'header_')]"/>
		<xsl:variable name="fieldName">
			<xsl:choose>
				<xsl:when test="control[starts-with(@id,'header_')]">
					<xsl:value-of select="substring(control/@id,8)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="control/@id"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="isUserSpacer" select="control[starts-with(@id,'spacer_User')]"/>
		<xsl:variable name="isSystemSpacer" select="control[starts-with(@id,'spacer_System')]"/>
		<xsl:variable name="labelWidth">
			<xsl:choose>
				<xsl:when test="../../../@labelwidth">
					<xsl:value-of select="../../../@labelwidth"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="115"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="cellLabelPosLeft" select="starts-with(../../../@celllabelposition,'Left')"/>
		<xsl:variable name="cellLabelPosTop" select="starts-with(../../../@celllabelposition,'Top')"/>
		<xsl:variable name="cellLabelAlignmentCenter" select="starts-with(../../../@celllabelalignment,'Center')"/>
		<xsl:variable name="cellLabelAlignmentLeft" select="starts-with(../../../@celllabelalignment,'Left')"/>
		<xsl:variable name="cellLabelAlignmentRight" select="starts-with(../../../@celllabelalignment,'Right')"/>
		<xsl:variable name="isSecured" select="/entity/properties/fields/field[@name = $fieldName and @issecured = 'true']"/>
		<xsl:variable name="isLocked" select="(@locklevel and @locklevel = '1') or (not($isPreviewMode) and ((/entity/metadata/fields/field[@name = $fieldName and @requiredforform = 'true']) or (/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'systemrequired'])))"/>
		<xsl:variable name="isScriptRequired" select="/entity/formeditor/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/header/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/footer/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/externaldependencies/dependency[@id = $fieldName]"/>
		<td>
			<xsl:if test="$isCustomizable='true'">
				<xsl:attribute name="tabindex">10</xsl:attribute>
				<xsl:attribute name="hidefocus">true</xsl:attribute>
				<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
				<xsl:attribute name="onmouseover">
					RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromMainCanvas');
				</xsl:attribute>
			</xsl:if>
			<xsl:if test="@colspan">
				<xsl:attribute name="colspan">
					<xsl:value-of select="@colspan"/>
				</xsl:attribute>
			</xsl:if>
			<xsl:if test="@rowspan">
				<xsl:attribute name="rowspan">
					<xsl:value-of select="@rowspan"/>
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="controlFor">header</xsl:attribute>
			<xsl:if test="$fieldName">
				<xsl:choose>
					<xsl:when test="$isIframe">
						<xsl:attribute name="class">iframe</xsl:attribute>
					</xsl:when>
					<xsl:when test="$isWebResource">
						<xsl:attribute name="class">webresource</xsl:attribute>
						<xsl:attribute name="referencingName">
							<xsl:value-of select="control/parameters/Url" />
						</xsl:attribute>
					</xsl:when>
					<xsl:when test="$isUnboundCustomControl">
						<xsl:attribute name="class">unboundcustomcontrol</xsl:attribute>
					</xsl:when>
					<xsl:otherwise>
						<xsl:attribute name="class">cell</xsl:attribute>
					</xsl:otherwise>
				</xsl:choose>
				<xsl:if test="$isScriptRequired">
					<xsl:attribute name="scriptrequired">true</xsl:attribute>
				</xsl:if>
				<xsl:attribute name="name">
					<xsl:choose>
						<xsl:when test="$isFormXmlCell">
							<xsl:value-of select="concat('header_',$fieldName)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="$fieldName"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:attribute>
				<xsl:attribute name="id">
					<xsl:value-of select="@id"/>
					<!--<xsl:value-of select="$fieldName"/>-->
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="datatype">
				<xsl:value-of select="/entity/metadata/fields/field[@name = $fieldName]/@datatype"/>
			</xsl:attribute>
			<xsl:if test="$fieldName">
				<table cellspacing="0" cellpadding="0" class="cell" style="table-layout: fixed;">
					<xsl:if test="$isSystemSpacer">
						<xsl:attribute name="style">TABLE-LAYOUT: fixed; HEIGHT: 15px</xsl:attribute>
					</xsl:if >
					<col>
						<xsl:attribute name="max-width">
							<xsl:value-of select="$labelWidth"/>
						</xsl:attribute>
					</col>
					<col/>
					<tr>
						<xsl:choose>
							<xsl:when test="$cellLabelPosLeft">
								<xsl:if test="not(@showlabel) or @showlabel='true'">
									<td style="vertical-align: top;height: 100%" class="label">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<!--<xsl:value-of select="../../../@id"/>-->
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<img src="/_imgs/frm_required.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<img src="/_imgs/frm_recommended.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
									</td>
								</xsl:if>
								<td valign="top" nowrap="" class="field">
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>

							</xsl:when>
							<xsl:when test="$cellLabelPosTop">
								<td valign="top" height="100%" nowrap="" class="label" colspan="2">
									<xsl:if test="not(@showlabel) or @showlabel='true'">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<img src="/_imgs/frm_required.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<img src="/_imgs/frm_recommended.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<br/>
									</xsl:if>
									<div class="field" style="height:100%;">
										<xsl:if test="$isIframe">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isWebResource">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isUserSpacer">
											<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
											<xsl:value-of select="$spacerCaption"/>
										</xsl:if>
										<xsl:if test="$isSystemSpacer">
											<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
										</xsl:if >
										<xsl:if test="$fieldName">
											<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
										</xsl:if>
									</div>
								</td>

							</xsl:when>
							<xsl:otherwise>
								<xsl:if test="not(@showlabel) or @showlabel='true'">
									<td style="vertical-align: top;height: 100%" class="label">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
											<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
												<img src="/_imgs/frm_required.gif" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
											<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
												<img src="/_imgs/frm_recommended.gif" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
									</td>
								</xsl:if>
								<td valign="top" nowrap="" class="field">
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>
							</xsl:otherwise>
						</xsl:choose>
					</tr>
					<!--//</xsl:if>-->
				</table>
			</xsl:if>
		</td>
	</xsl:template>

	<xsl:template match="section/rows/row/cell">
		<xsl:variable name="fieldName" select="control/@id"/>
		<xsl:variable name="isIframe" select="control[starts-with(@classid,'{FD2A7985-3187-444e-908D-6624B21F69C0}')]"/>
		<xsl:variable name="isWebResource" select="control[starts-with(@classid,'{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}')] or control[starts-with(@classid,'{587CDF98-C1D5-4bde-8473-14A0BC7644A7}')] or control[starts-with(@classid,'{080677DB-86EC-4544-AC42-F927E74B491F}')]"/>
		<xsl:variable name="isUnboundCustomControl" select="control[starts-with(@id,'UnboundCustomControl_')]"/>
		<xsl:variable name="isSubGrid" select="control[(starts-with(@classid,'{E7A81278-8635-4d9e-8D4D-59480B391C5B}')) or (@indicationOfSubgrid = 'true')]" />
		<xsl:variable name="isPowerBITile" select="control[starts-with(@classid,'{8C54228C-1B25-4909-A12A-F2B968BB0D62}')]"/>
		<xsl:variable name="isQueue" select="control[starts-with(@classid,'{EE9078C8-6946-4E2C-B8F8-35E65F4BE6A8}')]"/>
		<xsl:variable name="isNotes" select="control[starts-with(@classid,'{06375649-c143-495e-a496-c962e5b4488e}')] or control[starts-with(@classid,'{06375649-C143-495E-A496-C962E5B4488E}')]"/>
		<xsl:variable name="isUserSpacer" select="control[starts-with(@id,'spacer_User')]"/>
		<xsl:variable name="isSystemSpacer" select="control[starts-with(@id,'spacer_System')]"/>
		<xsl:variable name="isPreviewCell" select="@ispreviewcell='true'" />
		<xsl:variable name="isScriptRequired" select="/entity/formeditor/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/header/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/footer/rows/row/cell/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/tabs/tab/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/events/event/dependencies/dependency[@id = $fieldName] or
								/entity/form/externaldependencies/dependency[@id = $fieldName]"/>
		<xsl:variable name="isQuickFormCollection" select="control[starts-with(@classid,'{5C5600E0-1D6E-4205-A272-BE80DA87FD42}')]"/>
		<xsl:variable name="isReferencePanelQuickFormCollection" select="control[starts-with(@classid,'{B68B05F0-A46D-43F8-843B-917920AF806A}')]"/>
		<xsl:variable name="isReferencePanelSubGrid" select="control[starts-with(@classid,'{02D4264B-47E2-4B4C-AA95-F439F3F4D458}')] or 
									(starts-with(../../../@name,'ref_pan_') and control[starts-with(@classid,'{F9A8A302-114E-466A-B582-6771B2AE0D92}')])"/>
		<xsl:variable name="isInteractionWall" select="control[starts-with(@classid,'{1F179106-FA28-4495-961E-F6BD93C21974}')]"/>
		<xsl:variable name="isBingMap" select="control[starts-with(@classid,'{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}')]"/>
		<xsl:variable name="isSocialInsight" select="control[starts-with(@classid,'{86B9E25E-695E-4FEF-AC69-F05CFA96739C}')]" />
		<xsl:variable name="isOrgInsights" select="control[starts-with(@classid,'{76B9E25E-695E-4FEF-AC69-F05CFA96739C}')]" />
		<xsl:variable name="isTimerControl" select="control[starts-with(@classid,'{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}')]" />
		<xsl:variable name="isSearchWidget" select="control[starts-with(@classid,'{E616A57F-20E0-4534-8662-A101B5DDF4E0}')]" />
		<xsl:variable name="isReferencePanelSearchWidget" select="control[starts-with(@classid,'{7CCD1494-1F7A-4E3A-8BDE-F32069DAEB9F}')]" />
		<xsl:variable name="isACIControl" select="control[starts-with(@classid,'{C8BFBBEF-6851-4401-A0CC-7450062FE085}')]" />
		<xsl:variable name="isRICards" select="control[starts-with(@uniqueid,'{3ff9a528-dd50-4aca-8f10-2e5ed73513ad}')]" />
		<xsl:variable name="isHealthWidget" select="control[starts-with(@uniqueid,'{9fdf5f91-88b1-47f4-ad53-c11efc01a01d}')]" />


		<!--tabindex="30" onkeydown="Mscrm.FormEditorKeyboardAccessibility.keyPressHandler();"-->
		<td data-addmouseover="true">
				<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
				<xsl:attribute name="hidefocus">true</xsl:attribute>
				<xsl:if test="@colspan">
					<xsl:attribute name="colspan">
						<xsl:value-of select="@colspan"/>
					</xsl:attribute>
				</xsl:if>
				<xsl:if test="@rowspan">
					<xsl:attribute name="rowspan">
						<xsl:value-of select="@rowspan"/>
					</xsl:attribute>
					<xsl:if test="$editorType!='dashboardEditor'">
						<xsl:attribute name="style">
							<!-- number 10 (extra space) is comming from padding and border 2*(4 +1) in which 4 is cell padding, 1 is border width, 2 is used for getting both values of top and bottom of cell. 
							Number 35 is coming from row height (25px) + extra space (10px) -->
							<xsl:value-of select="concat('height:', @rowspan*35 - 10, 'px;')"/> 
						</xsl:attribute>
					</xsl:if>
				</xsl:if>
				<xsl:if test="$isPreviewCell">
					<xsl:attribute name="ispreviewcell">true</xsl:attribute>
				</xsl:if>
				<xsl:attribute name="controlFor">section</xsl:attribute>
				<xsl:if test="$fieldName">
					<xsl:choose>
						<xsl:when test="$isIframe">
							<xsl:attribute name="class">iframe</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isPowerBITile">
							<xsl:attribute name="class">powerbitile</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isQuickFormCollection">
							<xsl:attribute name="class">quickformcollection</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isReferencePanelQuickFormCollection">
							<xsl:attribute name="class">referencepanelquickformcollection</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isReferencePanelSubGrid">
							<xsl:attribute name="class">referencepanelsubgrid</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isInteractionWall">
							<xsl:attribute name="class">interactionwall</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isBingMap">
							<xsl:attribute name="class">bingmap</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isACIControl">
							<xsl:attribute name="class">aci</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isUnboundCustomControl">
							<xsl:attribute name="class">unboundcustomcontrol</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isRICards">
							<xsl:attribute name="class">ricards</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isWebResource">
							<xsl:attribute name="class">webresource</xsl:attribute>
							<xsl:attribute name="referencingName">
								<xsl:value-of select="control/parameters/Url" />
							</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isNotes">
							<xsl:attribute name="class">notes</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isSubGrid">
							<xsl:attribute name="class">subgrid</xsl:attribute>
							<!--Temparory style changes until grid/chart preview feature comes-->
							<xsl:if test="$editorType='dashboardEditor'">
								<xsl:attribute name="style">border:1px dashed #6d6e70;</xsl:attribute>
							</xsl:if>
						</xsl:when>
						<xsl:when test="$isQueue">
							<xsl:attribute name="class">queue</xsl:attribute>
							<!--Temparory style changes until queue preview feature comes-->
							<xsl:if test="$editorType='dashboardEditor'">
								<xsl:attribute name="style">border:1px dashed #6d6e70;</xsl:attribute>
							</xsl:if>
						</xsl:when>
						<xsl:when test="$isSocialInsight">
							<xsl:attribute name="class">socialInsight</xsl:attribute>
							<xsl:attribute name="style"><xsl:text>border:1px dashed rgb(109, 110, 112);</xsl:text></xsl:attribute>
						</xsl:when>
						<xsl:when test="$isTimerControl">
							<xsl:attribute name="class">timercontrol</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isSearchWidget">
							<xsl:attribute name="class">searchwidget</xsl:attribute>
						</xsl:when>
						<xsl:when test="$isReferencePanelSearchWidget">
							<xsl:attribute name="class">referencepanelsearchwidget</xsl:attribute>
						</xsl:when>
            <xsl:when test="$isOrgInsights">
              <xsl:attribute name="class">orgInsights</xsl:attribute>
            </xsl:when>
						<xsl:otherwise>
							<xsl:attribute name="class">cell</xsl:attribute>
						</xsl:otherwise>
					</xsl:choose>
					<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true']">
						<xsl:attribute name="sysrequired">true</xsl:attribute>
					</xsl:if>
					<xsl:if test="$isScriptRequired">
						<xsl:attribute name="scriptrequired">true</xsl:attribute>
					</xsl:if>
					<xsl:attribute name="name">
						<xsl:value-of select="$fieldName"/>
					</xsl:attribute>
					<xsl:attribute name="id">
						<xsl:value-of select="@id"/>
						<!--<xsl:value-of select="$fieldName"/>-->
					</xsl:attribute>
				</xsl:if>
				<xsl:variable name="addedBy" select="control/@addedby"/>
				<xsl:if test="$addedBy">
					<xsl:attribute name="style">background-color:lightblue;</xsl:attribute>
				</xsl:if>
				<xsl:attribute name="datatype">
					<xsl:value-of select="/entity/metadata/fields/field[@name = $fieldName]/@datatype"/>
				</xsl:attribute>

			<xsl:choose>
				<xsl:when test="$editorType!='dashboardEditor'">
					<xsl:call-template name="RenderFormdEditorCellContent">
						<xsl:with-param name="fieldName" select="$fieldName"/>
						<xsl:with-param name="isSystemSpacer" select="$isSystemSpacer"/>
						<xsl:with-param name="isIframe" select="$isIframe" />
						<xsl:with-param name="isWebResource" select="$isWebResource"/>
						<xsl:with-param name="isUnboundCustomControl" select="$isUnboundCustomControl"/>
						<xsl:with-param name="isPowerBITile" select="$isPowerBITile"/>
						<xsl:with-param name="isSocialInsight" select="$isSocialInsight"/>
						<xsl:with-param name="isBingMap" select="$isBingMap"/>
						<xsl:with-param name="isSubGrid" select="$isSubGrid"/>
						<xsl:with-param name="isReferencePanelQuickFormCollection" select="$isReferencePanelQuickFormCollection" />
						<xsl:with-param name="isReferencePanelSubGrid" select="$isReferencePanelSubGrid" />
						<xsl:with-param name="isInteractionWall" select="$isInteractionWall" />
						<xsl:with-param name="isNotes" select="$isNotes"/>
						<xsl:with-param name="isTimerControl" select="$isTimerControl"/>
						<xsl:with-param name="isSearchWidget" select="$isSearchWidget"/>
						<xsl:with-param name="isReferencePanelSearchWidget" select="$isReferencePanelSearchWidget"/>
						<xsl:with-param name="isUserSpacer" select="$isUserSpacer"/>
						<xsl:with-param name="isPreviewCell" select="$isPreviewCell"/>
						<xsl:with-param name="isScriptRequired" select="$isScriptRequired"/>
						<xsl:with-param name="isOrgInsights" select="$isOrgInsights"/>
						<xsl:with-param name="isRICards" select="$isRICards"/>
						<xsl:with-param name="isHealthWidget" select="$isHealthWidget"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:call-template name="RenderDashboardEditorCellContent">
						<xsl:with-param name="fieldName" select="$fieldName"/>
						<xsl:with-param name="isIframe" select="$isIframe"/>
						<xsl:with-param name="isQuickFormCollection" select="$isQuickFormCollection" />
						<xsl:with-param name="isWebResource" select="$isWebResource"/>
						<xsl:with-param name="isUnboundCustomControl" select="$isUnboundCustomControl"/>
						<xsl:with-param name="isPowerBITile" select="$isPowerBITile"/>
						<xsl:with-param name="isNotes" select="$isNotes"/>
						<xsl:with-param name="isSocialInsight" select="$isSocialInsight"/>
						<xsl:with-param name="isSubGrid" select="$isSubGrid"/>
						<xsl:with-param name="isUserSpacer" select="$isUserSpacer"/>
						<xsl:with-param name="isSystemSpacer" select="$isSystemSpacer"/>
						<xsl:with-param name="isPreviewCell" select="$isPreviewCell"/>
						<xsl:with-param name="isLocked" select="@isLocked"/>
						<xsl:with-param name="id" select="@id"/>
						<xsl:with-param name="rowspan" select="@rowspan"/>
						<xsl:with-param name="isOrgInsights" select="$isOrgInsights"/>
						<xsl:with-param name="isACIControl" select="$isACIControl"/>
						<xsl:with-param name="isRICards" select="$isRICards"/>
					</xsl:call-template>
				</xsl:otherwise>
			</xsl:choose>
		</td>
	</xsl:template>

	<xsl:template name="RenderFormdEditorCellContent">
		<xsl:param name="fieldName"/>
		<xsl:param name="isSystemSpacer"/>
		<xsl:param name="isIframe" />
		<xsl:param name="isWebResource"/>
		<xsl:param name="isUnboundCustomControl"/>
		<xsl:param name="isSocialInsight" />
		<xsl:param name="isBingMap"/>
		<xsl:param name="isSubGrid"/>
		<xsl:param name="isReferencePanelQuickFormCollection" />
		<xsl:param name="isReferencePanelSubGrid" />
		<xsl:param name="isInteractionWall" />
		<xsl:param name="isNotes"/>
		<xsl:param name="isTimerControl"/>
		<xsl:param name="isSearchWidget"/>
		<xsl:param name="isReferencePanelSearchWidget"/>
		<xsl:param name="isUserSpacer"/>
		<xsl:param name="isPreviewCell"/>
		<xsl:param name="isScriptRequired"/>
    	<xsl:param name="isOrgInsights" />
		<xsl:param name="isACIControl"/>
		<xsl:param name="isRICards"/>
		<xsl:param name="isHealthWidget"/>
		<xsl:variable name="cellLabelPosLeft" select="starts-with(../../../@celllabelposition,'Left')"/>
		<xsl:variable name="cellLabelPosTop" select="starts-with(../../../@celllabelposition,'Top')"/>
		<xsl:variable name="cellLabelAlignmentCenter" select="starts-with(../../../@celllabelalignment,'Center')"/>
		<xsl:variable name="cellLabelAlignmentLeft" select="starts-with(../../../@celllabelalignment,'Left')"/>
		<xsl:variable name="cellLabelAlignmentRight" select="starts-with(../../../@celllabelalignment,'Right')"/>
		<xsl:variable name="isLocked" select="(@locklevel and @locklevel = '1') or (not($isPreviewMode) and ((/entity/metadata/fields/field[@name = $fieldName and @requiredforform = 'true']) or (/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'systemrequired'])))"/>
		<xsl:variable name="isSecured" select="/entity/properties/fields/field[@name = $fieldName and @issecured = 'true']"/>
		<xsl:variable name="isQuickFormCollection" select="control[starts-with(@classid,'{5C5600E0-1D6E-4205-A272-BE80DA87FD42}')]"/>
		<xsl:variable name="labelWidth">
			<xsl:choose>
				<xsl:when test="../../../@labelwidth">
					<xsl:value-of select="../../../@labelwidth"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="115"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:if test="$isCustomizable='true'">
			<xsl:attribute name="onmouseover">RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event), 'fromMainCanvas');</xsl:attribute>
			<xsl:attribute name="tabindex">10</xsl:attribute>
		</xsl:if>
			<xsl:if test="$fieldName">
				<table cellspacing="0" cellpadding="0" class="cell" style="table-layout: fixed;">
					<xsl:if test="$isSystemSpacer">
						<xsl:attribute name="style">TABLE-LAYOUT: fixed; HEIGHT: 15px</xsl:attribute>
					</xsl:if>
						<col>
							<xsl:attribute name="max-width">
								<xsl:value-of select="$labelWidth"/>
							</xsl:attribute>
						</col>
					<col/>
					<!--//<xsl:if test="not(@isSpacer)">-->
					<tr style="height:100%">
						<xsl:choose>
							<xsl:when test="$cellLabelPosLeft">
								<xsl:if test="not(@showlabel) or @showlabel='true'">
									<td style="vertical-align: top;height: 100%" class="label">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$isPreviewMode"/>
											<xsl:when test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
												<xsl:attribute name="class">label ms-crm-Field-Required</xsl:attribute>
											</xsl:when>
											<xsl:when test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
												<xsl:attribute name="class">label ms-crm-Field-Recommended</xsl:attribute>
											</xsl:when>
										</xsl:choose>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<!--<xsl:value-of select="../../../@id"/>-->
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<img src="/_imgs/frm_required.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<img src="/_imgs/frm_recommended.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
									</td>
								</xsl:if>
								<td valign="top" nowrap="" class="field">
									<xsl:choose>
										<xsl:when test="$isPreviewMode"/>
										<xsl:when test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<xsl:attribute name="class">field reqField</xsl:attribute>
										</xsl:when>
										<xsl:when test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<xsl:attribute name="class">field recField</xsl:attribute>
										</xsl:when>
									</xsl:choose>
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isQuickFormCollection">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelQuickFormCollection">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelSubGrid">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isInteractionWall">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isBingMap">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isHealthWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSocialInsight">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSubGrid">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isUnboundCustomControl">
										<xsl:value-of select="control/@id"/>
									</xsl:if>
									<xsl:if test="$isNotes">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isTimerControl">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSearchWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelSearchWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isACIControl">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isRICards">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>

							</xsl:when>
							<xsl:when test="$cellLabelPosTop">
								<td valign="top" height="100%" nowrap="" class="label" colspan="2">
									<xsl:if test="not(@showlabel) or @showlabel='true'">
										<xsl:attribute name="title">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:attribute>
										<xsl:choose>
											<xsl:when test="$cellLabelAlignmentCenter">
												<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentLeft">
												<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:when test="$cellLabelAlignmentRight">
												<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
											</xsl:when>
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="$RTL='true'">
														<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:when>
													<xsl:otherwise>
														<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
													</xsl:otherwise>
												</xsl:choose>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:choose>
											<xsl:when test="$isPreviewMode"/>
											<xsl:when test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
												<xsl:attribute name="class">label ms-crm-Field-Required</xsl:attribute>
											</xsl:when>
											<xsl:when test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
												<xsl:attribute name="class">label ms-crm-Field-Recommended</xsl:attribute>
											</xsl:when>
										</xsl:choose>
										<xsl:if test="$isLocked or $isScriptRequired">
											<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='lockedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<img src="/_imgs/frm_required.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<img src="/_imgs/frm_recommended.gif" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<xsl:if test="$isSecured">
											<img src="/_imgs/Permission_Key.png" >
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id='securedField']"/>
												</xsl:attribute>
											</img>
										</xsl:if>
										<br/>
									</xsl:if>
									<div class="field" style="height:100%;">
										<xsl:if test="$isRICards">
											<xsl:attribute name="style">overflow:hidden;height:100%;</xsl:attribute>
										</xsl:if>
										<xsl:if test="$isIframe">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isQuickFormCollection">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isReferencePanelQuickFormCollection">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isReferencePanelSubGrid">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isInteractionWall">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isWebResource">
											<xsl:value-of select="control/parameters/Url"/>
										</xsl:if>
										<xsl:if test="$isBingMap">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isSocialInsight">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isSubGrid">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isUnboundCustomControl">
											<xsl:value-of select="control/@id"/>
										</xsl:if>
										<xsl:if test="$isNotes">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isTimerControl">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isSearchWidget">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isReferencePanelSearchWidget">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isACIControl">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isHealthWidget">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isRICards">
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										</xsl:if>
										<xsl:if test="$isUserSpacer">
											<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
											<xsl:value-of select="$spacerCaption"/>
										</xsl:if>
										<xsl:if test="$isSystemSpacer">
											<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
										</xsl:if >
										<xsl:if test="$fieldName">
											<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
										</xsl:if>
									</div>
								</td>

							</xsl:when>
							<xsl:otherwise>
								<!--Labels are not rendered in Dashboard Editor-->
									<xsl:if test="not(@showlabel) or @showlabel='true'">
										<td style="vertical-align: top;height: 100%" class="label">
											<xsl:attribute name="title">
												<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
											</xsl:attribute>
											<xsl:choose>
												<xsl:when test="$isPreviewMode"/>
												<xsl:when test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
													<xsl:attribute name="class">label ms-crm-Field-Required</xsl:attribute>
												</xsl:when>
												<xsl:when test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
													<xsl:attribute name="class">label ms-crm-Field-Recommended</xsl:attribute>
												</xsl:when>
											</xsl:choose>
											<xsl:choose>
												<xsl:when test="$cellLabelAlignmentCenter">
													<xsl:attribute name="style">text-align: center;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
												</xsl:when>
												<xsl:when test="$cellLabelAlignmentLeft">
													<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
												</xsl:when>
												<xsl:when test="$cellLabelAlignmentRight">
													<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
												</xsl:when>
												<xsl:otherwise>
													<xsl:choose>
														<xsl:when test="$RTL='true'">
															<xsl:attribute name="style">text-align: right;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
														</xsl:when>
														<xsl:otherwise>
															<xsl:attribute name="style">text-align: left;text-overflow:ellipsis;overflow:hidden</xsl:attribute>
														</xsl:otherwise>
													</xsl:choose>
												</xsl:otherwise>
											</xsl:choose>
											<xsl:if test="$isLocked or $isScriptRequired">
												<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='lockedField']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
											<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
											<xsl:if test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
												<img src="/_imgs/frm_required.gif" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='businessRequired']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
											<xsl:if test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
												<img src="/_imgs/frm_recommended.gif" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='businessRecommended']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
											<xsl:if test="$isSecured">
												<img src="/_imgs/Permission_Key.png" >
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id='securedField']"/>
													</xsl:attribute>
												</img>
											</xsl:if>
										</td>
									</xsl:if>
								<td nowrap="" class="field">
									<xsl:choose>
										<xsl:when test="$isPreviewCell">
											<xsl:attribute name="class">previewField</xsl:attribute>
										</xsl:when>
										<xsl:otherwise>
											<xsl:attribute name="class">field</xsl:attribute>
													<xsl:attribute name="valign">top</xsl:attribute>
										</xsl:otherwise>
									</xsl:choose>
									<xsl:choose>
										<xsl:when test="$isPreviewMode"/>
										<xsl:when test="/entity/metadata/fields/field[@name = $fieldName and @requiredforplatform = 'true'] or /entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'required']">
											<xsl:attribute name="class">field reqField</xsl:attribute>
										</xsl:when>
										<xsl:when test="/entity/properties/fields/field[@name = $fieldName and @requiredlevel = 'recommended']">
											<xsl:attribute name="class">field recField</xsl:attribute>
										</xsl:when>
									</xsl:choose>
									<xsl:if test="@showlabel='false'">
										<xsl:attribute name="colspan">2</xsl:attribute>
									</xsl:if>
									<xsl:if test="control/@disabled = 'true'">
										<xsl:attribute name="class">rofield</xsl:attribute>
									</xsl:if>
									<xsl:if test="@showlabel='false' and $isLocked">
										<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id='lockedField']"/>
											</xsl:attribute>
										</img>
									</xsl:if>
									<xsl:if test="$isIframe">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isQuickFormCollection">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelQuickFormCollection">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelSubGrid">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isInteractionWall">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isWebResource">
										<xsl:value-of select="control/parameters/Url"/>
									</xsl:if>
									<xsl:if test="$isBingMap">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isHealthWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSocialInsight">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSubGrid">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isUnboundCustomControl">
										<xsl:value-of select="control/@id"/>
									</xsl:if>
									<xsl:if test="$isNotes">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isTimerControl">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isSearchWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isReferencePanelSearchWidget">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>
									<xsl:if test="$isACIControl">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>									
									<xsl:if test="$isRICards">
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
									</xsl:if>									
									<xsl:if test="$isUserSpacer">
										<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
										<xsl:value-of select="$spacerCaption"/>
									</xsl:if>
									<xsl:if test="$isSystemSpacer">
										<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
									</xsl:if >
									<xsl:if test="$fieldName">
										<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
									</xsl:if>
								</td>
							</xsl:otherwise>
						</xsl:choose>
					</tr>
					<!--//</xsl:if>-->
				</table>
			</xsl:if>
	</xsl:template>

	<xsl:template name="RenderDashboardEditorCellContent">
		<xsl:param name="fieldName"/>
		<xsl:param name="isIframe" />
		<xsl:param name="isWebResource"/>
		<xsl:param name="isUnboundCustomControl"/>
		<xsl:param name="isPowerBITile"/>
		<xsl:param name="isSocialInsight" />
		<xsl:param name="isOrgInsights" />
		<xsl:param name="isSubGrid"/>
		<xsl:param name="isUserSpacer"/>
		<xsl:param name="isSystemSpacer"/>
		<xsl:param name="isPreviewCell"/>
		<xsl:param name="isLocked"/>
		<xsl:param name="id"/>
		<xsl:param name="isNotes"/>
		<xsl:param name="rowspan"/>
		<xsl:param name="isACIControl"/>
		<xsl:param name="isRICards"/>
		<xsl:variable name="rowheight">25</xsl:variable>
		<xsl:variable name="cellpadding">4</xsl:variable>
		<xsl:variable name="desiredcontainerheight">
			<xsl:value-of select="($rowspan*$rowheight)+($rowspan*$cellpadding)-$cellpadding"/> <!-- the height of the container will be equal to the rowspan*height of each row + the padding occupied by each row-->
		</xsl:variable>
		<xsl:if test="$isCustomizable='true'">
			<xsl:attribute name="onfocus">SetFocusedElementActive(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="hidefocus">true</xsl:attribute>
			<xsl:attribute name="onclick">Mscrm.DashboardEditorUtils.setActiveObjectForCell(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="onmousedown">Mscrm.DashboardEditorUtils.setActiveObjectForCell(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>
			<xsl:attribute name="ondblclick">Mscrm.DashboardEditorUtils.viewPropertiesNowForCell(Mscrm.Utilities.eventToDomEvent(event), this);</xsl:attribute>

			<xsl:choose>
				<xsl:when test="$isSystemSpacer or $isUserSpacer">
					<xsl:attribute name="tabIndex">-1</xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:attribute name="tabIndex">10</xsl:attribute>
					<xsl:attribute name="resizechild">
						<xsl:text>true</xsl:text>
					</xsl:attribute>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
		<xsl:if test="$fieldName">
			<div>
				<xsl:attribute name="style">position:relative; height:<xsl:value-of select="$desiredcontainerheight"/>px</xsl:attribute>
				<table cellspacing="0" cellpadding="0" class="cell">
					<xsl:if test="$isSystemSpacer">
						<xsl:attribute name="style">TABLE-LAYOUT: fixed; HEIGHT: 15px</xsl:attribute>
					</xsl:if>
					<xsl:if test="not($isSystemSpacer)">
						<xsl:attribute name="style">
							table-layout: fixed; height:<xsl:value-of select="$desiredcontainerheight"/>px
						</xsl:attribute>
					</xsl:if>
					<col/>
					<xsl:variable name="chartGridMode">
						<xsl:value-of select="$isSubGrid/parameters/ChartGridMode"/>
					</xsl:variable>
					<!--Component Headers/Selectors-->
					<xsl:choose>
						<!--Headers/Selectors for Charts and Grids-->
						<xsl:when test="$isSubGrid">
							<xsl:choose>
								<xsl:when test="$chartGridMode='Chart'">
									<xsl:if test="$isSubGrid/parameters/EnableViewPicker and $isSubGrid/parameters/EnableViewPicker='true'">
										<xsl:call-template name="ComponentHeader">
											<xsl:with-param name="Label" select="//resources/resource[@id = 'ViewSelectorLabel']"/>
											<xsl:with-param name="Selector" select="'true'" />
										</xsl:call-template>
									</xsl:if>
									<xsl:variable name="headerLabel">
										<xsl:choose>
											<xsl:when test="$isSubGrid/parameters/EnableChartPicker and $isSubGrid/parameters/EnableChartPicker='true'">
												<xsl:value-of select="//resources/resource[@id = 'ChartSelectorLabel']"/>
											</xsl:when>
											<xsl:otherwise>
												<xsl:value-of select="//resources/resource[@id = 'ChartLabel']"/>
											</xsl:otherwise>
										</xsl:choose>
									</xsl:variable>
									<xsl:call-template name="ComponentHeader">
										<xsl:with-param name="Label" select="$headerLabel"/>
										<xsl:with-param name="Selector" select="$isSubGrid/parameters/EnableChartPicker and $isSubGrid/parameters/EnableChartPicker='true'" />
									</xsl:call-template>
								</xsl:when>
								<xsl:otherwise>
									<xsl:variable name="headerFormat">
										<xsl:choose>
											<xsl:when test="$isSubGrid/parameters/EnableViewPicker and $isSubGrid/parameters/EnableViewPicker='true'">
												<xsl:value-of select="//resources/resource[@id = 'ViewSelectorLabelForList']"/>
											</xsl:when>
											<xsl:otherwise>
												<xsl:value-of select="//resources/resource[@id = 'ListLabel']"/>
											</xsl:otherwise>
										</xsl:choose>
									</xsl:variable>
									<xsl:variable name="headerLabel">
										<xsl:if test="$isSubGrid/parameters/TargetEntityType != $officeGraphDocument and $isSubGrid/parameters/GridUIMode != $card">
											<xsl:value-of select="substring-before($headerFormat,'{0}')"/>
										</xsl:if>
										<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
										<xsl:value-of select="substring-after($headerFormat,'{0}')"/>
									</xsl:variable>
									<xsl:call-template name="ComponentHeader">
										<xsl:with-param name="Label" select="$headerLabel"/>
										<xsl:with-param name="Selector" select="$isSubGrid/parameters/EnableViewPicker and $isSubGrid/parameters/EnableViewPicker='true'" />
									</xsl:call-template>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<!-- Header of Relationship Assistant -->
						<xsl:when test="$isRICards">
							<xsl:variable name="headerLabel">
								<xsl:value-of select="labels/label[@languagecode = $languageCode]/@description"/>
							</xsl:variable>
							<xsl:call-template name="ComponentHeader">
								<xsl:with-param name="Label" select="$headerLabel"/>
							</xsl:call-template>
						</xsl:when>
						<!--Headers for Iframes, WebResources, Social Insights and PowerBI tiles. -->
						<xsl:when test="$isIframe or $isWebResource or $isSocialInsight or $isPowerBITile or $isNotes">
							<xsl:variable name="headerFormat">
								<xsl:choose>
									<xsl:when test="$isIframe">
										<xsl:value-of select="//resources/resource[@id = 'IframeLabel']"/>
									</xsl:when>
									<xsl:when test="$isWebResource">
										<xsl:value-of select="//resources/resource[@id = 'WebResourceLabel']"/>
									</xsl:when>
									<xsl:when test="$isSocialInsight">
										<xsl:value-of select="//resources/resource[@id = 'SocialInsightLabel']"/>
									</xsl:when>
									<xsl:when test="$isPowerBITile">
										<xsl:value-of select="//resources/resource[@id = 'PowerBITileLabel']"/>
									</xsl:when>
									<xsl:when test="$isACIControl">
										<xsl:value-of select="//resources/resource[@id = 'IframeLabel']"/>
									</xsl:when>
									<xsl:when test="$isNotes">
										<xsl:value-of select="//resources/resource[@id = 'TimelineLabel']"/>
									</xsl:when>
									<xsl:otherwise>
										<!-- Don't know what this is. Just format the header suffix. -->
										<xsl:text>{0}</xsl:text>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:variable>
							<xsl:variable name="headerSuffix" select="labels/label[@languagecode = $languageCode]/@description"/>
							<xsl:variable name="headerLabel">
								<xsl:value-of select="substring-before($headerFormat,'{0}')"/>
								<xsl:value-of select="$headerSuffix"/>
								<xsl:value-of select="substring-after($headerFormat,'{0}')"/>
							</xsl:variable>
							<xsl:call-template name="ComponentHeader">
								<xsl:with-param name="Label" select="$headerLabel"/>
							</xsl:call-template>
						</xsl:when>
					</xsl:choose>

					<!--//<xsl:if test="not(@isSpacer)">-->
					
					<tr>
						<xsl:variable name="toprowheight">24</xsl:variable> <!-- there is currently only one row that we are concerened here. Chart only can have multiple row-->
						<!--Get the no of selector in the cell. Only chart with a view picker has 2 cell-->
						<xsl:variable name="selectorcount">
							<xsl:choose>
								<xsl:when test="$chartGridMode='Chart' and $isSubGrid/parameters/EnableViewPicker and $isSubGrid/parameters/EnableViewPicker='true'">2</xsl:when>
								<xsl:otherwise>1</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>
						<!--IE7 document mode doesn't honour the table cell height and occupy the fifty percent of the height if the other row also doesn't has a height
						We therefore need to give height to the other cell as well-->
						<xsl:variable name="previewcellheight">
							<xsl:value-of select="(($desiredcontainerheight)-($selectorcount*$toprowheight)-2)"/><!-- 2 is for border -->
							</xsl:variable>
						<xsl:attribute name="style">height:<xsl:value-of select="$previewcellheight"></xsl:value-of>px</xsl:attribute>
						<td nowrap="" class="dashboardfield">
							<xsl:choose>
								<xsl:when test="$isPreviewCell">
									<xsl:attribute name="class">previewField</xsl:attribute>
								</xsl:when>
								<xsl:when test="$isRICards">
									<xsl:attribute name="style">vertical-align:middle; text-align:center; border:#6699cc 1px solid;</xsl:attribute>
								</xsl:when>
								<xsl:when test="$isSubGrid">
									<xsl:attribute name="style">vertical-align:top; text-align:center; border:#6699cc 1px solid;</xsl:attribute>
								</xsl:when>
								<xsl:otherwise>
									<xsl:attribute name="style">vertical-align:middle; text-align:center; border:#6699cc 1px solid;</xsl:attribute>
								</xsl:otherwise>
							</xsl:choose>
							<!--Chart/Grid Preview in Dashboard Editor-->
							<xsl:if test="$isSubGrid">
								<xsl:variable name="isUserChart">
									<xsl:choose>
										<xsl:when test="$isSubGrid/parameters/IsUserChart">
											<xsl:value-of select="$isSubGrid/parameters/IsUserChart"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:text>false</xsl:text>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:variable>
								<xsl:variable name="isUserView">
									<xsl:choose>
										<xsl:when test="$isSubGrid/parameters/IsUserView">
											<xsl:value-of select="$isSubGrid/parameters/IsUserView"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:text>false</xsl:text>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:variable>
								<xsl:choose>
									<!--Chart Preview-->
									<xsl:when test="$chartGridMode='Chart'">
										<xsl:variable name="refreshPreviewFunctionName">Mscrm.DashboardEditorUtils.refreshPreviewAsync</xsl:variable>
										<xsl:variable name="previewFrameId">previewFrame_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="loadingDivId">previewLoadingDiv_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="vizForm">vizForm</xsl:variable>
										<xsl:variable name="vizFormId">vizForm_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="vizXml">vizXml</xsl:variable>
										<xsl:variable name="vizXmlId">vizXml_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:element name="div">
											<xsl:attribute name="id">
												<xsl:value-of select="$loadingDivId"/>
											</xsl:attribute>
											<xsl:attribute name="style">position:absolute;left:49%;bottom:49%</xsl:attribute>
											<xsl:element name="img">
												<xsl:attribute name="alt"/>
												<xsl:attribute name="src">/_imgs/AdvFind/progress.gif</xsl:attribute>
											</xsl:element>
											<xsl:element name="br"/>
										</xsl:element>
										<xsl:element name="form">
											<xsl:attribute name="name">
												<xsl:value-of select="$vizForm"/>
											</xsl:attribute>
											<xsl:attribute name="id">
												<xsl:value-of select="$vizFormId"/>
											</xsl:attribute>
											<xsl:attribute name="method">post</xsl:attribute>
											<xsl:attribute name="target">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="action"/>
											<xsl:element name="input">
												<xsl:attribute name="name">
													<xsl:value-of select="$vizXml"/>
												</xsl:attribute>
												<xsl:attribute name="id">
													<xsl:value-of select="$vizXmlId"/>
												</xsl:attribute>
												<xsl:attribute name="type">hidden</xsl:attribute>
												<xsl:attribute name="value" />
											</xsl:element>
										</xsl:element>
										<xsl:element name="iframe">
											<xsl:attribute name="name">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="id">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="scrolling">no</xsl:attribute>
											<!--The iframe inside the chart also doesn't occupy the complete height. In case the cell is a chart. Adjust its iframe height-->
											<xsl:attribute name="style"> width: 100%; border-width:0px;height:<xsl:value-of select="$previewcellheight" />px</xsl:attribute>
											<!-- Do not set the src as that updates the history in IE. <xsl:attribute name="src">/_static/blank.htm</xsl:attribute>-->
											<xsl:attribute name="frameborder">0</xsl:attribute>
											<xsl:attribute name="tabIndex">-1</xsl:attribute>
											<xsl:attribute name="chartIframe">true</xsl:attribute>
											<xsl:attribute name="onload">
												<xsl:value-of select="$refreshPreviewFunctionName"/>(
												'<xsl:value-of select="$isSubGrid/parameters/VisualizationId"/>',
												'<xsl:value-of select="$isUserChart"/>',
												'<xsl:value-of select="$isSubGrid/parameters/ViewId"/>',
												'<xsl:value-of select="$isUserView"/>',
												'<xsl:value-of select="$formAccessType"/>',
												'<xsl:value-of select="$fieldName"/>',
												'<xsl:value-of select="$isSubGrid/parameters/ChartType"/>')
											</xsl:attribute>
											<xsl:text>&amp;nbsp;</xsl:text>
										</xsl:element>
									</xsl:when>
									<!--Grid Preview-->
									<xsl:otherwise>
										<xsl:if test="$isSubGrid/parameters/TargetEntityType != $officeGraphDocument">
											<xsl:call-template name="GridPreviewTable"/>
										</xsl:if>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:if>
							<xsl:if test="$isRICards">
								<xsl:element name="div">
									<xsl:attribute name="style">height:50px;width:98%</xsl:attribute>
									<xsl:attribute name="align">center</xsl:attribute>
									<xsl:element name="textarea">
										<xsl:attribute name="style">width:97%;height:100%;text-align:center;border-style:none;overflow:auto;outline:none</xsl:attribute>
										<xsl:value-of select="//resources/resource[@id='RACardsNoData']"/>
										<xsl:text> </xsl:text>
									</xsl:element>
								</xsl:element>
							</xsl:if>
							<!-- verify with Aditag if in ashboard this can be the case -->
							<xsl:if test="@showlabel='false' and $isLocked">
								<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
									<xsl:attribute name="alt">
										<xsl:value-of select="//resources/resource[@id='lockedField']"/>
									</xsl:attribute>
								</img>
							</xsl:if>
							

<!-- ends -->


								<xsl:if test="$isOrgInsights">
								<xsl:variable name="isUserChart">
									<xsl:choose>
										<xsl:when test="$isOrgInsights/parameters/IsUserChart">
											<xsl:value-of select="$isOrgInsights/parameters/IsUserChart"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:text>false</xsl:text>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:variable>							
										<xsl:variable name="refreshOrgInsightsPreviewFunctionName">Mscrm.DashboardEditorUtils.refreshOrgInsightsPreviewAsync</xsl:variable>
										<xsl:variable name="previewFrameId">previewFrame_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="loadingDivId">previewLoadingDiv_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="vizForm">vizForm</xsl:variable>
										<xsl:variable name="vizFormId">vizForm_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:variable name="vizXml">vizXml</xsl:variable>
										<xsl:variable name="vizXmlId">vizXml_<xsl:value-of select="$fieldName"/></xsl:variable>
										<xsl:element name="div">
											<xsl:attribute name="id">
												<xsl:value-of select="$loadingDivId"/>
											</xsl:attribute>
											<xsl:attribute name="style">position:absolute;left:49%;bottom:49%</xsl:attribute>
											<xsl:element name="img">
												<xsl:attribute name="alt"/>
												<xsl:attribute name="src">/_imgs/AdvFind/progress.gif</xsl:attribute>
											</xsl:element>
											<xsl:element name="br"/>
										</xsl:element>
										<xsl:element name="form">
											<xsl:attribute name="name">
												<xsl:value-of select="$vizForm"/>
											</xsl:attribute>
											<xsl:attribute name="id">
												<xsl:value-of select="$vizFormId"/>
											</xsl:attribute>
											<xsl:attribute name="method">post</xsl:attribute>
											<xsl:attribute name="target">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="action"/>
											<xsl:element name="input">
												<xsl:attribute name="name">
													<xsl:value-of select="$vizXml"/>
												</xsl:attribute>
												<xsl:attribute name="id">
													<xsl:value-of select="$vizXmlId"/>
												</xsl:attribute>
												<xsl:attribute name="type">hidden</xsl:attribute>
												<xsl:attribute name="value" />
											</xsl:element>
										</xsl:element>
										<xsl:element name="iframe">
											<xsl:attribute name="name">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="id">
												<xsl:value-of select="$previewFrameId"/>
											</xsl:attribute>
											<xsl:attribute name="scrolling">no</xsl:attribute>
											<!--The iframe inside the chart also doesn't occupy the complete height. In case the cell is a chart. Adjust its iframe height-->
											<xsl:attribute name="style"> width: 100%; border-width:0px;height:<xsl:value-of select="$previewcellheight" />px</xsl:attribute>
											<!-- Do not set the src as that updates the history in IE. <xsl:attribute name="src">/_static/blank.htm</xsl:attribute>-->
											<xsl:attribute name="frameborder">0</xsl:attribute>
											<xsl:attribute name="tabIndex">-1</xsl:attribute>
											<xsl:attribute name="chartIframe">true</xsl:attribute>
											<xsl:attribute name="onload">
												<xsl:value-of select="$refreshOrgInsightsPreviewFunctionName"/>(
												'<xsl:value-of select="$isOrgInsights/parameters/VisualizationId"/>',
												'<xsl:value-of select="$isUserChart"/>',
												'<xsl:value-of select="$fieldName"/>')
											</xsl:attribute>
											<xsl:text>&amp;nbsp;</xsl:text>
										</xsl:element>
															</xsl:if>
							<!-- verify with Aditag if in ashboard this can be the case -->
							<xsl:if test="@showlabel='false' and $isLocked">
								<img class="imgLock" src="/_imgs/tools/ico_lock.gif" >
									<xsl:attribute name="alt">
										<xsl:value-of select="//resources/resource[@id='lockedField']"/>
									</xsl:attribute>
								</img>
							</xsl:if>
							<!-- ends -->


							<xsl:if test="$isIframe">
								<xsl:value-of select="control/parameters/Url"/>
							</xsl:if>
							<xsl:if test="$isWebResource">
								<xsl:value-of select="control/parameters/Url"/>
							</xsl:if>
							<xsl:if test="$isSubGrid/parameters/TargetEntityType = $officeGraphDocument and $isSubGrid/parameters/GridUIMode = $card">
								<xsl:attribute name="style">width:100%;text-align:center;height:<xsl:value-of select="$previewcellheight" />px;margin-top:1px;</xsl:attribute>
								<xsl:value-of select="//resources/resource[@id = 'DelvePlaceholder']" />
							</xsl:if>
							<xsl:if test="$isPowerBITile">
								<xsl:variable name="previewFrameId">powerBITilePreviewFrame_<xsl:value-of select="$fieldName" /></xsl:variable>
								<xsl:element name="iframe">
									<xsl:variable name="refreshPowerBITilePreviewFunctionName">Mscrm.DashboardEditorUtils.refreshPowerBITilePreviewAsync</xsl:variable>
									<xsl:variable name="formId">Mscrm.FormEditorVariables.formId</xsl:variable>
									<xsl:attribute name="id">
										<xsl:value-of select="$previewFrameId" />
									</xsl:attribute>
									<xsl:attribute name="class">powerBITilePreviewFrame</xsl:attribute>
									<xsl:attribute name="frameborder">0</xsl:attribute>
									<xsl:attribute name="scrolling">no</xsl:attribute>
									<xsl:attribute name="tabIndex">-1</xsl:attribute>
									<xsl:attribute name="style">width:100%;height:<xsl:value-of select="$previewcellheight" />px;margin-top:1px;</xsl:attribute>
									<xsl:attribute name="onload">
												<xsl:value-of select="$refreshPowerBITilePreviewFunctionName"/>(
												'<xsl:value-of select="$isPowerBITile/parameters/TileUrl"/>',
												'<xsl:value-of select="$fieldName"/>');
									</xsl:attribute>
									<xsl:text>&amp;nbsp;</xsl:text>
								</xsl:element>
							</xsl:if>
							<xsl:if test="$isSocialInsight">
								<xsl:variable name="previewFrameId">
									socialInsightsPreviewFrame_<xsl:value-of select="$fieldName" />
								</xsl:variable>
								<xsl:variable name="previewOverlayId">
									socialInsightsPreviewOverlay_<xsl:value-of select="$fieldName" />
								</xsl:variable>
								<xsl:variable name="errorMessageContainerId">
									socialInsightsPreviewErrorMessage_<xsl:value-of select="$fieldName" />
								</xsl:variable>
								<xsl:element name="iframe">
									<xsl:variable name="refreshSocialInsightsPreviewFunctionName">Mscrm.DashboardEditorUtils.refreshSocialInsightsPreviewAsync</xsl:variable>
									<xsl:variable name="formId">Mscrm.FormEditorVariables.formId</xsl:variable>
									<xsl:attribute name="id">
										<xsl:value-of select="$previewFrameId" />
									</xsl:attribute>
									<xsl:attribute name="class">socialInsightsPreviewFrame</xsl:attribute>
									<xsl:attribute name="frameborder">0</xsl:attribute>
									<xsl:attribute name="scrolling">no</xsl:attribute>
									<xsl:attribute name="tabIndex">-1</xsl:attribute>
									<xsl:attribute name="style">
										width:100%;height:<xsl:value-of select="$previewcellheight" />px;margin-top:1px;
									</xsl:attribute>
									<xsl:attribute name="onload">
										<xsl:value-of select="$refreshSocialInsightsPreviewFunctionName"/>(
										<xsl:value-of select="$formAccessType"/>,
										<xsl:value-of select="$formId"/>,
										'<xsl:value-of select="$fieldName"/>');
									</xsl:attribute>
									<xsl:text>&amp;nbsp;</xsl:text>
								</xsl:element>
								<xsl:element name="div">
									<xsl:attribute name="id">
										<xsl:value-of select="$previewOverlayId" />
									</xsl:attribute>
									<xsl:attribute name="style">position:absolute;left:0;top:0;width:100%;height:100%;background-color:transparent;color:transparent;</xsl:attribute>
									<xsl:text>&amp;nbsp;</xsl:text>
								</xsl:element>
								<xsl:element name="div">
									<xsl:attribute name="id">
										<xsl:value-of select="$errorMessageContainerId" />
									</xsl:attribute>
									<xsl:attribute name="style">display:none;white-space:normal;</xsl:attribute>
									<xsl:text>TODO andshe: error handling</xsl:text>
								</xsl:element>
							</xsl:if>
							<!-- verify with Aditag if in ashboard this can be the case -->
							<xsl:if test="$isUserSpacer">
								<xsl:attribute name="style">background-color:Gray;</xsl:attribute>
								<xsl:value-of select="$spacerCaption"/>
							</xsl:if>
							<xsl:if test="$isSystemSpacer">
								<xsl:attribute name="style">background-color:Transparent;</xsl:attribute>
							</xsl:if >
							<xsl:if test="$fieldName">
								<xsl:value-of select="/entity/properties/fields/field[@name = $fieldName]/displaynames/displayname[@languagecode = $languageCode]/@description"/>
							</xsl:if>
							<!-- ends-->
							<xsl:if test="$isPreviewCell">
								<xsl:attribute name="style">text-align:center;</xsl:attribute>
								<xsl:if test="$supportInteractionCentric='false'">
									<a id="chartLink" class="PlaceholderAnchor" role="button" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addSubgridFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/dashboard/chart.png</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'ChartAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'ChartAlt']"/>
												</xsl:attribute>
											</xsl:element>
										</a>
									<a id="gridLink" class="PlaceholderAnchor" role="button" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addSubgridFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), false, true);" href="javascript:;" type="placeholder">
										<xsl:element name="img">
											<xsl:attribute name="src">
												<xsl:text>/_imgs/dashboard/grid.png</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id = 'GridAlt']"/>
											</xsl:attribute>
											<xsl:attribute name="class">
												<xsl:text>PlaceholderImg</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id = 'GridAlt']"/>
											</xsl:attribute>
										</xsl:element>
									</a>
									<xsl:if test="$isRiCardsCell='true'">
										<a id="riCardLink" class="PlaceholderAnchorForRACards" role="button" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addRiCardsFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/ribbon/RelationshipAssistant.svg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'RACardsAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'RACardsAlt']"/>
												</xsl:attribute>
											</xsl:element>
										</a>
									</xsl:if>
									<br/>
									<a id="IframeLink" class="PlaceholderAnchor" role="button" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addIframeFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), false, true);" href="javascript:;" type="placeholder">
										<xsl:element name="img">
											<xsl:attribute name="src">
												<xsl:text>/_imgs/dashboard/iframe.gif</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id = 'IframeAlt']"/>
											</xsl:attribute>
											<xsl:attribute name="class">
												<xsl:text>PlaceholderImg</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id = 'IframeAlt']"/>
											</xsl:attribute>
										</xsl:element>
									</a>
									<a id="WebResourceLink" class="PlaceholderAnchor" role="button" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent()" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addIframeFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
										<xsl:element name="img">
											<xsl:attribute name="src">
												<xsl:text>/_imgs/dashboard/webresource.gif</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id = 'WebResAlt']"/>
											</xsl:attribute>
											<xsl:attribute name="class">
												<xsl:text>PlaceholderImg</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id = 'WebResAlt']"/>
											</xsl:attribute>
										</xsl:element>
									</a>
								</xsl:if>
								<xsl:if test="$supportInteractionCentric='true'">
									<!-- Charts -->
									<xsl:if test="@ischartcell='true'">
										<a id="chartLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addSubgridFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/dashboard/chart.png</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'ChartAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'ChartAlt']"/>
												</xsl:attribute>
											</xsl:element>
										</a>
									</xsl:if>
									<!-- Tiles -->
									<xsl:if test="@istilecell='true'">
										<a id="TilesLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent()" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addTilesFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
												<xsl:element name="img">
													<xsl:attribute name="src">
														<xsl:text>/_imgs/dashboard/tiles.gif</xsl:text>
													</xsl:attribute>
													<xsl:attribute name="alt">
														<xsl:value-of select="//resources/resource[@id = 'TilesAlt']"/>
													</xsl:attribute>
													<xsl:attribute name="class">
														<xsl:text>PlaceholderImg</xsl:text>
													</xsl:attribute>
													<xsl:attribute name="title">
														<xsl:value-of select="//resources/resource[@id = 'TilesAlt']"/>
													</xsl:attribute>
												</xsl:element>
										</a>
									</xsl:if>
									<!-- Streams -->
									<xsl:if test="@isstreamcell='true'">
										<a id="QueuesLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent()" tabIndex="10" ondblclick="Mscrm.PreviewCellUtils.stopPropagationFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event));" onclick="Mscrm.PreviewCellUtils.addQueuesFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/dashboard/queue.gif</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'QueuesAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'QueuesAlt']"/>
												</xsl:attribute>
											</xsl:element>
										</a>
									</xsl:if>
								</xsl:if>
								<xsl:if test="$supportSocialInsights='true'">
									<a id="SocialInsightLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addSocialInsightFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/dashboard/MS_Social_Listening_Icon_Hover_16.png</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'SocialInsightAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'SocialInsightAlt']"/>
												</xsl:attribute>
											</xsl:element>
									</a>
								</xsl:if>
								<xsl:if test="$supportPowerBITile='true'">
									<a id="PowerBITileLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addPowerBITileFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true);" href="javascript:;" type="placeholder">
										<xsl:element name="img">
											<xsl:attribute name="src">
												<xsl:text>/_imgs/dashboard/PowerBITile.png</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id = 'PowerBITileAlt']"/>
											</xsl:attribute>
											<xsl:attribute name="class">
												<xsl:text>PlaceholderImg</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id = 'PowerBITileAlt']"/>
											</xsl:attribute>
										</xsl:element>
									</a>
								</xsl:if>
								<xsl:if test="$supportOrgInsights='true'">
                  <a id="OrgInsightsLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addOrgInsightsFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true);" href="javascript:;" type="placeholder">
											<xsl:element name="img">
												<xsl:attribute name="src">
													<xsl:text>/_imgs/dashboard/MS_OrgInsights_Icon_Hover_16.png</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="alt">
													<xsl:value-of select="//resources/resource[@id = 'OrgInsightsAlt']"/>
												</xsl:attribute>
												<xsl:attribute name="class">
													<xsl:text>PlaceholderImg</xsl:text>
												</xsl:attribute>
												<xsl:attribute name="title">
													<xsl:value-of select="//resources/resource[@id = 'OrgInsightsAlt']"/>
												</xsl:attribute>
											</xsl:element>
								  </a>
                </xsl:if>
								<xsl:if test="$supportDelve='true'">
									<a id="DelveLink" class="PlaceholderAnchor" onmouseover="Mscrm.PreviewCellUtils.onHover(this)" onmousedown="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" onmouseout="Mscrm.PreviewCellUtils.offHover(this)" onmousemove="Mscrm.PreviewCellUtils.cancelEvent(Mscrm.Utilities.eventToDomEvent(event))" tabIndex="10" onclick="Mscrm.PreviewCellUtils.addDelveFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true);" href="javascript:;" type="placeholder">
										<xsl:element name="img">
											<xsl:attribute name="src">
												<xsl:text>/_imgs/dashboard/delve.png</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="alt">
												<xsl:value-of select="//resources/resource[@id = 'DelveAlt']"/>
											</xsl:attribute>
											<xsl:attribute name="class">
												<xsl:text>PlaceholderImg</xsl:text>
											</xsl:attribute>
											<xsl:attribute name="title">
												<xsl:value-of select="//resources/resource[@id = 'DelveAlt']"/>
											</xsl:attribute>
										</xsl:element>
									</a>
								</xsl:if>
							</xsl:if>
						</td>
					</tr>
					<!--//</xsl:if>-->
				</table>
			</div>
		</xsl:if>
	</xsl:template>


	<xsl:template name="GridPreviewTable" match="gridPreview">
		<table class="GridPreviewTable" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
			<!-- Grid header row -->
			<tr class="ms-crm-List-Header">
				<td style="width:42px; text-align: center">
					<input type="checkbox" onclick="return false;" tabIndex="-1" >
						<xsl:attribute name="aria-label">
							<xsl:value-of select="//resources/resource[@id='GridPreviewHeaderCheckbox']"/>
						</xsl:attribute>
					</input>
				</td>
				<td class="ms-crm-List-Spacer">
					<img alt="" src="/_imgs/grid/bar_line.gif"></img>
				</td>
				<xsl:call-template name="GridPreviewHeaderCell"></xsl:call-template>
				<xsl:call-template name="GridPreviewHeaderCell"></xsl:call-template>
				<xsl:call-template name="GridPreviewHeaderCell"></xsl:call-template>
				<td style="width:18px">
					<img alt="" src="/_imgs/grid/grid_Refresh.gif"></img>
				</td>
			</tr>
			<!--Selected row-->
			<tr class="ms-crm-List-SelectedRow">
				<td class="ms-crm-List-DataCell" style="width: 42px; text-align:center" >
					<!--img class="GridPreviewImg" alt="" src="/_imgs/ico_16_1.gif"></img-->
				</td>
				<td class="ms-crm-List-DataCell" colspan="8">
					<!--xsl:value-of select="//resources/resource[@id = 'GridPreviewColumnHeader']"/-->
				</td>
			</tr>
			<xsl:call-template name="GridPreviewRow"></xsl:call-template>
			<xsl:call-template name="GridPreviewRow"></xsl:call-template>
			<tr>
				<td colspan="9">
					<br />
				</td>
			</tr>
		</table>
		<!-- Grid footer -->
		<div style="position:absolute;bottom:1px;height:21px; background-color: #f0f0f0;left:1px;right:1px">
		</div>
	</xsl:template>

	<xsl:template name="GridPreviewHeaderCell">
		<td class="GridPreviewHeaderTD">
			<xsl:value-of select="//resources/resource[@id = 'GridPreviewColumnHeader']"/>
		</td>
		<td class="ms-crm-List-Spacer">
			<img alt="" src="/_imgs/grid/bar_line.gif"></img>
		</td>
	</xsl:template>

	<xsl:template name="GridPreviewRow">
		<!-- Grid row-->
		<tr class="ms-crm-List-Row">
			<td class="ms-crm-List-DataCell" style="width: 42px; text-align:center;" >
				<!--img class="GridPreviewImg" alt="" src="/_imgs/ico_16_1.gif"></img-->
			</td>
			<td class="ms-crm-List-DataCell" colspan="8">
				<!--xsl:value-of select="//resources/resource[@id = 'GridPreviewColumnHeader']"/-->
			</td>
		</tr>
	</xsl:template>

	<xsl:template name="ComponentHeader">
		<xsl:param name="Label" />
		<xsl:param name="Selector" select="'false'" />
		<tr class="ms-crm-DE-PreviewSelector">
			<td class="ms-crm-DE-PreviewSelector">
				<span style="white-space:nowrap;display:block;overflow:hidden">
					<span class="ms-crm-View-Entity-Name" style="vertical-align:top" title="">
						<xsl:value-of select="$Label"/>
					</span>
					<xsl:if test="$Selector = 'true'">
						<span>
							<img alt="" src="/_imgs/grid/Dropdown_Arrow.png"/>
						</span>
					</xsl:if>
				</span>
			</td>
		</tr>
	</xsl:template>

	<xsl:template match="resources" name="RenderResources" />

</xsl:stylesheet>
