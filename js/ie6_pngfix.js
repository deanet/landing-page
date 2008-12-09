/**
 * enable semi-transparent PNG graphics for IE6 and IE5.5
 *
 * @author: Andreas Demmer <mail@andreas-demmer.de>
 */

/*
 * document ready function
 */
pngfix = function() {
	if(!isIE){return}
	if(browserVersion >= 7) {return}
	var canBeFixed = (browserVersion >= 5.5);

	var BackgroundImage = $(this).css('background-image');

	if(BackgroundImage != 'none'){
		var isBackgroundImage = true;

		PngUrl = BackgroundImage.replace('url\(\'', '');
		PngUrl = PngUrl.replace('url\("', '');
		PngUrl = PngUrl.replace('\')', '');
		PngUrl = PngUrl.replace('")', '');
	}else{
		var isBackgroundImage = false;

		PngUrl = $(this).attr('src');
	}

	if(canBeFixed){
		$(this).css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+PngUrl+"', sizingMethod='crop')");

		if (!isBackgroundImage) {
			$(this).attr('src', "../images/frontpage/transparent.gif");
		} else {
			$(this).css('background-image', 'none');
		}
	}
}