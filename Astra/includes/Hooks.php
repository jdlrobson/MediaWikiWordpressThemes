<?php
namespace Astra;

class Hooks {
	/**
	* @see https://www.mediawiki.org/wiki/Manual:Hooks/OutputPageBodyAttributes
	*/
	public static function onOutputPageBodyAttributes( $out, $sk, &$bodyAttrs) {
		if ( $sk->getSkinName() === 'astra' ) {
			$bodyAttrs['class'] .= ' ast-desktop ast-separate-container ast-right-sidebar astra-3.6.8 ast-header-custom-item-inside ast-blog-single-style-1 ast-custom-post-type ast-single-post ast-inherit-site-logo-transparent ast-hfb-header';
		}
	}
}