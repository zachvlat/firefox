// Firefox User Preferences - Categorized for Better Organization

// ===============================
// 🔒 Privacy & Security Settings
// ===============================
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("network.IDN_show_punycode", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("browser.contentblocking.category", "strict");
user_pref("security.insecure_password.ui.enabled", true);
user_pref("signon.rememberSignons", false);
user_pref("pref.privacy.disable_button.view_passwords_exceptions", false);
user_pref("security.ask_for_password", 0);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// ===================================
// 🚫 Telemetry & Data Collection Disabled
// ===================================
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// ===============================
// 🌐 Network & Connection Tweaks
// ===============================
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.trr.mode", 0);

// ===================================
// 🎨 UI & Experience Customizations
// ===================================
user_pref("browser.compactmode.show", true);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("general.autoScroll", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("widget.non-native-theme.scrollbar.style", 5);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.toolbars.bookmarks.visibility", "always");

// ===============================
// 🎬 Media & Content Preferences
// ===============================
user_pref("media.eme.enabled", true);
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);

// ===============================
// 🐧 Linux-Specific Preferences
// ===============================
user_pref("middlemouse.contentLoadURL", false);
user_pref("middlemouse.paste", false);

// ===============================
// 🚀 Performance Optimizations
// ===============================
user_pref("fission.autostart", true);

// ===============================
// 🛑 Extension & Add-on Preferences
// ===============================
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("feeds.topsites", false);
