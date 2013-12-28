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

			
						
				$( "#datepickerOH1" ).datepicker({ 
					showOtherMonths: true, 
					selectOtherMonths: false, 
					onSelect: function() { 
						updatePropertyText('#datepickerOH1');
					} 
				});

				$( "#datepickerOH2" ).datepicker({ 
					showOtherMonths: true, 
					selectOtherMonths: false,
					 onSelect: function() { 
					 	updatePropertyText('#datepickerOH2');
					 } 
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
			    //	console.log(e);
			    	debugGlobal = $(e.target);
			    	if( !$(this).hasClass('selected') && e.target.className.toString() != 'x-icon' )  {
			    		$(this).parent().insertBefore("#additional-li");
			    		//console.log(debugGlobal.prev());
			    		addTitleText([$(this).parent().find('.x-icon'), $(e.target)]);
			    		$(this).addClass('selected');
			    	}

			  //  	else if(e.target.className.toString() == 'x-icon') {
			  //  		addTitleText([$(this).parent().find('.x-icon'), $(e.target)]);
			  //  	}
			    });

			    // Update number of results viewing text at top or results tab
			    // are these closures? since I can not access them globally, but am still
			    // able to access them in scroll() function call
			    var results_tab =  $('#results-tab'); 
			   // var results_tab_height = 545; //results_tab.height();
			    var min_viewing = $('#min-view-count');
			    var max_viewing = $('#max-view-count');

			    results_tab.scroll(function() {
			    	// refactor to only update text if numbers change
			    	min_viewing.text(Math.floor( (results_tab.scrollTop() + 300) / 210));
			    	max_viewing.text(Math.floor( (results_tab.scrollTop() + 300)  / 210) + 2);
			    })

			});  // End document.ready handler
		

// Add property values to title bar 
// for each property in "Selected Properties area", i.e. 
// not in "Additional Properties"

		function addTitleText(params) {
			params[0].css('display','block');
			params[0].click(function(){
			removeFromSelected( params[0].parent().parent().parent() );
			});
		}

