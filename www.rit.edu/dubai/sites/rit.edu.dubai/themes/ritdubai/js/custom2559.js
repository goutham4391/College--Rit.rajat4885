window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		jQuery("#header").removeClass("navbar-fixed-top");
		jQuery("#header").addClass("navbar-fixed-top-0");
	} else {
		jQuery("#header").removeClass("navbar-fixed-top-0");
		jQuery("#header").addClass("navbar-fixed-top");
	}

}

jQuery(document).ready(function(){

	// START 18-12-2019
	jQuery('.node-type-degree-programs #sidemenuone-58 ul').html(jQuery('.node-type-degree-programs #sidemenuone-58 ul').find('div.accord').get().reverse());
	// END 18-12-2019
	// START 05-12-2019
	if(jQuery("#webform-client-form-239 #edit-submitted-your-nationality").length > 0){
		if(jQuery(".alert.error").length < 1){
			jQuery("#webform-client-form-239 #edit-submitted-your-nationality").prepend("<option value='' selected='selected'>Your Nationality*</option>");
		}
	}
	// END 05-12-2019
	// START 12-12-2019
	jQuery("a[href='https://www.youtube.com/channel/UCoZf7pq7JEJrD-clk5k5adw']").attr('href', 'https://www.youtube.com/channel/UCsxS1HKF34id5x66nBqMNOQ')
	jQuery("a[href='/snapchat']").attr('href', '/dubai/snapchat-0')
	// END 12-12-2019
    /* Start 12-02-2019 */
    jQuery('.page-node-201 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-200.left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-141 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-140 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-139 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-138 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .node-type-faculty-profiles .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65, .page-node-349 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-124,.page-node-408 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-68,.page-node-227 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65,.page-node-228 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65,.page-node-229 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65,.page-node-230 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65,.page-node-373 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-372 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-371 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-370 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-369 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-416 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-420 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-127,.page-node-231 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-69,.page-node-199 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-69,.page-node-136 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-69').addClass('in');
    jQuery('.page-node-201 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .page-node-200 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .page-node-141 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .page-node-140 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .page-node-139 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .page-node-138 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(2) li a, .node-type-faculty-profiles .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(1) li a,.page-node-408 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-68 .panel-body ul div:nth-child(4) li a,.page-node-227 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(3) li a,.page-node-228 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(3) li a,.page-node-229 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(3) li a,.page-node-230 .left-menu-page .left_bg #sidebarmenu-accordion .panel-default #sidemenuone-65 .panel-body ul div:nth-child(3) li a').addClass('active');
    /* End 12-02-2019 */

    jQuery("#quicktabs-tabpage-admissions-5 .view-home-admission .white-desc-box .description p a").click(function() {
		var str1 = jQuery(this).attr('href')
		if(str1.indexOf("%23") != -1){
		window.opener.location = jQuery(this).attr("href",str1.replace("%23", "#"));
		}
	});


  var curr_frm_id = jQuery('.webform-component--country-of-birth').closest("form").attr('id');
  if((curr_frm_id == "webform-client-form-148") || (curr_frm_id == "webform-client-form-149"))
  {
    jQuery('.webform-component--country-of-birth').find('option:first-child').text(jQuery('.webform-component--country-of-birth').find('label')[0].innerText);
    jQuery('.webform-component--country-of-citizenship').find('option:first-child').text(jQuery('.webform-component--country-of-citizenship').find('label')[0].innerText);
    jQuery('.webform-component--country-of-permanent-residence').find('option:first-child').text(jQuery('.webform-component--country-of-permanent-residence').find('label')[0].innerText);
  }
	/* jQuery('select.day option[value="31"]').remove(); Removed on 27-11-2019 Trello Task 15*/
	/*START 26-12-2019*/
	/*jQuery('.page-node-660 .webform-component--country-of-previous-nationality').find('option:first-child').text(jQuery('.page-node-660 .webform-component--country-of-previous-nationality').find('label')[0].innerText);
	jQuery('.page-node-660 .webform-component--country-of-present-nationality').find('option:first-child').text(jQuery('.page-node-660 .webform-component--country-of-present-nationality').find('label')[0].innerText);
	jQuery('.page-node-660 .webform-component--passport-issuing-government').find('option:first-child').text(jQuery('.page-node-660 .webform-component--passport-issuing-government').find('label')[0].innerText);
	jQuery('.page-node-660 .webform-component--passport-issuing-place').find('option:first-child').text(jQuery('.page-node-660 .webform-component--passport-issuing-place').find('label')[0].innerText);
	jQuery('.page-node-660 .webform-component--country').find('option:first-child').text(jQuery('.page-node-660 .webform-component--country').find('label')[0].innerText);*/

    //webform-client-form-660
    //console.log("Dom==>"+$("input[name=nameGoesHere]").val());

  if(jQuery('.webform-client-form-660 .webform-component--country-of-previous-nationality').length){
    jQuery('.webform-client-form-660 .webform-component--country-of-previous-nationality').find('option:first-child').text(jQuery('.webform-client-form-660 .webform-component--country-of-previous-nationality').find('label')[0].innerText);
  }
  if(jQuery('.webform-client-form-660 .webform-component--country-of-present-nationality').length){
    jQuery('.webform-client-form-660 .webform-component--country-of-present-nationality').find('option:first-child').text(jQuery('.webform-client-form-660 .webform-component--country-of-present-nationality').find('label')[0].innerText);
  }
   if(jQuery('.webform-client-form-660 .webform-component--passport-issuing-government').length){
    jQuery('.webform-client-form-660 .webform-component--passport-issuing-government').find('option:first-child').text(jQuery('.webform-client-form-660 .webform-component--passport-issuing-government').find('label')[0].innerText);
  }
   if(jQuery('.webform-client-form-660 .webform-component--passport-issuing-place').length){
    jQuery('.webform-client-form-660 .webform-component--passport-issuing-place').find('option:first-child').text(jQuery('.webform-client-form-660 .webform-component--passport-issuing-place').find('label')[0].innerText);
  }
   if(jQuery('.webform-client-form-660 .webform-component--country').length){
    jQuery('.webform-client-form-660 .webform-component--country').find('option:first-child').text(jQuery('.webform-client-form-660 .webform-component--country').find('label')[0].innerText);
  }


	/*END 26-12-2019*/

	var i=0;
	jQuery('.webform-component-date').each(function(){

		var labelText = jQuery(this).find('label')[0].innerText;
		var newLabel = labelText.split('*');
    var curr_form_id = jQuery(this).closest("form").attr('id');
    if((curr_form_id == "webform-client-form-148") || (curr_form_id == "webform-client-form-239") || (curr_form_id == "webform-client-form-328") || (curr_form_id == "webform-client-form-404"))/* (curr_form_id == "webform-client-form-147") ||  Removed on 30-12-2019 */
    {
		  jQuery('.webform-component-date label').show();
      newLabel = " ";
    }
    else{
        jQuery('.webform-component-date label').hide();
    }
    i++;
    jQuery(this).find('select').each(function(){
      jQuery(this).attr('date-fieldid','datefield-'+i);
      var firstChildText = '';
      var newText = '';
      firstChildText = jQuery(this).find('option:first-child').text();
      var req_attr = jQuery(this).attr('required');
      console.log("==>"+jQuery(this));
      newText = newLabel[0]+' '+firstChildText;
      if (typeof req_attr !== typeof undefined && req_attr !== false) {
			 newText = newLabel[0]+' '+firstChildText+'*';
      }

			jQuery(this).find('option:first-child').text(newText);
    });
	});

	jQuery('.webform-component--birthdate select.month > option:first-child').text('Birth Month*');
	jQuery('.webform-component--birthdate select.day > option:first-child').text('Birth Day*');
	jQuery('.webform-component--birthdate select.year > option:first-child').text('Birth Year*');
	jQuery('select.month').change(function(){
    var loopmonht = ['1','3','5','7','8','10','12'];
    var getmonthval = jQuery(this).attr('date-fieldid');
    var monthval = jQuery(this).val();
    jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="31"]').remove();
    // console.log(monthval);

    if(monthval==2){
    	jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="31"]').remove();
			jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="30"]').remove();
			jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="29"]').remove();
		} else {
			if(jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="29"]').size()==0) {
				jQuery('select.day[date-fieldid="'+getmonthval+'"]').append(jQuery("<option></option>")
	                    .attr("value",29)
	                    .text(29));
			}
			if(jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="30"]').size()==0) {
				jQuery('select.day[date-fieldid="'+getmonthval+'"]').append(jQuery("<option></option>")
	                    .attr("value",30)
	                    .text(30));
      }
      if(jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="31"]').size()==0) {
				jQuery('select.day[date-fieldid="'+getmonthval+'"]').append(jQuery("<option></option>")
	                        .attr("value",31)
	                        .text(31));
			}
		}

    if (jQuery.inArray(monthval, loopmonht)!=-1) {
    	if(jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="31"]').size()==0) {
				jQuery('select.day[date-fieldid="'+getmonthval+'"]').append(jQuery("<option></option>")
                        .attr("value",31)
                        .text(31));
			}
    } else {
      jQuery('select.day[date-fieldid="'+getmonthval+'"] option[value="31"]').remove();
    }
	});


	jQuery('#searchbar-icon').click(function(){
		jQuery('#searchbar-input').animate({width: 'toggle'});
		jQuery("#searchbar-icon").toggle();
		jQuery("#searchbar-cross").toggle(500);
		jQuery("#searchbar-input").focus();
	});

	jQuery('#searchbar-cross').click(function(){
		jQuery('#searchbar-input').animate({width: 'toggle'});
		jQuery("#searchbar-cross").toggle();
		jQuery("#searchbar-icon").toggle(500);
	});


	jQuery('#searchbar-icon-xs').click(function(){
		jQuery('#searchbar-input-xs').animate({width: 'toggle'});
		jQuery("#searchbar-icon-xs").toggle();
		jQuery("#searchbar-cross-xs").toggle(500);
		jQuery("#searchbar-input-xs").focus();
	});

	jQuery('#searchbar-cross-xs').click(function(){
		jQuery('#searchbar-input-xs').animate({width: 'toggle'});
		jQuery("#searchbar-cross-xs").toggle();
		jQuery("#searchbar-icon-xs").toggle(500);
	});

	jQuery(".view-media-center .views-row-first").addClass('active-media');
	jQuery(".view-media-center .views-row-first img").trigger('click');
	// remove dropdown from footer
	var firstmenutext = jQuery(".footer .menu li.first span").text();
	var firstlilink = jQuery(".footer .menu li.first ul li.first a").attr('href');
	jQuery(".footer .menu li.first span.caret").hide();
	var updatetext = '<a href="'+firstlilink+'">'+firstmenutext+'</a>';
	jQuery(".footer .menu li.first").html(updatetext);

	// remove upload button from left in user page
	jQuery(".page-user #sidebarmenu-accordion ul .accord:last-child").hide();
	/*if(jQuery(".webform-client-form #edit-submitted-country").length > 0){
		if(jQuery(".alert.error").length < 1){
			jQuery(".webform-client-form #edit-submitted-country").prepend("<option value='' selected='selected'>Select Country*</option>");
		}
	}*/

	if(jQuery("#quicktabs-enquiry_contact .messages").length > 0){
		jQuery('html,body').animate(
	 	{
	  	scrollTop: jQuery("#quicktabs-enquiry_contact").offset().top
	 	},'slow');
	}
});

