			jQuery(function($) {
				$('.easy-pie-chart.percentage').each(function(){
					var $box = $(this).closest('.infobox');
					var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
					var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
					var size = parseInt($(this).data('size')) || 50;
					$(this).easyPieChart({
						barColor: barColor,
						trackColor: trackColor,
						scaleColor: false,
						lineCap: 'butt',
						lineWidth: parseInt(size/10),
						animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
						size: size
					});
				})
			
				$('.sparkline').each(function(){
					var $box = $(this).closest('.infobox');
					var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
					$(this).sparkline('html', {tagValuesAttribute:'data-values', type: 'bar', barColor: barColor , chartRangeMin:$(this).data('min') || 0} );
				});

			// Datepicker
				$( "#datepickerOH1" ).datepicker({
					showOtherMonths: true,
					selectOtherMonths: false,
					//isRTL:true,
			
					});

				$( "#datepickerOH2" ).datepicker({
					showOtherMonths: true,
					selectOtherMonths: false,
					});

			// Cities Selector
				$('#btn-add').click(function(){
			        $('#cities-select-from option:selected').each( function() {
			               $('#cities-select-to').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });

			    $('#btn-remove').click(function(){
			        $('#cities-select-to option:selected').each( function() {
			            $('#cities-select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });
			
	

			// School district Selector
				$('#btn-add-schools').click(function(){
			        $('#schools-select-from option:selected').each( function() {
			               $('#schools-select-to').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });

			    $('#btn-remove-schools').click(function(){
			        $('#schools-select-to option:selected').each( function() {
			            $('#schools-select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });

			 // School district Selector
				$('#btn-add-townships').click(function(){
			        $('#townships-select-from option:selected').each( function() {
			               $('#townships-select-to').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });

			    $('#btn-remove-townships').click(function(){
			        $('#townships-select-to option:selected').each( function() {
			            $('#townships-select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			            $(this).remove();
			        });
			    });
			
			    
			    $(".dropdown-toggle").click(function(e) { 
			    	console.log(e.target.className);
			    	//console.log('div clicked was: ' + e);
			    	// TODO:
			    	// Modify to only add this click function if the <li> is not already in the top area
			    	if( !$(this).hasClass('selected') && e.target.className.toString() != 'x-icon' )  {
			    		$(this).parent().insertBefore("#additional-li");
			    		addTitleText($(this).parent());
			    		$(this).addClass('selected');
			    	}
			    });

			});  // End document.ready handler
		

// Add property values to title bar 
// for each property in "Selected Properties area", i.e. 
// not in "Additional Properties"

		function addTitleText(params) {
			params.find('.x-icon').css('display','block');
			params.find('.x-icon').click(function(){
			removeFromSelected( params.find('.x-icon').parent().parent().parent() );
			});
		}
var debugGlobal;
	
		function updatePropertyText() {
			$('#price-menu-prop').text('$'+$('#min-price').val()+' to $'+$('#max-price').val());
		}
		
		$('#min-price').change(function() {
			updatePropertyText();
		});
		$('#max-price').change(function() {
			updatePropertyText();
		});
		function removeFromSelected(listItem) {
			  $(listItem[0]).find('.x-icon').css('display','none');
			  $(listItem[0]).insertAfter("#additional-li");
			  $(listItem[0]).children().first().removeClass('selected');
			  
		}

		// Horizontal two point slider for sq ft.
		$( "#slider-range" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 0,
					max: 10000,
					values: [ 2900, 6000 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						
						$('#min-sq-ft').val(ui.values[0]);
						$('#max-sq-ft').val(ui.values[1]);

					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});

//	Slider for price drop
		$( "#slider-range-price-drop" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 0,
					max: 50000,
					values: [ 15000, 30000 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						$('#min-price-drop').val(ui.values[0]);
						$('#max-price-drop').val(ui.values[1]);
					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});

// Slider for year built
$( "#slider-range-year-built" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 1900,
					max: 2013,
					values: [ 1970, 2013 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						$('#min-year-built').val(ui.values[0]);
						$('#max-year-built').val(ui.values[1]);
					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});

// Slider for days listed
$( "#slider-range-days-listed" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 0,
					max: 730,
					values: [ 0, 120 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						$('#min-days-listed').val(ui.values[0]);
						$('#max-days-listed').val(ui.values[1]);
					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});

// Slider for lot size
$( "#slider-range-lot-size" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 0,
					max: 100000,
					values: [ 3000, 30000 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						$('#min-lot-size').val(ui.values[0]);
						$('#max-lot-size').val(ui.values[1]);
					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});

// Acres slider
$( "#slider-range-lot-size-acres" ).css('width','200px').css('height','10px').slider({
					orientation: "horizontal",
					range: true,
					min: 0,
					max: 100,
					values: [ 0, 20 ],
					slide: function( event, ui ) {
						var val = ui.values[$(ui.handle).index()-1]+"";
						if(! ui.handle.firstChild ) {
							$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-6px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
						}
						$(ui.handle.firstChild).show().children().eq(1).text(val);
						$('#min-lot-size-acres').val(ui.values[0]);
						$('#max-lot-size-acres').val(ui.values[1]);
					}
				}).find('a').on('blur', function(){
					$(this.firstChild).hide();
				});


		// Expand primary search menu
		function showMoreOptions() {
			$('#moreMenuOptions').toggle(100);
		}

		$('#moreMenuOptions').hide();

		// Foreclosure radio/checkbox logic
		$('input').change( 
			function(){ 
			    if ($(this).val() == "but1") { 
			    //    if ($(this)[0].id == "rad-foreclosure") {
			        	$('#ckExcludeForeclosures').prop('checked', false).prop('disabled', true);
			        	$('#ckForeclosure').prop('disabled', false);
			        	$('#ckBankOwned').prop('disabled', false);
			   //     }
			 /*       else if ($(this)[0].id == "rad-non-foreclosure") {
			        	
			        }
			  */
			    } 
			    else if ($(this).val() == "but2") { 
			        	$('#ckExcludeForeclosures').prop('disabled', false);
			        	$('#ckForeclosure').prop('checked', false).prop('disabled', true);
			        	$('#ckBankOwned').prop('checked', false).prop('disabled', true);
			    }
			}); 

		// Toggle forclosure input
		$('#sliderrange-lot-size :input').prop('disabled', false);