var debugG;
	
		function updatePropertyText(e) {
			var text;
			
			// Price
			if(e == '#max-price' || e =='#min-price')
			{
				var minText;
				var maxText;
				var priceMenuText = $('#price-menu-prop');
				var minPrice = $('#min-price');
				var maxPrice = $('#max-price');

				if (minPrice.val() == '-1')
					minText = 'No Min'
				else
					minText = minPrice.val();

				if (maxPrice.val() == '-1')
					maxText  = 'No Max'; 
				else 
					maxText = maxPrice.val();
				
				priceMenuText.text('$' + minText +' to $' + maxText);
				priceMenuText.css('display','inline');
			}

			// Bedrooms
			if(e == '#bedroom-number')
			{
				if ($('#bedroom-number').val() == '-1')
					text  = 'Any';
				else
					text = $('#bedroom-number').val();

				$('#bedrooms-menu-prop').text(text + " bedrooms");
			}
			
			// Bathrooms
			if(e == '#bath-number')
			{
				if ($('#bath-number').val() == '-1')
					text  = 'Any';
				else
					text = $('#bath-number').val();

				$('#bathrooms-menu-prop').text(text + " baths");
			}

			// Home Size
			if(e == '#min-sq-ft' || e =='#max-sq-ft')
			{
				var homesizeSqFt = $('#homesize-menu-prop');
				var min = $('#min-sq-ft');
				var max = $('#max-sq-ft');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				homesizeSqFt.text(min +' to ' + max + 'sq ft');
				homesizeSqFt.css('display','inline');
			}

			// Lot Size - acres
			if(e == '#min-lot-size-acres' || e =='#max-lot-size-acres')
			{
				var lotSizeAcres = $('#lotsize-menu-prop');
				var min = $('#min-lot-size-acres');
				var max = $('#max-lot-size-acres');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				lotSizeAcres.text(min +' to ' + max + ' acres');
				lotSizeAcres.css('display','inline');
			}

			// Lot Size - sq ft
			if(e == '#min-lot-size' || e =='#max-lot-size')
			{
				var lotSizeAcres = $('#lotsize-menu-prop');
				var min = $('#min-lot-size');
				var max = $('#max-lot-size');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				lotSizeAcres.text(min +' to ' + max + ' sq ft');
				lotSizeAcres.css('display','inline');
			}

			// Days Listed
			if(e == '#min-days-listed' || e =='#max-days-listed')
			{
				var daysListed = $('#dayslisted-menu-prop');
				var min = $('#min-days-listed');
				var max = $('#max-days-listed');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				daysListed.text(min +' to ' + max + 'days');
				daysListed.css('display','inline');
			}

			// Year Built
			if(e == '#min-year-built' || e =='#max-year-built')
			{
				var yearBuilt = $('#yearbuilt-menu-prop');
				var min = $('#min-year-built');
				var max = $('#max-year-built');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				yearBuilt.text(min +' to ' + max);
				yearBuilt.css('display','inline');
			}

			// Price Drops
			if(e == '#min-price-drop' || e =='#max-price-drop')
			{
				var priceDrops = $('#pricedrops-menu-prop');
				var min = $('#min-price-drop');
				var max = $('#max-price-drop');

				if (min.val() == '')
					min = 'No Min'
				else
					min = min.val();

				if (max.val() == '')
					max  = 'No Max'; 
				else 
					max = max.val();
				
				priceDrops.text(min +' to ' + max);
				priceDrops.css('display','inline');
			}

			// Property Types
			if(e == '#ckLand' || e =='#ckCondo' || e == '#ckSingle')
			{
				var propTypes = $('#propertytypes-menu-prop');
				var land = $('#ckLand');
				var condo = $('#ckCondo');
				var single = $('#ckSingle');

				if(land.prop('checked')) {
					land = 'Land';
				}
				else
					land = ' '
				if(condo.prop('checked')) {
					condo = 'Condo';
				}
				else
					condo = ' '
				if(single.prop('checked')) {
					single = 'Single';
				}
				else
					single = ' ';
				propTypes.text(land + ' ' + condo + ' ' + single );
				propTypes.css('display','inline');
			}

			// Features
			if(e == '#ckGolf' || e =='#ckHardwood' || e == '#ckPatio' || e == '#ckGated' || e == '#ckPool' || e == '#ckFireplace' )
			{
				
				var featureTypes = $('#features-menu-prop');
				var golf = $('#ckGolf');
				var wood = $('#ckHardwood');
				var patio = $('#ckPatio');
				var gated = $('#ckGated');
				var pool = $('#ckPool');
				var fire = $('#ckFireplace');

				if(golf.prop('checked')) {
					golf = 'Gl ';
				}
				else
					golf = ''

				if(wood.prop('checked')) {
					wood = 'Wd';
				}
				else
					wood = ''
				

				if(patio.prop('checked')) {
					patio = 'Pt';
				}
				else
					patio = '';

				if(gated.prop('checked')) {
					gated = 'Gt';
				}
				else
					gated = ''

				if(pool.prop('checked')) {
					pool = 'Pl';
				}
				else
					pool = ''

				if(fire.prop('checked')) {
					fire = 'FP';
				}
				else
					fire = '';

				//console.log("Log: "+golf);
				featureTypes.text(golf + ' ' + wood + ' ' + patio + ' ' + gated + ' ' + pool + ' ' + fire );
				featureTypes.css('display','inline');
			}

			// Foreclosures
			// Property Types
			if(e == '#ckForeclosure' || e =='#ckBankOwned' || e == '#ckExcludeForeclosures')
			{
				var foreclosureTypes = $('#foreclosures-menu-prop');
				var foreclosure = $('#ckForeclosure');
				var bank = $('#ckBankOwned');
				var exclude = $('#ckExcludeForeclosures');

				if(foreclosure.prop('checked')) {
					foreclosure = 'Foreclosed';
				}
				else
					foreclosure = ' '
				if(bank.prop('checked')) {
					bank = 'Bank';
				}
				else
					bank = ' '
				if(exclude.prop('checked')) {
					exclude = 'None';
				}
				else
					exclude = ' ';
				foreclosureTypes.text(foreclosure + ' ' + bank + ' ' + exclude );
				foreclosureTypes.css('display','inline');
			}

			// Garages
			if(e == '#ckGarages')
			{
				var garages = $('#garages-menu-prop');
				var garage = $('#ckGarages');
				

				if(garage.prop('checked')) {
					garage = 'Garages Only';
				}
				else
					garage = ' '
			
				garages.text(garage);
				garages.css('display','inline');
			}
			
			// Status
			// Property Types
			if(e == '#ckActive' || e =='#ckContract' || e == '#ckSold')
			{
				var statusType = $('#status-menu-prop');
				var active = $('#ckActive');
				var contract = $('#ckContract');
				var sold = $('#ckSold');

				if(active.prop('checked')) {
					active = 'Active';
				}
				else
					active = ' '
				if(contract.prop('checked')) {
					contract = 'Contract';
				}
				else
					contract = ' '
				if(sold.prop('checked')) {
					sold = 'Sold';
				}
				else
					sold = ' ';
				statusType.text(active + ' ' + contract + ' ' + sold );
				statusType.css('display','inline');
			}
			// Photos
			if(e == '#ckPhotos')
			{
				var photos = $('#photos-menu-prop');
				var photo = $('#ckPhotos');
				

				if(photo.prop('checked')) {
					photo = 'With Photos Only';
				}
				else
					photo = ' '
			
				photos.text(photo);
				photos.css('display','inline');
			}
			// Open Houses
			if(e == '#datepickerOH1' || e == '#datepickerOH2')
			{
				var dates = $('#openhouses-menu-prop');
				var date1 = $('#datepickerOH1');
				var date2 = $('#datepickerOH2');

/*
				if(date1.val() == '' ) {
					date1 = date1.val();
				}
				else
					date1 = ' '

				if(date2.prop('checked')) {
					date2 = date2.val();
				}
				else
					date2 = ' '
			*/

				dates.text(date1.val() + ' to' + date2.val());
				dates.css('display','inline');
			}

		}
		// Non slider property update event handlers
		$('#min-price').change(function() { updatePropertyText('#min-price'); });
		$('#max-price').change(function() { updatePropertyText('#max-price'); });
		$('#bedroom-number').change(function() { updatePropertyText('#bedroom-number'); });
		$('#bath-number').change(function() { updatePropertyText('#bath-number'); });

		$('#ckLand').change(function() { updatePropertyText('#ckLand'); });
		$('#ckCondo').change(function() { updatePropertyText('#ckCondo'); });
		$('#ckSingle').change(function() { updatePropertyText('#ckSingle'); });
		
		$('#ckGolf').change(function() { updatePropertyText('#ckGolf'); });
		$('#ckHardwood').change(function() { updatePropertyText('#ckHardwood'); });
		$('#ckPatio').change(function() { updatePropertyText('#ckPatio'); });
		$('#ckGated').change(function() { updatePropertyText('#ckGated'); });
		$('#ckPool').change(function() { updatePropertyText('#ckPool'); });
		$('#ckFireplace').change(function() { updatePropertyText('#ckFireplace'); });

		$('#ckForeclosure').change(function() { updatePropertyText('#ckForeclosure'); });
		$('#ckExcludeForeclosures').change(function() { updatePropertyText('#ckExcludeForeclosures'); });
		$('#ckBankOwned').change(function() { updatePropertyText('#ckBankOwned'); });
		
		$('#ckGarages').change(function() { updatePropertyText('#ckGarages'); });

		$('#ckActive').change(function() { updatePropertyText('#ckActive'); });
		$('#ckContract').change(function() { updatePropertyText('#ckContract'); });
		$('#ckSold').change(function() { updatePropertyText('#ckSold'); });

		$('#ckPhotos').change(function() { updatePropertyText('#ckPhotos'); });





		function removeFromSelected(listItem) {
			  var menuID;
			  var item = $(listItem);
			  item.find('.x-icon').css('display','none');
			  item.insertAfter("#additional-li");
			  item.children().first().removeClass('selected');
			  item.find('.prop-text').first().css('display','none')
			  menuID = item.find('.prop-text')[0].id;
			  console.log(menuID);
			  // Clear out form values and put back to defaults
			  if (menuID == 'price-menu-prop'){
			  	$('#min-price').val('-1');
			  	$('#max-price').val('-1');
			  }
			  if (menuID == 'bedrooms-menu-prop')
				$('#bedroom-number').val('-1');	

			  if (menuID == 'homesize-menu-prop'){
				$('#min-sq-ft').val('');		  
				$('#max-sq-ft').val('');		  
			}
			 if (menuID == 'lotsize-menu-prop'){
				$('#min-lot-size').val('');
				$('#min-lot-size-acres').val('');	  
				$('#max-lot-size').val('');		  
				$('#max-lot-size-acres').val('');		  
				
			}
			if (menuID == 'dayslisted-menu-prop') {
				$('#min-days-listed').val('');
				$('#max-days-listed').val('');
			}
			if (menuID == 'yearbuilt-menu-prop') {
				$('#min-year-built').val('');
				$('#max-year-built').val('');
			}
			if (menuID == 'pricedrops-menu-prop') {
				$('#min-price-drop').val('');
				$('#max-price-drop').val('');
			}
			if (menuID == 'propertytypes-menu-prop') {
				$('#ckLand').prop('checked', false);
				$('#ckCondo').prop('checked', false);
				$('#ckSingle').prop('checked', false);
				
			}
			if (menuID == 'features-menu-prop') {
				$('#ckGolf').prop('checked', false);
				$('#ckHardwood').prop('checked', false);
				$('#ckPatio').prop('checked', false);
				$('#ckGated').prop('checked', false);
				$('#ckPool').prop('checked', false);
				$('#ckFireplace').prop('checked', false);
				
			}
			if(menuID == 'foreclosures-menu-prop') {
				$('#ckForeclosure').prop('checked', false);
				$('#ckBankOwned').prop('checked', false);
				$('#ckExcludeForeclosures').prop('checked', false);
			}

			if(menuID == 'garages-menu-prop')
				
				$('#ckGarages').prop('checked', false);

			if(menuID == 'status-menu-prop') {
				$('#ckActive').prop('checked', false);
				$('#ckSold').prop('checked', false);
				$('#ckContract').prop('checked', false);
			}

			if(menuID == 'photos-menu-prop'){
				
				$('#ckPhotos').prop('checked', false);

			}

			if(menuID == 'openhouses-menu-prop'){
				
				$('#datepickerOH1').val('');
				$('#datepickerOH2').val('');


			}


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
						updatePropertyText('#min-sq-ft');
						$('#max-sq-ft').val(ui.values[1]);
						updatePropertyText('#max-sq-ft');
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
						updatePropertyText('#min-price-drop');
						$('#max-price-drop').val(ui.values[1]);
						updatePropertyText('#max-price-drop');
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
						updatePropertyText('#min-year-built');

						$('#max-year-built').val(ui.values[1]);
						updatePropertyText('#max-year-built');

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
						updatePropertyText('#min-days-listed');
						$('#max-days-listed').val(ui.values[1]);
						updatePropertyText('#max-days-listed');

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
						updatePropertyText('#min-lot-size');
						$('#max-lot-size').val(ui.values[1]);
						updatePropertyText('#max-lot-size');
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
						updatePropertyText('#min-lot-size-acres');
						$('#max-lot-size-acres').val(ui.values[1]);
						updatePropertyText('#max-lot-size-acres');

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