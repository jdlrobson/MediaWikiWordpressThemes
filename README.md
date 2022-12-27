# MediaWikiWordpressThemes

This is a collection of Wordpress themes ported to MediaWiki using an experimental script. Wordpress themes are optimized for readers, and will make your
MediaWiki look very different from typical MediaWikis.

If you'd like a theme ported from Wordpress to MediaWiki please open an issue and I'll look into it. The script to do the conversion will be made public
once it is more stable.

Skins are built using the Wordpress Theme to MediaWiki skin conversion tool:
https://github.com/jdlrobson/wordpress-theme-to-mediawiki-skin

All skins make use of JS polyfills to provide last modified timestamp and history URL:
- last modified timestamp {{meta.last-modified-timestamp}}
- history link {{meta.history-url}}
- #t-permalink replaced with permalink URL. meta.permalink-url

## Setup
git clone https://github.com/jdlrobson/MediaWikiWordpressThemes.git
ln -s MediaWikiWordpressThemes/* .

Edit LocalSettings.php
```
wfLoadSkin('Astra');
wfLoadSkin('Fairy');
wfLoadSkin('Hello-Elementor');
wfLoadSkin('Oceanwp');
wfLoadSkin('Neve');
wfLoadSkin('Kadence');
wfLoadSkin('Popularfx');
wfLoadSkin('Twentynineteen');
wfLoadSkin('Twentytwenty');
wfLoadSkin('Twentytwentyone');
```

## [Ported] Astra
https://wordpress.org/themes/astra/
https://mediawiki.org/wiki/Skin:Astra

## [Ported] Fairy
https://wordpress.org/themes/fairy
https://mediawiki.org/wiki/Skin:Fairy

## [Ported] Hello elementor
https://wordpress.org/themes/hello-elementor
https://mediawiki.org/wiki/Skin:Hello-Elementor

## [Ported] OceanWP
https://wordpress.org/themes/oceanwp/
https://mediawiki.org/wiki/Skin:Oceanwp

## [Ported] Neve
https://wordpress.org/themes/neve
https://mediawiki.org/wiki/Skin:Neve

## [Ported] Kadence
https://wordpress.org/themes/kadence
https://mediawiki.org/wiki/Skin:Kadence

## [Ported] PopularFx
https://wordpress.org/themes/popularfx
https://mediawiki.org/wiki/Skin:Popularfx

## [Ported] 2019
https://wordpress.org/themes/twentynineteen
https://mediawiki.org/wiki/Skin:Twentynineteen

## [Ported] 2020
https://wordpress.org/themes/twentytwenty
https://mediawiki.org/wiki/Skin:Twentytwenty

## [Ported] 2021
https://wordpress.org/themes/twentytwentyone
https://mediawiki.org/wiki/Skin:Twentytwentyone