jQuery(function() {
	jQuery("ul li.ntm-top-element:first-child").addClass("expanded");
});

jQuery(function() {
    jQuery("li.ntm-top-element").on("click", function(e) {  // selects any element
        e.stopPropagation(); // stops click event from bubbling up from child
		//jQuery("ul li.ntm-top-element:first-child").removeClass("expanded");
        jQuery("ul li.ntm-top-element").removeClass("expanded"); // remove all previously selected classes
        jQuery(this).addClass("expanded"); // add our new class
    });
});


jQuery(function() {

	jQuery(".page-node-168 .view-media-center .item-list ul>li").on("click", function(e) {  // selects any element
        e.stopPropagation(); // stops click event from bubbling up from child
		//jQuery("ul li.ntm-top-element:first-child").removeClass("expanded");
        jQuery(".page-node-168 .view-media-center .item-list ul>li").removeClass("active-media"); // remove all previously selected classes
        jQuery(this).addClass("active-media"); // add our new class
    });


    jQuery(".front .view-media-center .item-list ul>li").on("click", function(e) {  // selects any element
        e.stopPropagation(); // stops click event from bubbling up from child
		//jQuery("ul li.ntm-top-element:first-child").removeClass("expanded");
        jQuery(".front .view-media-center .item-list ul>li").removeClass("active-media"); // remove all previously selected classes
        jQuery(this).addClass("active-media"); // add our new class
    });
});
jQuery(document).ready(function($) {
	var Find_active = $(".left_nav_inner").find(".active");
	console.info('asdf');
	if(Find_active.length > 0) {
		console.info('asdf');
		Find_active.closest('.inner-side').addClass('in');
		Find_active.closest('.inner-side').closest('.top-panel').find('.inside_top').attr("aria-expanded", "true");
		Find_active.closest('.inner-inner-inside').addClass('in');
		Find_active.closest('.inner-inner-inside').closest('.panel').find('.second_role').attr("aria-expanded", "true");
		Find_active.closest('.inner-inner-inside').closest('.panel').find('.second_role').closest('.left_nav_inner').closest('.inner-side').closest('.first_panel').find('.first_role').attr("aria-expanded", "true");
		//Find_active.closest('.inner-inner-inside').closest('.panel').closest('.in').closest('.panel').attr("aria-expanded", "true");
		Find_active.closest('.first_role').attr("aria-expanded", "true");
	}
	
	// much inner //
	
});

jQuery(document).ready(function($) {
	if($('table.custom-table').length > 0) {
		var getSpacing = $('table.custom-table').attr('cellspacing');
		var getPadding = $('table.custom-table').attr('cellpadding');

		getSpacing = (getSpacing) ? getSpacing : 0;
		getPadding = (getPadding) ? getPadding : 0;
		$('table.custom-table').css('border-spacing', getSpacing+"px");
		$('table.custom-table').css('border-collapse', 'inherit');
		$('table.custom-table').find('td').css('padding', getPadding+'px');
	}
});

// Change sarchbar placeholder by Ahmad Fareed // 
jQuery(document).ready(function($) {
	$('#edit-search-block-form--2').attr('placeholder','Search RIT Dubai Website');
});