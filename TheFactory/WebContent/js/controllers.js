var extDamageCheck = false,paintWorkCheck = false; // to keep exterior damage and paint work selection
var optionalEquipments = {};
var optionalEquipmentsArray = [],selectedValues = [];
var appraisalStatus = '';
var APPRAISAL_DELETE_STATUS = false;
var APPRAISAL_INVENTORY_STATUS = false;
var APPRAISAL_FOLLOWUP = '0';
var APPRAISAL_RETENSION_TIME = '0';
var CREATED_BY = 'King';
var CREATED_DATETIME = '';
var MODIFIED_BY = '';
var MODIFIED_DATETIME = ''; 
var date = new Date();
var selectedAppraisal = {};
var isAppraisalEdit = false;
var editAppraisalRef = '';
var APPRAISAL_STATUS_VAL_SUBMITED = 'Submitted';
var APPRAISAL_STATUS_VAL_DRAFT = 'Draft';
var APPRAISAL_STATUS_DELETE = 'Deleted';
var APPRAISAL_STATUS_INVENTORY = 'MovedToInventory';
var apCreate1 = false,apCreate2 = false,apCreate3 = false,apCreate4 = false,apCreate5 = false,apCreate6 = false,apCreate7 = false;
var isFirst = false,isClickTestDrive = false;
var isAppraisalLogLoad = true;
var currentUrl = '',previousUrl = '';
var filterObj = '',ionicPopup = '',timeout = '';
var isVinValidVal = false;

var APPRAISAL_VEHICLE_UPDATE_URL = '';
// to get the application running platform 
var platform;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			platform = device.platform;
}	 
function processingSymbol(id,status){
	var loadingImg = angular.element(document.querySelector('#'+id));
	  loadingImg.css("display",status);
}

function displayErrorPopUp(header,subheader,message){
	var errorPopup  = ionicPopup.show({ 
	    /*template: ''
	    	+'<center> <br>'
	    	+'<h4>'
	    	+message
	    	+'<h4>'
	    	+'</center>',*/
	    	
	    title: message,
	    subTitle:'' ,
	     /*buttons: [
	       { 
	    	   text: 'Ok',
	    	   onTap: function(e) {
	    		   errorPopup.close();
	    		   }
	    	   
	      }
	     ]*/
	   });
	timeout(function() {
		errorPopup.close(); //close the popup after 3 seconds for some reason
	   }, 3000);
}

/*function getCurrentDate(filterObj){
	var date = filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss');
	return date;
}*/
//to set the default values start
//first screen start
function setChangedValuesToScr2(){
	console.log("setChangedValuesToScr2");
	apCreate2 = true;
	exteriorColor = angular.element(document.querySelector('#exteriorColor')).val();
    interior = angular.element(document.querySelector('#interior')).val();
    lightCondition = angular.element(document.querySelector('#lightCondition')).val();
    acCondition = angular.element(document.querySelector('#acCondition')).val();
    doorLocks = angular.element(document.querySelector('#doorLocks')).val();
    roof = angular.element(document.querySelector('#roof')).val();
    sterioStatus = angular.element(document.querySelector('#sterioStatus')).val();
    interiorCondition = angular.element(document.querySelector('#interiorCondition')).val();
    frontLeftWinStatus = angular.element(document.querySelector('#front_left_Window')).val();
    rearLeftWinStatus = angular.element(document.querySelector('#rear_left_Window')).val();
    frontRightWinStatus = angular.element(document.querySelector('#front_right_Window')).val();
    rearRightWindowStatus = angular.element(document.querySelector('#rear_right_Window')).val();
}
function setSelectedValuesToScr2(scope){
	console.log("setValuesSelectedValuesToScr2");
	angular.element(document.querySelector('#exteriorColor')).val(exteriorColor);
    angular.element(document.querySelector('#interior')).val(interior);
    angular.element(document.querySelector('#lightCondition')).val(lightCondition);
    angular.element(document.querySelector('#acCondition')).val(acCondition);
    angular.element(document.querySelector('#doorLocks')).val(doorLocks);
    angular.element(document.querySelector('#roof')).val(roof);
    angular.element(document.querySelector('#sterioStatus')).val(sterioStatus);
    angular.element(document.querySelector('#interiorCondition')).val(interiorCondition);
    angular.element(document.querySelector('#front_left_Window')).val(frontLeftWinStatus);
    angular.element(document.querySelector('#rear_left_Window')).val(rearLeftWinStatus);
    angular.element(document.querySelector('#front_right_Window')).val(frontRightWinStatus);
    angular.element(document.querySelector('#rear_right_Window')).val(rearRightWindowStatus);

}
// first screen end
//third screen start
function setChangedValuesToScr3(){
	 console.log("setChangedValuesToScr3");
	 apCreate3 = true;
	 frontLeftAngleHidden = angular.element(document.querySelector('#frontLeftAngleHidden')).val();
	 frontRightAngleHidden = angular.element(document.querySelector('#frontRightAngleHidden')).val();
	 rearLeftAngleHidden = angular.element(document.querySelector('#rearLeftAngleHidden')).val();
	 rearRightAngleHidden = angular.element(document.querySelector('#rearRightAngleHidden')).val();
	 oilCondition = angular.element(document.querySelector('#oilCondition')).val();
}
function setSelectedValuesToScr3(scope){
	 console.log("setValuesSelectedValuesToScr3");
	 angular.element(document.querySelector('#frontLeftAngleHidden')).val(frontLeftAngleHidden);
	    angular.element(document.querySelector('#frontRightAngleHidden')).val(frontRightAngleHidden);
	    angular.element(document.querySelector('#rearLeftAngleHidden')).val(rearLeftAngleHidden);
	    angular.element(document.querySelector('#rearRightAngleHidden')).val(rearRightAngleHidden);
	    angular.element(document.querySelector('#oilCondition')).val(oilCondition);
	    
	    scope.frontleftangle = frontLeftAngleHidden;
	    scope.frontrightangle = frontRightAngleHidden;
	    scope.rearleftangle = rearLeftAngleHidden;
	    scope.rearrightangle = rearRightAngleHidden;
	}
// third screen end

// fourth screen start
function setChangedValuesToScr4(){
	 console.log("setChangedValuesToScr4");
	 apCreate4 = true;
	 FrontDriverSideDamage = angular.element(document.querySelector('#FrontDriverSideDamage')).val();
	    RearDriverSideDamage = angular.element(document.querySelector('#RearDriverSideDamage')).val();
	    FrontPassengerSideDamage = angular.element(document.querySelector('#FrontPassengerSideDamage')).val();
	    RearPassengerSideDamage = angular.element(document.querySelector('#RearPassengerSideDamage')).val();
	    PaintofFrontDriverSide = angular.element(document.querySelector('#PaintofFrontDriverSide')).val();
	    PaintonRearDriverSide = angular.element(document.querySelector('#PaintonRearDriverSide')).val();
	    PaintonRearPassengerSide = angular.element(document.querySelector('#PaintonRearPassengerSide')).val();
	    PaintonFrontPassengerSide = angular.element(document.querySelector('#PaintonFrontPassengerSide')).val();
	    
	    FrontDriverSideDamageHidden = angular.element(document.querySelector('#FrontDriverSideDamageHidden')).val();
	    RearDriverSideDamageHidden = angular.element(document.querySelector('#RearDriverSideDamageHidden')).val();
	    FrontPassengerSideDamageHidden = angular.element(document.querySelector('#FrontPassengerSideDamageHidden')).val();
	    RearPassengerSideDamageHidden = angular.element(document.querySelector('#RearPassengerSideDamageHidden')).val();
	   
	    PaintofFrontDriverSideHidden = angular.element(document.querySelector('#PaintofFrontDriverSideHidden')).val();
	    PaintonRearDriverSideHidden = angular.element(document.querySelector('#PaintonRearDriverSideHidden')).val();
	    PaintonRearPassengerSideHidden = angular.element(document.querySelector('#PaintonRearPassengerSideHidden')).val();
	    PaintonFrontPassengerSideHidden = angular.element(document.querySelector('#PaintonFrontPassengerSideHidden')).val();
	}

function setSelectedValuesToScr4(scope){
	 console.log("setValuesSelectedValuesToScr4");
	 angular.element(document.querySelector('#FrontDriverSideDamage')).val(FrontDriverSideDamage);
	    angular.element(document.querySelector('#RearDriverSideDamage')).val(RearDriverSideDamage);
	    angular.element(document.querySelector('#FrontPassengerSideDamage')).val(FrontPassengerSideDamage);
	    angular.element(document.querySelector('#RearPassengerSideDamage')).val(RearPassengerSideDamage);
	    angular.element(document.querySelector('#PaintofFrontDriverSide')).val(PaintofFrontDriverSide);
	    angular.element(document.querySelector('#PaintonRearDriverSide')).val(PaintonRearDriverSide);
	    angular.element(document.querySelector('#PaintonRearPassengerSide')).val(PaintonRearPassengerSide);
	    angular.element(document.querySelector('#PaintonFrontPassengerSide')).val(PaintonFrontPassengerSide);
	    
	    angular.element(document.querySelector('#FrontDriverSideDamageHidden')).val(FrontDriverSideDamageHidden);
	    angular.element(document.querySelector('#RearDriverSideDamageHidden')).val(RearDriverSideDamageHidden);
	    angular.element(document.querySelector('#FrontPassengerSideDamageHidden')).val(FrontPassengerSideDamageHidden);
	    angular.element(document.querySelector('#RearPassengerSideDamageHidden')).val(RearPassengerSideDamageHidden);
	   
	    angular.element(document.querySelector('#PaintofFrontDriverSideHidden')).val(PaintofFrontDriverSideHidden);
	    angular.element(document.querySelector('#PaintonRearDriverSideHidden')).val(PaintonRearDriverSideHidden);
	    angular.element(document.querySelector('#PaintonRearPassengerSideHidden')).val(PaintonRearPassengerSideHidden);
	    angular.element(document.querySelector('#PaintonFrontPassengerSideHidden')).val(PaintonFrontPassengerSideHidden);
	    
	}
// fourth screen end
//fifth screen start
function setChangedValuesToScr5(){
	 console.log("setChangedValuesToScr5");
	 apCreate5 = true;
	 WinfShieldDamage = angular.element(document.querySelector('#WinfShieldDamage')).val();
	 TyreCondition = angular.element(document.querySelector('#TyreCondition')).val();
	    ProfessionalOpenion = angular.element(document.querySelector('#ProfessionalOpenion')).val();
	}
function setSelectedValuesToScr5(scope){
	 console.log("setValuesSelectedValuesToScr5");
	    angular.element(document.querySelector('#WinfShieldDamage')).val(WinfShieldDamage);
	    angular.element(document.querySelector('#TyreCondition')).val(TyreCondition);
	    angular.element(document.querySelector('#ProfessionalOpenion')).val(ProfessionalOpenion);
	}
//fifth screen end

//seventh screen start
function setChangedValuesToScr7(){
	 console.log("setChangedValuesToScr7");
	 apCreate7 = true;
	 Yourvalue = angular.element(document.querySelector('#apparaiseValue')).val();
	}
function setSelectedValuesToScr7(scope){
	 console.log("setValuesSelectedValuesToScr7");
	 angular.element(document.querySelector('#apparaiseValue')).val(Yourvalue);
	}
//seventh screen end
// to set default values End
function displayBlackBookDataInPopup(data,vinNumber,$ionicPopup){
	var blackBookDataObj = 	data.Body.APPRAISE_VEHICLE_BB_SERVICEResponse.ResponseBody.APPRAISE_VEHICLE_BB_OUTPUT;
	if(blackBookDataObj != undefined && blackBookDataObj != null){
		
	var blackBookPopup  = $ionicPopup.show({ 
	   // template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		 template : 	''
		    	+'<center>'
		    	+'<span class = "popupLeftSpan col-50">Year</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].VEHICLE_YEAR+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Make</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].VEHICLE_MAKE+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Model</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].VEHICLE_MODEL+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Style</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].VEHICLE_STYLE+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Series</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].VEHICLE_SERIES+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Engine Type</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].ENGINE_TYPE+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Transmission Type</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].TRANSMISSION_TYPE+' </span><br>'
		    	+'<span class = "popupLeftSpan col-50">Black Book Value</span><span class = "popupMiddleSpan col-10"> - </span><span class = "popupRightSpan col-40"> '+blackBookDataObj[0].BLACK_BOOK_VALUE+' </span><br>'
		    	+'</center>',
	    title: vinNumber + " &nbsp; Details",
	    subTitle:'' ,
//	    scope: $scope,
	     buttons: [
	       { 
	    	   text: 'Ok',
	    	   
	    	   onTap: function(e) {
	    		   blackBookPopup.close();
	    	   }
	    	   
	      },
	     ]
		
	   });

/*$scope.closePopUp = function()
{
	blackBookPopup.close();
}*/
}
}
function appendAppraisalLogsToView(data,$scope,$compile,apprialsText,logImgUrlData){
	  var loadingImg = angular.element(document.querySelector('#apprialsImgLoading'));
	  loadingImg.css("display","none");
	  var apprialsButtonName = [],apprialsSeries=[],picName=[];
	  var count;
	  var dataObj = data.Body;//.APPRAISAL_VEHICLE_READ_PAGResponse.ResponseBody;
	  if(dataObj != null && dataObj != undefined && dataObj != ''){
		  dataObj = data.Body.APPRAISAL_VEHICLE_READ_PAGResponse;
		  if(dataObj != null && dataObj != undefined && dataObj != ''){
			  dataObj = data.Body.APPRAISAL_VEHICLE_READ_PAGResponse.ResponseBody;
			  if(dataObj != null && dataObj != undefined && dataObj != ''){
					  for(count=0;count<=dataObj.length-1;count++){
						  var modelSeriesStyle = dataObj[count].VEHICLE_MODEL +" " +dataObj[count].VEHICLE_SERIES + " " + dataObj[count].VEHICLE_STYLE;
						  var priceVal = dataObj[count].APPRAISAL_VALUE;
						if(priceVal == null || priceVal == undefined)
							priceVal = "";
						  var valueStatus = "$"+priceVal+"            " + " &nbsp;&nbsp;" + dataObj[count].APPRAISAL_STATUS;
						  var yearMake = dataObj[count].VEHICLE_YEAR+"&nbsp;&nbsp;"+dataObj[count].VEHICLE_MAKE;
						  var imageSrc = dataObj[count].TEST_DR_FRONT_LEFT_IMAGE;;
						  if(imageSrc == null || imageSrc == '' || imageSrc == undefined)
							  imageSrc = "img/car.png";
						  
						     logImgUrlData.append("<ul id='longPressPopUpImgUrl' class='apprisalBorder'>" + "</ul>");
						  
						     var logImgUrl = angular.element( document.querySelector( '#longPressPopUpImgUrl' ) );
							 var logImgUrlDir = angular.element('<button on-hold="displayPopup( '+ dataObj.length + "," + count + ",'"+dataObj[count].VIN_NUMBER+"','"+dataObj[count].APPRAISAL_STATUS+"')" +'  "class="appraisalLongPressPopUp logImgButton"> ' + "<li class=''>" +"<img src=' " + imageSrc + "'" + "/> " + "</li>" + "<li id='rightClickPopUp" + count + "'" + ">" + "</li>" + "</button>");
							 logImgUrl.append(logImgUrlDir);
							 $compile(logImgUrlDir)($scope); 
							 
							  apprialsText.append("<ul id='longPressPopUp'>" + "</ul>");
					          var longPressPopUpList = angular.element( document.querySelector( '#longPressPopUp' ) );
							  var longPressPopUpDir = angular.element('<button on-hold="displayPopup( '+ dataObj.length + "," + count + ",'"+dataObj[count].VIN_NUMBER+"','"+dataObj[count].APPRAISAL_STATUS+"')" +'  "class="logPopUpBtnStyle1"> ' + "<li>" + "<h2>" + yearMake + "</h2>" + "</li>" + "<li>" + "<h2>" + modelSeriesStyle + "</h2>" + "</li>" + "<li>" + "<h2>" + dataObj[count].VEHICLE_MILES + " &nbsp;&nbsp;Miles"+"</h2>" + "</li>" + "<li>" + "<h2>" + "Sales Man " + dataObj[count].CREATED_BY + "</h2>" + "</li>" + "</li>" + "<li>" + "<h2>" + valueStatus + "</h2>" + "</li>" + "</button>");
							  longPressPopUpList.append(longPressPopUpDir);
							  $compile(longPressPopUpDir)($scope); 
					  }
		  }else{
			     $scope.apprisalLogText=["Apprails Logs are not available"];
				 processingSymbol("apprialsImgLoading","none");
				 displayErrorPopUp("Black Book Data","","No Logs To Display");return;
		  }		  
	  }else{
		     $scope.apprisalLogText=["Apprails Logs are not available"];
			 processingSymbol("apprialsImgLoading","none");
			 displayErrorPopUp("Black Book Data","","No Logs To Display");return;
	  }
}else{
	 $scope.apprisalLogText=["Apprails Logs are not available"];
	 processingSymbol("apprialsImgLoading","none");
	 displayErrorPopUp("Black Book Data","","No Logs To Display");return;
}

}


function searchAppraisalYear($scope)
{
	var searchAppraisalYearArray = ['---YEAR---'];
	for(var i = 1850; i <= 2016; i++)
		
	{
	searchAppraisalYearArray.push(i);
    }
	$scope.appraisalYear = searchAppraisalYearArray;
	$scope.searchAppraisalYearModel = $scope.appraisalYear[0];
}


function getSearchAppraisalMake($scope,$http,url)
{
	setHeaderDetails($http);
	
	$http.get(url+"GUID=&UserId=king&AppName="+platform+"&RequestDateTime=&VEHICLE_MAKE=")
      .success(function (data, status, headers,request,response,header) {
    	 // console.log(JSON.stringify(data));
    	  var dataObj = data.Body.APP_VEH_READ_MODEL_MAKEResponse.ResponseBody;
    	  var searchAppraisalMakeArray = ['---MAKE---'];
    	  var count;
    	  
    	  if(data!=null){
    		 
  			for(count = 0; count <= dataObj.length-1; count++)
  			 {
  				searchAppraisalMakeArray.push(dataObj[count]);
    		 }
  			
  			$scope.searchAppraisalMake = searchAppraisalMakeArray;
  			$scope.searchAppraisalMakeModel = $scope.searchAppraisalMake[0];
    		 
    	  }else{
    		
    	  }
      })
      .error(function (data, status, header) {
    	 
      });
	
}


function getSearchSalesManDetails($scope,$http,url)
{
	setHeaderDetails($http);
	
	$http.get(url+"GUID=&UserId=king&AppName="+platform+"&RequestDateTime=&rangestart=0&rangeend=10")
      .success(function (data, status, headers,request,response,header) {
    	 // console.log(JSON.stringify(data));
    	  var dataObj = data.Body.APP_VEH_READ_SALESMAN_VIEWResponse.ResponseBody.APP_VEH_READ_SALESMAN_VIEWOutput;
    	  var searchAppraisalSalesManArray = ['---SALES MAN ---'];
    	  var count;
    	 
    	  if(data!=null){
    		  
    		for(count = 0; count <= dataObj.length-1; count++)
  		     {
    			
  			   searchAppraisalSalesManArray.push(dataObj[count].SALESMAN);
  				
    		 }
    		
    		$scope.searchAppraisalSalesMan = searchAppraisalSalesManArray;
    		$scope.searchAppraisalSalesManModel = $scope.searchAppraisalSalesMan[0];
    		
    	  }else{
    		
    	  }
      })
      .error(function (data, status, header) {
    	 
      });
	
}

function  getSearchModelValues($scope,$http,url)
{
	setHeaderDetails($http);
	
	$http.get(url+"GUID=&UserId=king&AppName="+platform+"&RequestDateTime=&rangestart=0&rangeend=10")
      .success(function (data, status, headers,request,response,header) {
    	 // console.log(JSON.stringify(data));
    	  var dataObj = data.Body.APP_VEH_READ_MODEL_VIEW_PAGResponse.ResponseBody.APP_VEH_READ_MODEL_VIEW_PAGOutput;
    	  var searchAppraisalModelArray = ['---MODEL---'];
    	  var count;
    	  if(data!=null){
    	    
    	   for(count = 0; count <= dataObj.length-1; count++)
  			 {
  				searchAppraisalModelArray.push(dataObj[count].VEHICLE_MODEL);
    		 
  			}
    		
    	   $scope.searchAppraisalModel = searchAppraisalModelArray;
    	   $scope.searchAppraisalModelDefault = $scope.searchAppraisalModel[0];
    	   
    	  }else{
    		
    	  }
      })
      .error(function (data, status, header) {
    	 
      });
	
}


function prepareUpdateObject(vinNumber,appraisalRef,action,rtFollowUp){
	var data = '';
	if(action == "delete"){
		data = {"APPRAISALVEHICLEDELETERequest": {
	        "RequestHeader": {
	       	 "GUID": appraisalRef,
		            "UserId": CREATED_BY,
		            "AppName": platform,
		            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
		          },
	        "RequestBody": {
	       	 "V_VIN_NUMBER": vinNumber,
	            "V_APPRAISAL_DELETE_STATUS": APPRAISAL_STATUS_DELETE,
	            "V_MODIFIED_BY": CREATED_BY,
	            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
	}
		}
	     }
	
	}else if(action == "rt"){
		data = {"APPRAISAL_VEH_UPD_RETENTTIMERequest": {
	        "RequestHeader": {
	       	 "GUID": appraisalRef,
		            "UserId": CREATED_BY,
		            "AppName": platform,
		            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
		          },
	        "RequestBody": {
	       	 "V_VIN_NUMBER": vinNumber,
	            "V_APPRAISAL_RETENSION_TIME": rtFollowUp,
	            "V_MODIFIED_BY": CREATED_BY,
	            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
	}
		}
	     }
	}else if(action == "inventory"){

		data = {"APPRAISAL_VEH_UPD_INVENTORYRequest": {
	        "RequestHeader": {
	       	 "GUID": appraisalRef,
		            "UserId": CREATED_BY,
		            "AppName": platform,
		            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
		          },
	        "RequestBody": {
	       	 "V_VIN_NUMBER": vinNumber,
	            "V_APPRAISAL_INVENTORY_STATUS": APPRAISAL_STATUS_INVENTORY,
	            "V_MODIFIED_BY": CREATED_BY,
	            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
	}
		}
	     }
	
	}else if(action == "sf"){
		data = {"APPRAISALVEHICLEUPDATEFOLLOWUPRequest": {
	        "RequestHeader": {
	       	 "GUID": appraisalRef,
		            "UserId": CREATED_BY,
		            "AppName": platform,
		            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
		          },
	        "RequestBody": {
	       	 "V_VIN_NUMBER": vinNumber,
	            "V_APPRAISAL_FOLLOWUP": rtFollowUp,
	            "V_MODIFIED_BY": CREATED_BY,
	            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
	}
		}
	     }
	
	}
	return data;
}


function preparedataToPopUpCalls(vinNumber,appraisalRef,rtFollowUp,action){
	if(action == "delete"){
		APPRAISAL_STATUS_DELETE = 'Deleted';
		APPRAISAL_STATUS_INVENTORY = '';
	}else if(action == "inventory"){
		APPRAISAL_STATUS_DELETE = '';
		 APPRAISAL_STATUS_INVENTORY = 'MovedToInventory';
	}else{
		APPRAISAL_STATUS_DELETE = '';
		 APPRAISAL_STATUS_INVENTORY = '';
	}
	var data = {
			   "Header": null,
			   "Body": 
			      prepareUpdateObject(vinNumber,appraisalRef,action,rtFollowUp)
			   
			}
return data;
}

/*function prepareDataForRetentionTime(vinNumber,appraisalRef,retentionTime){
	var data = {
			   "Header": null,
			   "Body": {
			      "APPRAISAL_VEH_UPD_RETENTTIMERequest": {
			         "RequestHeader": {
			        	 "GUID": appraisalRef,
				            "UserId": CREATED_BY,
				            "AppName": platform,
				            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
				          },
			         "RequestBody": {
			            "V_VIN_NUMBER": vinNumber,
			            "V_APPRAISAL_RETENSION_TIME": retentionTime,
			            "V_MODIFIED_BY": CREATED_BY,
			            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
			         }
			      }
			   }
			}
return data;
}

function prepareDataForDelete(vinNumber,appraisalRef){
			var data = {
					   "Header": null,
					   "Body": {
					      "APPRAISALVEHICLEDELETERequest": {
					         "RequestHeader": {
					            "GUID": appraisalRef,
					            "UserId": CREATED_BY,
					            "AppName": platform,
					            "RequestDateTime":filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
					         },
					         "RequestBody": {
					            "V_VIN_NUMBER": vinNumber,
					            "V_APPRAISAL_DELETE_STATUS": APPRAISAL_STATUS_DELETE,
					            "V_MODIFIED_BY": CREATED_BY,
					            "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
					         }
					      }
					   }
					}
			return data;
		}

function prepareDataForFollowup(vinNumber,appraisalRef,followUp){
	var data = {
			   "Header": null,
			   "Body": {
			      "APPRAISALVEHICLEDELETERequest": {
			         "RequestHeader": {
			            "GUID": appraisalRef,
			            "UserId": CREATED_BY,
			            "AppName": platform,
			            "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
			         },
			         "RequestBody": {
			             "V_VIN_NUMBER": appraisalRef,
			             "V_APPRAISAL_RETENSION_TIME": followUp,
			             "V_MODIFIED_BY": CREATED_BY,
			             "V_MODIFIED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
			         }
			      }
			   }
			}
	return data;
}*/
var saveAppraisalViewPopUp ;
		
function saveAppraisalViewPopUpDisplay($ionicPopup,$scope,$http,$state,$compile,$timeout,updateData)
		{
			saveAppraisalViewPopUp  = $ionicPopup.show({ 
					    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>',
					    title: "Do You Want Save That Changes",
					    subTitle:'' ,
					    scope: $scope,
					     buttons: [
					       { 
					    	   text: 'Save',
					    	   
					    	   onTap: function(e) {
					    		   $scope.updateAppraisalData(updateData);
					    		   saveAppraisalViewPopUp.close(); 
					 	         }
					    	   
					      },
					       {
					         text: 'Cancel',
					         type: '',
					         onTap: function(e) {
					        	 setDefaultValuesToAppraisalScreen($scope);
					        	 $state.go('tab.app_home');
					        	 saveAppraisalViewPopUp.close(); 
					          
					         }
					       },
					     ]
						
					   });
				
				$scope.closePopUp = function()
				{
					saveAppraisalViewPopUp.close();
				}
		}


function saveAppraisalViewDetails($http,$scope)
		{
//			 alert("Save");
			 validateAppraisalScreen1('next',$http,$scope);
			 validateAppraisalScreen2('next',$http,$scope);
			 validateAppraisalScreen3('next',$http,$scope);
			 validateAppraisalScreen4('next',$http,$scope);
			 validateAppraisalScreen5('next',$http,$scope);
			 validateAppraisalScreen7('next',$http,$scope);
		}


function loadBlackBookData(data,$scope){
	var blackBookDataObj = 	data.Body;
	if(blackBookDataObj != undefined && blackBookDataObj != null && blackBookDataObj != ""){
		blackBookDataObj = data.Body.APPRAISE_VEHICLE_BB_SERVICEResponse;
		if(blackBookDataObj != undefined && blackBookDataObj != null && blackBookDataObj != ""){
			blackBookDataObj = data.Body.APPRAISE_VEHICLE_BB_SERVICEResponse.ResponseBody;
		if(blackBookDataObj != undefined && blackBookDataObj != null && blackBookDataObj != ""){
			blackBookDataObj = data.Body.APPRAISE_VEHICLE_BB_SERVICEResponse.ResponseBody.APPRAISE_VEHICLE_BB_OUTPUT;
		if(blackBookDataObj != undefined && blackBookDataObj != null){
			 isVinValidVal = true;
			makeBlackBook = blackBookDataObj[0].VEHICLE_MAKE;
			modelBlackBook = blackBookDataObj[0].VEHICLE_MODEL;
			year = blackBookDataObj[0].VEHICLE_YEAR;
			styleBlackBook = blackBookDataObj[0].VEHICLE_STYLE;
			series = blackBookDataObj[0].VEHICLE_SERIES;
			if(series == undefined)
				series = "";
			if(makeBlackBook == null || makeBlackBook == undefined)
				makeBlackBook = "";
			if(year == null || year == undefined)
				year = "";
			if(modelBlackBook == null || modelBlackBook == undefined)
				modelBlackBook = "";
			if(series == null || series == undefined)
				series = "";
			if(styleBlackBook == null || styleBlackBook == undefined)
				styleBlackBook = "";
			angular.element(document.querySelector('#scan_textbox')).val(blackBookDataObj[0].VIN_NUMBER);
			$scope.model = makeBlackBook +" " + year;
			$scope.series = modelBlackBook + " " + series + " " + styleBlackBook;
			$scope.engineType = blackBookDataObj[0].ENGINE_TYPE;;
			$scope.TransmissionType = blackBookDataObj[0].TRANSMISSION_TYPE;
			
			var hiddenBlackBookVal1 = angular.element(document.querySelector('#hiddenBlackBookVal'));
		    hiddenBlackBookVal1.val(blackBookDataObj[0].BLACK_BOOK_VALUE);
		    
		    var hiddenBlackBookYear = angular.element(document.querySelector('#hiddenBlackBookYear'));
		    hiddenBlackBookYear.val(year);
		    
		    var hiddenBlackBookModel = angular.element(document.querySelector('#hiddenBlackBookModel'));
		    hiddenBlackBookModel.val(modelBlackBook);
		    
		    var hiddenBlackBookSeries = angular.element(document.querySelector('#hiddenBlackBookSeries'));
		    hiddenBlackBookSeries.val(series);
		    
		    var hiddenBlackBookStyle = angular.element(document.querySelector('#hiddenBlackBookStyle'));
		    hiddenBlackBookStyle.val(styleBlackBook);
		    
		    var hiddenBlackBookMake = angular.element(document.querySelector('#hiddenBlackBookMake'));
		    hiddenBlackBookMake.val(makeBlackBook);
				/* optional equipments */
				var optionals = blackBookDataObj[0].OPTIONAL_EQUIPMENT_LIST;
				optionalEquipmentsArray = [];
				if(optionals != null && optionals != undefined){
				for(var option = 0;option <= optionals.length-1;option++){
					optionalEquipments = {
							"name" : optionals[option].OPTIONAL_EQUIPMENT[0],
							"selected" : true
					}
				}
					optionalEquipmentsArray.push(optionalEquipments)
				}
				$scope.vehicleProperties = optionalEquipmentsArray;
				
				var loadingImg = angular.element(document.querySelector('#apprialsImgLoadingHome'));
			    loadingImg.css("display","none");
	}else{
		processingSymbol("apprialsImgLoadingHome","none"); isVinValidVal = false;
	    displayErrorPopUp("Black Book Data","","Internal Server Problem, Please try after some time");
	}
		}else{
			processingSymbol("apprialsImgLoadingHome","none"); isVinValidVal = false;
		    displayErrorPopUp("Black Book Data","","Internal Server Problem, Please try after some time");
		}
	}else{
		processingSymbol("apprialsImgLoadingHome","none"); isVinValidVal = false;
	    displayErrorPopUp("Black Book Data","","Internal Server Problem, Please try after some time");
	}
	}else{
		processingSymbol("apprialsImgLoadingHome","none"); isVinValidVal = false;
	    displayErrorPopUp("Black Book Data","","Internal Server Problem, Please try after some time");
	}
		}
function setAppraisalValuesToScreen2($scope,appraisal){
	var exteriorColorDefalut = angular.element(document.querySelector('#exteriorColor'));
    exteriorColorDefalut.val(appraisal.V_EXTERIOR_COLOR);
    var interiorDefault = angular.element(document.querySelector('#interior'));
    interiorDefault.val(appraisal.V_TEST_DR_INTERIOR_TYPE);
    var lightConditionDefault = angular.element(document.querySelector('#lightCondition'));
    lightConditionDefault.val(appraisal.V_TEST_DR_LIGHT_CONDITION);
    var acConditionDefault = angular.element(document.querySelector('#acCondition'));
    acConditionDefault.val(appraisal.V_TEST_DR_AC_STATUS);
    var doorLocksDefault = angular.element(document.querySelector('#doorLocks'));
    doorLocksDefault.val(appraisal.V_TEST_DR_DOOR_LOCK_TYPE);
    var roofDefault = angular.element(document.querySelector('#roof'));
    roofDefault.val(appraisal.V_TEST_DR_ROOF_TYPE);
    var sterioStatusDefault = angular.element(document.querySelector('#sterioStatus'));
    sterioStatusDefault.val(appraisal.V_TEST_DR_STEREO_STATUS);
    var interiorConditionDefault = angular.element(document.querySelector('#interiorCondition'));
    interiorConditionDefault.val(appraisal.V_TEST_DR_INTERIOR_CONDITION);
    
    var front_left_Window = angular.element(document.querySelector('#front_left_Window'));
    front_left_Window.val(appraisal.V_TEST_FRONT_LEFT_WIN_STATUS);
    var rear_left_Window = angular.element(document.querySelector('#rear_left_Window'));
    rear_left_Window.val(appraisal.V_TEST_DR_REAR_LEFT_WIN_STATUS);
    var front_right_Window = angular.element(document.querySelector('#front_right_Window'));
    front_right_Window.val(appraisal.V_TEST_FRONT_RIGHT_WIN_STATUS);
    var rear_right_Window = angular.element(document.querySelector('#rear_right_Window'));
    rear_right_Window.val(appraisal.V_TEST_REAR_RIGHT_WIN_STATUS);
}
function setAppraisalValuesToScreen3($scope,appraisal){
	 var oilConditionDefault = angular.element(document.querySelector('#oilCondition'));
	    oilConditionDefault.val(appraisal.V_EXTERIOR_OIL_CONDITION);
}
function setAppraisalValuesToScreen4($scope,appraisal){
	 var FrontDriverSideDamageDefault = angular.element(document.querySelector('#FrontDriverSideDamage'));
	    FrontDriverSideDamageDefault.val(appraisal.V_FRONT_DR_SIDE_DAMAGE_STATUS);
	    var RearDriverSideDamageDefault = angular.element(document.querySelector('#RearDriverSideDamage'));
	    RearDriverSideDamageDefault.val(appraisal.V_REAR_DR_SIDE_DAMAGE_STATUS);
	    var FrontPassengerSideDamageDefault = angular.element(document.querySelector('#FrontPassengerSideDamage'));
	    FrontPassengerSideDamageDefault.val(appraisal.V_FR_PASS_SIDE_DAMAGE_STATUS);
	    var RearPassengerSideDamageDefault = angular.element(document.querySelector('#RearPassengerSideDamage'));
	    RearPassengerSideDamageDefault.val(appraisal.V_REAR_PASS_SIDE_DAMAGE_STATUS);
	    var PaintofFrontDriverSideDefault = angular.element(document.querySelector('#PaintofFrontDriverSide'));
	    PaintofFrontDriverSideDefault.val(appraisal.V_PAINTWORK_FD_SIDE_STATUS);
	    var PaintonRearDriverSideDefault = angular.element(document.querySelector('#PaintonRearDriverSide'));
	    PaintonRearDriverSideDefault.val(appraisal.V_PAINTWORK_RD_SIDE_STATUS);
	    var PaintonRearPassengerSideDefault = angular.element(document.querySelector('#PaintonRearPassengerSide'));
	    PaintonRearPassengerSideDefault.val(appraisal.V_PAINTWORK_RP_SIDE_STATUS);
	    var PaintonFrontPassengerSideDefault = angular.element(document.querySelector('#PaintonFrontPassengerSide'));
	    PaintonFrontPassengerSideDefault.val(appraisal.V_PAINTWORK_FP_SIDE_STATUS);
	    
	    var FrontDriverSideDamageHidden = angular.element(document.querySelector('#FrontDriverSideDamageHidden'));
	    FrontDriverSideDamageHidden.val(appraisal.V_FRONT_DR_SIDE_DAMAGE_DESC);
	    var RearDriverSideDamageHidden = angular.element(document.querySelector('#RearDriverSideDamageHidden'));
	    RearDriverSideDamageHidden.val(appraisal.V_REAR_DR_SIDE_DAMAGE_DESC);
	    var FrontPassengerSideDamageHidden = angular.element(document.querySelector('#FrontPassengerSideDamageHidden'));
	    FrontPassengerSideDamageHidden.val(appraisal.V_FRONT_PASS_SIDE_DAMAGE_DESC);
	    var RearPassengerSideDamageHidden = angular.element(document.querySelector('#RearPassengerSideDamageHidden'));
	    RearPassengerSideDamageHidden.val(appraisal.V_REAR_PASS_SIDE_DAMAGE_DESC);
	    var PaintofFrontDriverSideHidden = angular.element(document.querySelector('#PaintofFrontDriverSideHidden'));
	    PaintofFrontDriverSideHidden.val(appraisal.V_PAINT_FD_SIDE_STATUS_DESC);
	    var PaintonRearDriverSideHidden = angular.element(document.querySelector('#PaintonRearDriverSideHidden'));
	    PaintonRearDriverSideHidden.val(appraisal.V_PAINT_RD_SIDE_STATUS_DESC);
	    var PaintonRearPassengerSideHidden = angular.element(document.querySelector('#PaintonRearPassengerSideHidden'));
	    PaintonRearPassengerSideHidden.val(appraisal.V_PAINT_RP_SIDE_STATUS_DESC);
	    var PaintonFrontPassengerSideHidden = angular.element(document.querySelector('#PaintonFrontPassengerSideHidden'));
	    PaintonFrontPassengerSideHidden.val(appraisal.V_PAINT_FP_SIDE_STATUS_DESC);
	    
}
function setAppraisalValuesToScreen5($scope,appraisal){
	var  WinfShieldDamageDefault = angular.element(document.querySelector('#WinfShieldDamage'));
    WinfShieldDamageDefault.val(appraisal.V_WIND_SHIELD_DAMAGE);
    var TyreConditionDefault = angular.element(document.querySelector('#TyreCondition'));
    TyreConditionDefault.val(appraisal.V_TIRE_CONDITION);
    var ProfessionalOpenionDefault = angular.element(document.querySelector('#ProfessionalOpenion'));
    ProfessionalOpenionDefault.val(appraisal.V_PROFESSIONAL_OPINION);
}

function setAppraisalValuesToScreen6($scope,appraisal){
	year = appraisal.V_VEHICLE_YEAR;
	makeBlackBook= appraisal.V_VEHICLE_MAKE;
	modelBlackBook = appraisal.V_VEHICLE_MODEL;
	series= appraisal.V_VEHICLE_SERIES;
    styleBlackBook= appraisal.V_VEHICLE_STYLE;
   engineType= appraisal.V_ENGINE_TYPE;
    transimissionType= appraisal.V_TRANSMISSION_TYPE;
   vinNumbers= appraisal.V_VIN_NUM;
   miles = appraisal.V_VEHICLE_MILES;
    appendDynamicDataToApprisalSixthScreen();
}
function setAppraisalValuesToScreen7($scope,appraisal){
	angular.element(document.querySelector('#BlackBookNumbers')).val(appraisal.V_BLACK_BOOK_VALUE);
	angular.element(document.querySelector('#TransmissionType')).val(appraisal.V_BLACK_BOOK_VALUE);
	angular.element(document.querySelector('#apparaiseValue')).val(appraisal.V_APPRAISAL_VALUE);
	
	angular.element(document.querySelector('#apprisalYear7')).val(appraisal.V_VEHICLE_YEAR);
	angular.element(document.querySelector('#appraisalMake7')).val(appraisal.V_VEHICLE_MAKE);
	angular.element(document.querySelector('#apprisalModel7')).val(appraisal.V_VEHICLE_MODEL);
	angular.element(document.querySelector('#apprisalSeries7')).val(appraisal.V_VEHICLE_SERIES);
	angular.element(document.querySelector('#apprisalStyle7')).val(appraisal.V_VEHICLE_STYLE);
	
	 angular.element(document.querySelector('#engine_desc7')).val(appraisal.V_ENGINE_TYPE);
	 angular.element(document.querySelector('#transmitionType7')).val(appraisal.V_TRANSMISSION_TYPE);
	 angular.element(document.querySelector('#apprisalRefNumber7')).val(appraisal.V_APPRAISAL_REF);
	 angular.element(document.querySelector('#apprisalMiles7')).val(appraisal.V_VEHICLE_MILES + " MILES ");
}
function setValuesToAppraisalScreen($scope,appraisal){
	console.log("setting values to edit screen");
	angular.element(document.querySelector('#scan_textbox')).val(appraisal.V_VIN_NUM);
	/*angular.element(document.querySelector('#series')).val(appraisal.V_VEHICLE_MODEL + appraisal.V_VEHICLE_SERIES + appraisal.V_VEHICLE_STYLE );
	angular.element(document.querySelector('#model')).val(appraisal.V_VEHICLE_MAKE + appraisal.V_VEHICLE_YEAR);
	angular.element(document.querySelector('#miles')).val(appraisal.V_VEHICLE_MILES);
	angular.element(document.querySelector('#engineType')).val(appraisal.V_ENGINE_TYPE);
	angular.element(document.querySelector('#transimissionType')).val(appraisal.V_TRANSMISSION_TYPE);*/
	
	$scope.vinNumber = appraisal.V_VIN_NUM;
	$scope.model = appraisal.V_VEHICLE_MAKE +" "+ appraisal.V_VEHICLE_YEAR;
	$scope.series = appraisal.V_VEHICLE_MODEL +" "+ appraisal.V_VEHICLE_SERIES +" "+ appraisal.V_VEHICLE_STYLE;
	$scope.miles = appraisal.V_VEHICLE_MILES;
	$scope.engineType = appraisal.V_ENGINE_TYPE;
	$scope.TransmissionType = appraisal.V_TRANSMISSION_TYPE;
	
	$scope.hiddenBlackBookYear = appraisal.V_VEHICLE_YEAR;
	$scope.hiddenBlackBookMake = appraisal.V_VEHICLE_MAKE;
	$scope.hiddenBlackBookModel = appraisal.V_VEHICLE_MODEL;
	$scope.hiddenBlackBookSeries = appraisal.V_VEHICLE_SERIES;
	$scope.hiddenBlackBookStyle = appraisal.V_VEHICLE_STYLE;
	$scope.hiddenBlackBookVal = appraisal.V_BLACK_BOOK_VALUE;
	
	
	/*
	
	
	*/
 //   optionalEquipmentsArray =[];
  //  $scope.vehicleProperties = optionalEquipmentsArray;
}

var skipPopUp ;
function skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL){
       
	skipPopUp  = $ionicPopup.show({ 
		    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>',
		    title: "VIN : " + vinNumbers,
		    subTitle:'' ,
		    scope: $scope,
		     buttons: [
		       { 
		    	   text: 'Save',
		    	   
		    	   onTap: function(e) {
		    		   skipPopUp.close(); 
		 	        	return $scope.FinishAppraisal(APPRAISAL_STATUS_VAL_DRAFT);
		 	        	$state.go('tab.app_home');
		 	         }
		    	   
		      },
		       {
		         text: 'Discard',
		         type: '',
		         onTap: function(e) {
		        	 setHeaderDetails($http);
		        	 setDefaultValuesToAppraisalScreen($scope);
		        	 $state.go('tab.app_home');
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		skipPopUp.close();
	}
		}



function popupForAppraisalActions(action,$ionicPopup,$scope,$http,$state,$compile,url,templateText,title){
	var nextBtn = '',cancelBtn = '';
	if(action == 'rt' || action == "sf"){
		nextBtn = 'Save';cancelBtn = 'Cancel';
	}else if(action == "delete" || action == "inventory"){
		nextBtn = 'Yes';cancelBtn = 'No';
	}
			
	var popupForAppraisaPop  = $ionicPopup.show({ 
		    title: title,
		    subTitle:'' ,
		    scope: $scope,
		    template: templateText,
		     buttons: [
		       { 
		    	   text: nextBtn,
		    	   onTap: function(e) {
		    		   popupForAppraisaPop.close();
		    		   var rtFollowUp = '0';
		    		   if(action == "rt")
		    			   rtFollowUp = angular.element(document.querySelector('#retentionTimemodel')).val();
		    		   else if(action == "sf")
		    			   rtFollowUp = angular.element(document.querySelector('#setFollowupData')).val();
		    		   //var retentionData = prepareDataForRetentionTime(editAppraisalRef,editAppraisalRef,retentionTime,filterObj);
			    		var reqData = preparedataToPopUpCalls(editAppraisalRef,editAppraisalRef,rtFollowUp,action);
		    		     setHeaderDetails($http);
			  			 $http.post(url, reqData)
			  			 .success(function (data, status, headers) {
			  				 console.log(JSON.stringify(data));
			  				 processingSymbol("appraisalDeleteProc","none");
			  				 $state.go('tab.app_home');
			  			})
			      .error(function (data, status, header) {
			    	  processingSymbol("appraisalDeleteProc","none");//toast message
			      });
		 	           popupForAppraisaPop.close(); 
		 	         }
		    	   
		      },
		       {
		         text: cancelBtn,
		         type: '',
		         onTap: function(e) {
		        	 popupForAppraisaPop.close();
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		popupForAppraisaPop.close();
	}
		}



function retentionPopupshow($ionicPopup,$scope,$http,$state,$compile,url){
	var retentionPopup  = $ionicPopup.show({ 
		    title: "Retention Time",
		    subTitle:'' ,
		    scope: $scope,
		    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'HOW LONG WOULD YOU LIKE TO KEEP RECORD?<br><br><center>'
		    	+'<select style = "width: 50%;" id = "retentionTimemodel">'
		    	+'<option value = "60 Days">60 DAYS</option>'
		    	+'<option value = "90 Days">90 DAYS</option>'
		    	+'<option value = "6 Months">6 Months</option>'
		    	+'<option value = "1 Year">1 Year</option>'
		    	+'</select></center>',
		     buttons: [
		       { 
		    	   text: 'Save',
		    	   
		    	   onTap: function(e) {
		    		   retentionPopup.close();
		    		   //var retentionTime = angular.element(document.querySelector('#retentionTimemodel')).val();
		    		   var retentionTime = $scope.retentionTimemodel;
		    		   var retentionData = prepareDataForRetentionTime(editAppraisalRef,editAppraisalRef,retentionTime,filterObj);
			    		 setHeaderDetails($http);
			  			$http.post(url, retentionData)
			  			.success(function (data, status, headers) {
			  				console.log(JSON.stringify(data));
			  				//$state.go('tab.appraisal_home');
			  				 processingSymbol("appraisalDeleteProc","none");
			  				 $state.go('tab.app_home');
			  			})
			      .error(function (data, status, header) {
			    	  processingSymbol("appraisalDeleteProc","none");//toast message
			      });
		 	           retentionPopup.close(); 
		 	         }
		    	   
		      },
		       {
		         text: 'Cancel',
		         type: '',
		         onTap: function(e) {
		        	 retentionPopup.close();
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		retentionPopup.close();
	}
		}


function deleteAppraisalShow($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL,logUrl){
	var retentionPopup  = $ionicPopup.show({ 
		    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'<center>Do You Want To Delete Appraisal? <br>'
		    	+ editAppraisalRef
		    	+'</center>',
		    title: "Delete Appraisal",
		    subTitle:'' ,
		    scope: $scope,
		     buttons: [
		       { 
		    	   text: 'Yes',
		    	   
		    	   onTap: function(e) {
		    		   processingSymbol("appraisalDeleteProc","block");
		    		  var deleteData = prepareDataForDelete(editAppraisalRef,editAppraisalRef);
		    		 setHeaderDetails($http);
		  			$http.post(APPRAISAL_LOG_GET_URL, deleteData)
		  			.success(function (data, status, headers) {
		  				processingSymbol("appraisalDeleteProc","none");
		  				return loadAppraisalLog($http,$scope,$compile,logUrl);
		  				/*console.log(JSON.stringify(data));
		  				//$state.go('tab.appraisal_home');
		  				 */
		  				// $state.go('tab.app_home');
		  			})
		      .error(function (data, status, header) {
		    	  processingSymbol("appraisalDeleteProc","none");//toast message
		      });
		 	       retentionPopup.close(); 
		 	         }
		    	   
		      },
		       {
		         text: 'No',
		         type: '',
		         onTap: function(e) {
		        	 retentionPopup.close();
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		retentionPopup.close();
	}
		}

function setFollowUpToAppraisal($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL){
	var setFollowupPopup  = $ionicPopup.show({ 
		    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'Reminder : <br>'
		    	+'<center><select style = "width: 50%;" id = "setFollowupData">'
		    	+'<option value = "24 Hours">24 Hours</option>'
		    	+'<option value = "No Reminder">No Reminder</option>'
		    	+'<option value = "2 Days">2 Days</option>'
		    	+'<option value = "3 Days">3 Days</option>'
		    	+'</select>'
		    	+'</center>',
		    title: "Set Followup",
		    subTitle:'' ,
		    scope: $scope,
		     buttons: [
		       { 
		    	   text: 'Yes',
		    	   
		    	   onTap: function(e) {
		    		   setFollowupPopup.close();/*
		    		   var setFollw = angular.element(document.querySelector('#setFollowupData')).val();
		    		   processingSymbol("appraisalDeleteProc","block");
		    		  var followupData = prepareDataForFollowup(editAppraisalRef,editAppraisalRef,setFollw,filterObj);
		    		 setHeaderDetails($http);
		  			$http.post(APPRAISAL_LOG_GET_URL, followupData)
		  			.success(function (data, status, headers) {
		  				console.log(JSON.stringify(data));
		  				 processingSymbol("appraisalDeleteProc","none");
		  				 $state.go('tab.app_home');
		  			})
		      .error(function (data, status, header) {
		    	  processingSymbol("appraisalDeleteProc","none");//toast message
		      });
		  			setFollowupPopup.close(); 
		 	         */}
		    	   
		      },
		       {
		         text: 'No',
		         type: '',
		         onTap: function(e) {
		        	 setFollowupPopup.close();
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		setFollowupPopup.close();
	}
		
}
function moveVehicleToInventory($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEH_UPD_INVENTORY_URL){

	var moveToInventoryPopup  = $ionicPopup.show({ 
		    template: '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'<center> Would You Like to Move This Appraisal To Inventory? <br>'
		    	+editAppraisalRef
		    	+'</center>',
		    	
		    title: "Move To Inventory",
		    subTitle:'' ,
		    scope: $scope,
		     buttons: [
		       { 
		    	   text: 'Yes',
		    	   
		    	   onTap: function(e) {
		    		   moveToInventoryPopup.close();/*
		    		   processingSymbol("appraisalDeleteProc","block");
		    		  var moveToInventoryData = prepareDataToMoveInventory(editAppraisalRef,editAppraisalRef,filterObj);
		    		 setHeaderDetails($http);
		  			$http.post(APPRAISAL_VEH_UPD_INVENTORY_URL, moveToInventoryData)
		  			.success(function (data, status, headers) {
		  				console.log(JSON.stringify(data));
		  				 processingSymbol("appraisalDeleteProc","none");
		  				 $state.go('tab.app_home');
		  			})
		      .error(function (data, status, header) {
		    	  processingSymbol("appraisalDeleteProc","none");//toast message
		      });
		  			moveToInventoryPopup.close(); 
		 	         */}
		    	   
		      },
		       {
		         text: 'No',
		         type: '',
		         onTap: function(e) {
		        	 moveToInventoryPopup.close();
		          
		         }
		       },
		     ]
			
		   });
	
	$scope.closePopUp = function()
	{
		moveToInventoryPopup.close();
	}
		

}

function getAppraisalRequestObj(){

    var data = {"RequestHeader": {
   	 "GUID": "21EC2020-3AEA-4069-A2DD-08002B30309D",  // need to dynamic
   	 "UserId": "King", // need to Dynamic
   	 "AppName": platform,
   	 "RequestDateTime": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss')
        },
        "RequestBody":{
            "B_APPRAISAL_REF": appraisalRef,
            "B_VIN_NUMBER": vinNumbers,
            "B_VEHICLE_MAKE": hiddenBlackBookMake,
            "B_VEHICLE_YEAR": hiddenBlackBookYear,
            "B_VEHICLE_MODEL": hiddenBlackBookModel,
            "B_VEHICLE_SERIES": hiddenBlackBookSeries,
            "B_VEHICLE_STYLE": hiddenBlackBookStyle,
            "B_OPTIONAL_EQUIPMENT": selectedValues.toString(),
            "B_ENGINE_TYPE": engineType,
          //  hiddenBlackBookYear = '',hiddenBlackBookModel = '',hiddenBlackBookSeries = '',hiddenBlackBookStyle=''
            "B_TRANSMISSION_TYPE": transimissionType,
            "B_BLACK_BOOK_VALUE": BlackBookNumbers,
            "V_APPRAISAL_REF": appraisalRef,
            "V_VIN_NUM": vinNumbers,
            "V_VEHICLE_MAKE": hiddenBlackBookMake,
            "V_VEHICLE_YEAR": hiddenBlackBookYear,
            "V_VEHICLE_MODEL": hiddenBlackBookModel,
            "V_VEHICLE_SERIES": hiddenBlackBookSeries,
            "V_VEHICLE_STYLE": hiddenBlackBookStyle,
            "V_VEHICLE_MILES": miles,
            "V_OPTIONAL_EQUIPMENT": selectedValues.toString(),
            "V_ENGINE_TYPE": engineType,
            "V_TRANSMISSION_TYPE": transimissionType,
            "V_EXTERIOR_COLOR": exteriorColor,
            "V_TEST_DR_INTERIOR_TYPE":interior,
            "V_TEST_DR_LIGHT_CONDITION":lightCondition,
            "V_TEST_DR_AC_STATUS": acCondition,
            "V_TEST_FRONT_LEFT_WIN_STATUS": frontLeftWinStatus,
            "V_TEST_DR_REAR_LEFT_WIN_STATUS": rearLeftWinStatus,
            "V_TEST_FRONT_RIGHT_WIN_STATUS": frontRightWinStatus,
            "V_TEST_REAR_RIGHT_WIN_STATUS": rearRightWindowStatus,
            "V_TEST_DR_DOOR_LOCK_TYPE": doorLocks,
            "V_TEST_DR_ROOF_TYPE": roof,
            "V_TEST_DR_STEREO_STATUS": sterioStatus,
            "V_TEST_DR_INTERIOR_CONDITION": interiorCondition,
           /* "V_TEST_DR_FRONT_LEFT_IMAGE": frontLeftAngleHidden,
            "V_TEST_DR_FRONT_RIGHT_IMAGE": frontRightAngleHidden,
            "V_TEST_DR_REAR_LEFT_IMAGE": rearLeftAngleHidden,
            "V_TEST_DR_REAR_RIGHT_IMAGE": rearRightAngleHidden,*/
            "V_TEST_DR_FRONT_LEFT_IMAGE": '',
            "V_TEST_DR_FRONT_RIGHT_IMAGE": '',
            "V_TEST_DR_REAR_LEFT_IMAGE": '',
            "V_TEST_DR_REAR_RIGHT_IMAGE": '',
            "V_EXTERIOR_OIL_CONDITION":oilCondition ,
            "V_EXTERIOR_DAMAGE_STATUS": extDamageCheck,
            "V_REAR_DR_SIDE_DAMAGE_STATUS": RearDriverSideDamage,
            "V_FRONT_DR_SIDE_DAMAGE_STATUS": FrontDriverSideDamage,
            "V_REAR_PASS_SIDE_DAMAGE_STATUS": RearPassengerSideDamage,
            "V_FR_PASS_SIDE_DAMAGE_STATUS": FrontPassengerSideDamage,
            "V_REAR_DR_SIDE_DAMAGE_DESC": RearDriverSideDamageHidden,
            "V_FRONT_DR_SIDE_DAMAGE_DESC": FrontDriverSideDamageHidden,
            "V_REAR_PASS_SIDE_DAMAGE_DESC": RearPassengerSideDamageHidden,
            "V_FRONT_PASS_SIDE_DAMAGE_DESC": FrontPassengerSideDamageHidden,
            "V_PAINTWORK_STATUS": paintWorkCheck,
            "V_PAINTWORK_FD_SIDE_STATUS": PaintofFrontDriverSide,
            "V_PAINTWORK_RD_SIDE_STATUS": PaintonRearDriverSide,
            "V_PAINTWORK_FP_SIDE_STATUS": PaintonFrontPassengerSide,
            "V_PAINTWORK_RP_SIDE_STATUS": PaintonRearPassengerSide,
            "V_PAINT_FD_SIDE_STATUS_DESC": PaintofFrontDriverSideHidden,
            "V_PAINT_RD_SIDE_STATUS_DESC":PaintonRearDriverSideHidden ,
            "V_PAINT_FP_SIDE_STATUS_DESC":PaintonFrontPassengerSideHidden ,
            "V_PAINT_RP_SIDE_STATUS_DESC": PaintonRearPassengerSideHidden,
            "V_WIND_SHIELD_DAMAGE": WinfShieldDamage,
            "V_TIRE_CONDITION": TyreCondition,
            "V_PROFESSIONAL_OPINION": ProfessionalOpenion,
            "V_E_SIGN": "",
            "V_WHOLESALE_BUY_FIGURES_STATUS": WHOLESALE_BUY_FIGURES_STATUS,
            "V_BLACK_BOOK_VALUE": hiddenBlackBookVal,
            "V_APPRAISAL_VALUE": Yourvalue,
            "V_APPRAISAL_STATUS": appraisalStatus,
            "V_APPRAISAL_DELETE_STATUS": APPRAISAL_DELETE_STATUS,
            "V_APPRAISAL_INVENTORY_STATUS": APPRAISAL_INVENTORY_STATUS,
            "V_APPRAISAL_FOLLOWUP": APPRAISAL_FOLLOWUP,
            "V_APPRAISAL_RETENSION_TIME": APPRAISAL_RETENSION_TIME,
            "V_CREATED_BY": CREATED_BY,
            "V_CREATED_DATETIME": filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss'),
            "V_MODIFIED_BY": MODIFIED_BY,
            "V_MODIFIED_DATETIME": MODIFIED_DATETIME

}}
    return data;
}

function prepareAppraisalData(){
	if(isAppraisalEdit){
		APPRAISAL_DELETE_STATUS = selectedAppraisal.V_APPRAISAL_DELETE_STATUS;
		APPRAISAL_INVENTORY_STATUS = selectedAppraisal.V_APPRAISAL_INVENTORY_STATUS;
		APPRAISAL_FOLLOWUP = selectedAppraisal.V_APPRAISAL_FOLLOWUP;
		APPRAISAL_RETENSION_TIME = selectedAppraisal.V_APPRAISAL_RETENSION_TIME;
		MODIFIED_BY = CREATED_BY;
		MODIFIED_DATETIME = filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss');
	}
	if(isAppraisalEdit){
		var data = {
				"Header": null,
				"Body": {
					"APPRAISALVEHICLEUPDRequest" : 
						getAppraisalRequestObj()
					}};
	}else{
			var data = {
					"Header": null,
					"Body": {
						"APPRAISALVEHICLECREATERequest" : 
							getAppraisalRequestObj()
						}};
	}
			return data;
}

function setHeaderDetails($http){
	$http.defaults.headers.common['Authorization'] = 'Basic c3Jpbmk6aTBHSGt1VlYqM3M=';
	$http.defaults.headers.common['Oracle-Mobile-Backend-Id'] = 'f89a6870-684b-40e9-87d6-7304af94f4c9';
	$http.defaults.headers.common['Content-Type'] = 'application/json';
	$http.defaults.headers.common['Cache-Control'] = 'no-cache';
	$http.defaults.headers.common['Postman-Token'] = 'be737076-a0bd-0650-8ddb-4a2585830554';
	
}
/* for appending the first screen to sixth screen */
function appendDynamicDataToApprisalSixthScreen()
		{
			var vechicleYear = angular.element(document.querySelector('#apprisalYear'));
			vechicleYear.val(hiddenBlackBookYear);

			var appraisalMake = angular.element(document.querySelector('#appraisalMake'));
			appraisalMake.val(hiddenBlackBookMake);
			
			var apprisalModel = angular.element(document.querySelector('#apprisalModel'));
			apprisalModel.val(hiddenBlackBookModel);
			
			var apprisalSeries = angular.element(document.querySelector('#apprisalSeries'));
			apprisalSeries.val(hiddenBlackBookSeries);
			
		    var apprisalStyle = angular.element(document.querySelector('#apprisalStyle'));
		    apprisalStyle.val(hiddenBlackBookStyle);
		    
		    var engine_desc = angular.element(document.querySelector('#engine_desc'));
		    engine_desc.val(engineType);
		    
		    var transmitionType = angular.element(document.querySelector('#transmitionType'));
		    transmitionType.val(transimissionType);
		    
		    var apprisalRefNumber = angular.element(document.querySelector('#apprisalRefNumber'));
		    apprisalRefNumber.val(vinNumbers);
		    
		    var apprisalMiles = angular.element(document.querySelector('#apprisalMiles'));
		    apprisalMiles.val(miles + " MILES ");
			
			
		}

/* for appending the first screen to seventh screen */		
function appendDynamicDataToApprisalSeventhScreen()
		{
	var vechicleYear = angular.element(document.querySelector('#apprisalYear7'));
	vechicleYear.val(hiddenBlackBookYear);

	var appraisalMake = angular.element(document.querySelector('#appraisalMake7'));
	appraisalMake.val(hiddenBlackBookMake);
	
	var apprisalModel = angular.element(document.querySelector('#apprisalModel7'));
	apprisalModel.val(hiddenBlackBookModel);
	
	var apprisalSeries = angular.element(document.querySelector('#apprisalSeries7'));
	apprisalSeries.val(hiddenBlackBookSeries);
	
    var apprisalStyle = angular.element(document.querySelector('#apprisalStyle7'));
    apprisalStyle.val(hiddenBlackBookStyle);
    
    var engine_desc = angular.element(document.querySelector('#engine_desc7'));
    engine_desc.val(engineType);
    
    var transmitionType = angular.element(document.querySelector('#transmitionType7'));
    transmitionType.val(transimissionType);
    
    var apprisalRefNumber = angular.element(document.querySelector('#apprisalRefNumber7'));
    apprisalRefNumber.val(vinNumbers);
    
    var apprisalMiles = angular.element(document.querySelector('#apprisalMiles7'));
    apprisalMiles.val(miles + " MILES ");
	
    var hiddenBlackBookVal1 = angular.element(document.querySelector('#BlackBookNumbers'));
    hiddenBlackBookVal1.val(hiddenBlackBookVal);
			
		}
		
/* for setting the default values to appraisal screen when, we finish the appraisal */
function setDefaultValuesToAppraisalScreen($scope){
	
	var vinNumbersDefault = angular.element(document.querySelector('#scan_textbox'));
	vinNumbersDefault.val("");
	$scope.model = '';
	$scope.series = '';
	$scope.engineType = '';
	$scope.TransmissionType ='';
	$scope.vehicleProperties = [];
	angular.element(document.querySelector('#miles')).val("");
	
	var hiddenBlackBookValDefault = angular.element(document.querySelector('#hiddenBlackBookVal'));
	hiddenBlackBookValDefault.val("");
	var hiddenBlackBookYearDefault = angular.element(document.querySelector('#hiddenBlackBookYear'));
	hiddenBlackBookYearDefault.val("");
	var hiddenBlackBookModeDefaultl = angular.element(document.querySelector('#hiddenBlackBookModel'));
	hiddenBlackBookModeDefaultl.val("");
	var hiddenBlackBookSeriesDefault = angular.element(document.querySelector('#hiddenBlackBookSeries'));
	hiddenBlackBookSeriesDefault.val("");
	var hiddenBlackBookStyleDefault = angular.element(document.querySelector('#hiddenBlackBookStyle'));
	hiddenBlackBookStyleDefault.val("");
	var hiddenBlackBookMakeDefault = angular.element(document.querySelector('#hiddenBlackBookMake'));
	hiddenBlackBookMakeDefault.val("");
	

    var exteriorColorDefalut = angular.element(document.querySelector('#exteriorColor'));
    exteriorColorDefalut.val("none");
    var interiorDefault = angular.element(document.querySelector('#interior'));
    interiorDefault.val("none");
    var lightConditionDefault = angular.element(document.querySelector('#lightCondition'));
    lightConditionDefault.val("none");
    var acConditionDefault = angular.element(document.querySelector('#acCondition'));
    acConditionDefault.val("none");
    var windowsDefault = angular.element(document.querySelector('#windows'));
    windowsDefault.val("none");
    var doorLocksDefault = angular.element(document.querySelector('#doorLocks'));
    doorLocksDefault.val("none");
    var roofDefault = angular.element(document.querySelector('#roof'));
    roofDefault.val("none");
    var sterioStatusDefault = angular.element(document.querySelector('#sterioStatus'));
    sterioStatusDefault.val("none");
    var interiorConditionDefault = angular.element(document.querySelector('#interiorCondition'));
    interiorConditionDefault.val("none");



  var oilConditionDefault = angular.element(document.querySelector('#oilCondition'));
    oilConditionDefault.val("none");
    var exteriorDamageDefault = angular.element(document.querySelector('#exteriorDamage'));
    exteriorDamageDefault.val("NO");
    var damageDescriptionDefault = angular.element(document.querySelector('#damageDescription'));
    damageDescriptionDefault.val("");


    var FrontDriverSideDamageDefault = angular.element(document.querySelector('#FrontDriverSideDamage'));
    FrontDriverSideDamageDefault.val("NO");
    var RearDriverSideDamageDefault = angular.element(document.querySelector('#RearDriverSideDamage'));
    RearDriverSideDamageDefault.val("NO");
    var FrontPassengerSideDamageDefault = angular.element(document.querySelector('#FrontPassengerSideDamage'));
    FrontPassengerSideDamageDefault.val("NO");
    var RearPassengerSideDamageDefault = angular.element(document.querySelector('#RearPassengerSideDamage'));
    RearPassengerSideDamageDefault.val("NO");
    var PaintofFrontDriverSideDefault = angular.element(document.querySelector('#PaintofFrontDriverSide'));
    PaintofFrontDriverSideDefault.val("NO");
    var PaintonRearDriverSideDefault = angular.element(document.querySelector('#PaintonRearDriverSide'));
    PaintonRearDriverSideDefault.val("NO");
    var PaintonRearPassengerSideDefault = angular.element(document.querySelector('#PaintonRearPassengerSide'));
    PaintonRearPassengerSideDefault.val("NO");
    var PaintonFrontPassengerSideDefault = angular.element(document.querySelector('#PaintonFrontPassengerSide'));
    PaintonFrontPassengerSideDefault.val("NO");


var  WinfShieldDamageDefault = angular.element(document.querySelector('#WinfShieldDamage'));
    WinfShieldDamageDefault.val("none");
    var TyreConditionDefault = angular.element(document.querySelector('#TyreCondition'));
    TyreConditionDefault.val("none");
    var ProfessionalOpenionDefault = angular.element(document.querySelector('#ProfessionalOpenion'));
    ProfessionalOpenionDefault.val("");


    var BlackBookNumbersDefault = angular.element(document.querySelector('#BlackBookNumbers'));
    BlackBookNumbersDefault.val("");
   /* var TransmissionTypeDefault = angular.element(document.querySelector('#TransmissionType'));
    TransmissionTypeDefault.val("");*/
    var YourvalueDefault = angular.element(document.querySelector('#apparaiseValue'));
    YourvalueDefault.val("");
    var RunNum
    Default = angular.element(document.querySelector('#runNumber'));
    YourvalueDefault.val("");
    
    var FrontDriverSideDamageHidden = angular.element(document.querySelector('#FrontDriverSideDamageHidden'));
    FrontDriverSideDamageHidden.val("");
    var RearDriverSideDamageHidden = angular.element(document.querySelector('#RearDriverSideDamageHidden'));
    RearDriverSideDamageHidden.val("");
    var FrontPassengerSideDamageHidden = angular.element(document.querySelector('#FrontPassengerSideDamageHidden'));
    FrontPassengerSideDamageHidden.val("");
    var RearPassengerSideDamageHidden = angular.element(document.querySelector('#RearPassengerSideDamageHidden'));
    RearPassengerSideDamageHidden.val("");
    var PaintofFrontDriverSideHidden = angular.element(document.querySelector('#PaintofFrontDriverSideHidden'));
    PaintofFrontDriverSideHidden.val("");
    var PaintonRearDriverSideHidden = angular.element(document.querySelector('#PaintonRearDriverSideHidden'));
    PaintonRearDriverSideHidden.val("");
    var PaintonRearPassengerSideHidden = angular.element(document.querySelector('#PaintonRearPassengerSideHidden'));
    PaintonRearPassengerSideHidden.val("");
    var PaintonFrontPassengerSideHidden = angular.element(document.querySelector('#PaintonFrontPassengerSideHidden'));
    PaintonFrontPassengerSideHidden.val("");
    
    
    var front_left_Window = angular.element(document.querySelector('#front_left_Window'));
    front_left_Window.val("none");
    var rear_left_Window = angular.element(document.querySelector('#rear_left_Window'));
    rear_left_Window.val("none");
    var front_right_Window = angular.element(document.querySelector('#front_right_Window'));
    front_right_Window.val("none");
    var rear_right_Window = angular.element(document.querySelector('#rear_right_Window'));
    rear_right_Window.val("none");
    
    optionalEquipmentsArray =[];
    $scope.vehicleProperties = optionalEquipmentsArray;
}

/* This method will fetch car details from Black book services */
var makeBlackBook = null,year = null,modelBlackBook = null,series = null,styleBlackBook = null;
function getCarDetailsFromBlackBook($scope,vinNumber,$http,Base64,url,path,$ionicPopup){
	console.log("getCarDetailsFromBlackBook "+ vinNumber);
	if(vinNumber.length >= 17){
		  var loadingImg = angular.element(document.querySelector('#apprialsImgLoadingHome'));
		  loadingImg.css("display","block");
		  
		   /* $scope.model = '';
			$scope.series = '';
			$scope.miles = '';
			$scope.engineType = '';
			$scope.TransmissionType ='';
			$scope.vehicleProperties = [];
			
			angular.element(document.querySelector('#miles')).val('');
			angular.element(document.querySelector('#hiddenBlackBookVal')).val('');
		    angular.element(document.querySelector('#hiddenBlackBookYear')).val('');
		    angular.element(document.querySelector('#hiddenBlackBookModel')).val('');
		    angular.element(document.querySelector('#hiddenBlackBookSeries')).val('');
		    angular.element(document.querySelector('#hiddenBlackBookStyle')).val('');
		    angular.element(document.querySelector('#hiddenBlackBookMake')).val('');*/
		  setDefaultValuesToAppraisalScreen($scope);
		  angular.element(document.querySelector('#scan_textbox')).val(vinNumber);
		  
		var password = "i0GHkuVV*3s";
		var userName = "srini";
		var date = new Date();
		var requiredDate = filterObj('date')(new Date(), 'yyyy-MM-dd')+" "+filterObj('date')(new Date(), 'HH:mm:ss');
		$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode(userName + ':' + password);
		$http.defaults.headers.common['Oracle-Mobile-Backend-Id'] = '3118e571-4942-46f1-b3ae-908e984f37fe';
		$http.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';
		$http.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
		$http.defaults.headers.common['Access-Control-Allow-Headers'] = 'text/html';
		$http.defaults.headers.common['Access-Control-Allow-Credentials'] = 'text/html';
//		if(platform == "browser" || platform == undefined)
//			urls = url+'?guid=21EC2020-3AEA-4069-A2DD-08002B30309D&UserId=sambaiah&AppName=broeser&RequestDateTime='+requiredDate+'&VIN_NUMBER='+vinNumber;
//		else
		urls = 'https://thefactorymcs-a420278.mobileenv.us2.oraclecloud.com/mobile/custom/MCS_BB_OPERATIONS/getVehicleDetails?guid=21EC2020-3AEA-4069-A2DD-08002B30309D&UserId=sambaiah&AppName='+platform+'&RequestDateTime='+requiredDate+'&VIN_NUMBER='+vinNumber
		$http({method: 'GET', url: urls}).
		success(function(data, status, headers, config) {
			console.log(JSON.stringify(data));
			if(status == "200" && data != null && data != undefined && data != ""){
				processingSymbol("apprialsOpenImgLoading","none");
				if(path == 'edit')
					displayBlackBookDataInPopup(data,vinNumber,$ionicPopup);
				else
					loadBlackBookData(data,$scope); 
		}else{
			processingSymbol("apprialsOpenImgLoading","none");
				var loadingImg = angular.element(document.querySelector('#apprialsImgLoadingHome'));
			    loadingImg.css("display","none");
			    isVinValidVal = false;
			    displayErrorPopUp("Black Book Data","","There is a Internal Server Problem, Please try after some time");
			}
		})
		.error(function(data){
			processingSymbol("apprialsOpenImgLoading","none");
			var loadingImg = angular.element(document.querySelector('#apprialsImgLoadingHome'));
		    loadingImg.css("display","none");
		})
		
		
	}
}

/* appraisal screen1 validation */
var vinNumbers= '',model = '',miles = '',engineType = '',transimissionType = '',appraisalRef = '',series='';
var hiddenBlackBookVal = '',hiddenBlackBookYear = '',hiddenBlackBookModel = '',hiddenBlackBookSeries = '',hiddenBlackBookStyle='',hiddenBlackBookMake = '';
function validateAppraisalScreen1(type,$http,$scope){
	
	 vinNumbers = angular.element(document.querySelector('#scan_textbox')).val();
	 model = angular.element(document.querySelector('#model')).val();
	 var series = angular.element(document.querySelector('#series')).val();
	 miles = angular.element(document.querySelector('#miles')).val();
	 engineType = angular.element(document.querySelector('#engineType')).val();
	 transimissionType = angular.element(document.querySelector('#transimissionType')).val();
	 hiddenBlackBookVal = angular.element(document.querySelector('#hiddenBlackBookVal')).val();
	 
	 hiddenBlackBookYear = angular.element(document.querySelector('#hiddenBlackBookYear')).val();
	 hiddenBlackBookModel = angular.element(document.querySelector('#hiddenBlackBookModel')).val();
	 hiddenBlackBookSeries = angular.element(document.querySelector('#hiddenBlackBookSeries')).val();
	 hiddenBlackBookStyle = angular.element(document.querySelector('#hiddenBlackBookStyle')).val();
	 hiddenBlackBookMake = angular.element(document.querySelector('#hiddenBlackBookMake')).val();
	 
	 
	 date = new Date();
	 dateMills = date.getTime();
	 appraisalRef = dateMills+"_"+vinNumbers;
	
	 if(type=="next"){
		  if(vinNumbers=='') {
		   $scope.vinValidate='* VIN is a required field!';
		   return false;
		  }
		  else if(vinNumbers.length < 17){
		   $scope.vinValidate='* VIN Number should be 17digits!';
		   return false;
		   
		  }
		  else{
		   //console.log("VIN is not null");
		   $scope.vinValidate='';
		  }
		  
		  if(model=='') {
		   //console.log("Model is null");
		   $scope.modelValidate='* Model is a required field!';
		   return false;
		  }
		  else {
		   //console.log("Model is not null");
		   $scope.modelValidate='';
		  }
		  
		  if(series=='') {
		   //console.log("Series is null");
		   $scope.seriesValidate='* Series is a required field!';
		   return false;
		  }
		  else {
		   //console.log("Series is not null");
		   $scope.seriesValidate='';
		  }
		  
		  var phoneno = /^[0-9]+$/;  
		  if(miles=='') {
		   //console.log("Miles is null");
		   $scope.milesValidate='* Miles is a required field!';
		   
		   return false;
		  }
		  else if(miles.match(phoneno)) {
		   
		   //console.log("Miles2 is null");
		   $scope.milesValidate='';
		   
		  }
		  else {
		   //console.log("Miles is not null");
		   $scope.milesValidate='* Please enter numeric values!';
		   return false;
		  }
		  if(engineType=='') {
		   //console.log("Engine Type is null");
		   $scope.engTypeValidate='* Engine type is a required field!';
		   return false;
		  }
		  else {
		   //console.log("Engine Type is not null");
		   $scope.engTypeValidate='';
		  }
		  
		  if(transimissionType=='') {
		   //console.log("Transmission Type is null");
		   $scope.transTypeValidate='* Transmission type is a required field!';
		   return false;
		  }
		  else {
		   //console.log("Transmission Type is not null");
		   $scope.transTypeValidate='';
		  }
		  return true;
		 } else {
		  return true;
		 }
}
var exteriorColor = '', interior = '', roof = '', sterioStatus = '', interiorCondition = '',acCondition = '',doorLocks = '',lightCondition = '';
var frontLeftWinStatus = '',rearLeftWinStatus = '',frontRightWinStatus = '',rearRightWindowStatus = '';
function validateAppraisalScreen2(type,$http,$scope){
     exteriorColor = angular.element(document.querySelector('#exteriorColor')).val();
     interior = angular.element(document.querySelector('#interior')).val();
     lightCondition = angular.element(document.querySelector('#lightCondition')).val();
     acCondition = angular.element(document.querySelector('#acCondition')).val();
     doorLocks = angular.element(document.querySelector('#doorLocks')).val();
    
     roof = angular.element(document.querySelector('#roof')).val();
     sterioStatus = angular.element(document.querySelector('#sterioStatus')).val();
     interiorCondition = angular.element(document.querySelector('#interiorCondition')).val();
     
     frontLeftWinStatus = angular.element(document.querySelector('#front_left_Window')).val();
     rearLeftWinStatus = angular.element(document.querySelector('#rear_left_Window')).val();
     frontRightWinStatus = angular.element(document.querySelector('#front_right_Window')).val();
     rearRightWindowStatus = angular.element(document.querySelector('#rear_right_Window')).val();
     
     if(type=="next"){
         if(exteriorColor=='none') {
       //console.log("Exterior Colour is null");
       $scope.extColourValidate='* Exterior colour is a required field!';
       return false;
      }
      else {
       //console.log("Exterior Colour is not null");
       $scope.extColourValidate='';
      }
      
      if(interior=='none') {
       //console.log("Interior is null");
       $scope.interiorValidate='* Interior is a required field!';
       return false;
      }
      else {
       //console.log("Interior is not null");
       $scope.interiorValidate='';
      }
      
      if(lightCondition=='none') {
       //console.log("Light Condition is null");
       $scope.liConValidate='* Light condition is a required field!';
       return false;
      }
      else {
       //console.log("Light Condition is not null");
       $scope.liConValidate='';
      }
      
      if(acCondition=='none') {
       //console.log("AC Condition is null");
       $scope.acValidate='* AC condition is a required field!';
       return false;
      }
      else {
       //console.log("AC Condition is not null");
       $scope.acValidate='';
      }
      
     
      
      if(doorLocks=='none') {
       //console.log("Door Locks is null");
       $scope.doorLocksValidate='* Door Locks is a required field!';
       return false;
      }
      else {
       //console.log("Door Locks is not null");
       $scope.doorLocksValidate='';
      }
      
      if(roof=='none') {
       //console.log("Roof is null");
       $scope.roofValidate='* Select roof is a required field!';
       return false;
      }
      else {
       //console.log("Roof is not null");
       $scope.roofValidate='';
      }
      
      if(sterioStatus=='none') {
       //console.log("sterioStatus is null");
       $scope.stereoStatusValidate='* Stereo status is a required field!';
       return false;
      }
      else {
       //console.log("sterioStatus is not null");
       $scope.stereoStatusValidate='';
      }
      
      if(interiorCondition=='none') {
       $scope.interiorConditionValidate='* Interior condition is a required field!';
       return false;
      }
      else {
       $scope.interiorConditionValidate='';
      }
      if(frontLeftWinStatus=='none') {
          $scope.windowsValidate1='* Front Left Window Status is a required field!';
          return false;
         }
         else {
          $scope.windowsValidate1='';
         }
      
      if(rearLeftWinStatus=='none') {
          $scope.windowsValidate2='* Rear Left Window Status is a required field!';
          return false;
         }
         else {
          $scope.windowsValidate2='';
         }
      
      if(frontRightWinStatus=='none') {
          $scope.windowsValidate3='* Front Right Window Status is a required field!';
          return false;
         }
         else {
          $scope.windowsValidate3='';
         }
      
      if(rearRightWindowStatus=='none') {
          $scope.windowsValidate4='* Rear Right Window Status is a required field!';
          return false;
         }
         else {
          $scope.windowsValidate4='';
         }
      return true;
         }else {
       return true;
      }
}


var  frontLeftAngleHidden = '',frontRightAngleHidden = '', rearLeftAngleHidden = '',rearRightAngleHidden = '',exteriorDamage = '', oilCondition = '';
function validateAppraisalScreen3(type,$http,$scope){
     frontLeftAngleHidden = angular.element(document.querySelector('#frontLeftAngleHidden')).val();
     frontRightAngleHidden = angular.element(document.querySelector('#frontRightAngleHidden')).val();
     rearLeftAngleHidden = angular.element(document.querySelector('#rearLeftAngleHidden')).val();
     rearRightAngleHidden = angular.element(document.querySelector('#rearRightAngleHidden')).val();
     oilCondition = angular.element(document.querySelector('#oilCondition')).val();
     if(type=="next"){
    	    if(oilCondition=='none') {
    	      //console.log("oilCondition is null");
    	      $scope.oilConditionValidate='* Oil Condition is a required feild!';
    	      return false;
    	     }
    	     else {
    	      //console.log("oilCondition is not null");
    	      $scope.oilConditionValidate='';
    	     }
    	    return true;
    	    }else {
    	  return true;
    	 }
}

var FrontDriverSideDamage = '',RearDriverSideDamage = '', FrontPassengerSideDamage = '', RearPassengerSideDamage = '', PaintofFrontDriverSide = '', PaintonRearDriverSide = '', PaintonRearPassengerSide = '', PaintonFrontPassengerSide = '';
var FrontDriverSideDamageHidden = '',RearDriverSideDamageHidden='',FrontPassengerSideDamageHidden='',RearPassengerSideDamageHidden='';
var PaintofFrontDriverSideHidden='',PaintonRearDriverSideHidden='',PaintonRearPassengerSideHidden='',PaintonFrontPassengerSideHidden='';
function validateAppraisalScreen4(type,$http,$scope){
	FrontDriverSideDamage = angular.element(document.querySelector('#FrontDriverSideDamage')).val();
    RearDriverSideDamage = angular.element(document.querySelector('#RearDriverSideDamage')).val();
    FrontPassengerSideDamage = angular.element(document.querySelector('#FrontPassengerSideDamage')).val();
    RearPassengerSideDamage = angular.element(document.querySelector('#RearPassengerSideDamage')).val();
    PaintofFrontDriverSide = angular.element(document.querySelector('#PaintofFrontDriverSide')).val();
    PaintonRearDriverSide = angular.element(document.querySelector('#PaintonRearDriverSide')).val();
    PaintonRearPassengerSide = angular.element(document.querySelector('#PaintonRearPassengerSide')).val();
    PaintonFrontPassengerSide = angular.element(document.querySelector('#PaintonFrontPassengerSide')).val();
    
    FrontDriverSideDamageHidden = angular.element(document.querySelector('#FrontDriverSideDamageHidden')).val();
    RearDriverSideDamageHidden = angular.element(document.querySelector('#RearDriverSideDamageHidden')).val();
    FrontPassengerSideDamageHidden = angular.element(document.querySelector('#FrontPassengerSideDamageHidden')).val();
    RearPassengerSideDamageHidden = angular.element(document.querySelector('#RearPassengerSideDamageHidden')).val();
   
    PaintofFrontDriverSideHidden = angular.element(document.querySelector('#PaintofFrontDriverSideHidden')).val();
    PaintonRearDriverSideHidden = angular.element(document.querySelector('#PaintonRearDriverSideHidden')).val();
    PaintonRearPassengerSideHidden = angular.element(document.querySelector('#PaintonRearPassengerSideHidden')).val();
    PaintonFrontPassengerSideHidden = angular.element(document.querySelector('#PaintonFrontPassengerSideHidden')).val();
    
    var extDamageChecked = false;
     var paintWorkChecked = false;
     
   var flag1 = false,flag2=false,flag3=false,flag4=false,flag5=false,flag6=false,flag7=false,flag8=false;
     
     if(type=="next"){
           //  //alert(FrontDriverSideDamage);
             if(FrontDriverSideDamage == "YES"){
                   if(FrontDriverSideDamageHidden == null || FrontDriverSideDamageHidden == "" || FrontDriverSideDamageHidden == undefined){
                         
                         $scope.frontDriverSideDamageValidate ="*Please enter some description";
                         $scope.frontDriverSideDamageErrorShow = true;
                        // return false;
                         flag1 = false;
                   }else{
                         $scope.frontDriverSideDamageValidate = "";
                 
                         flag1 = true;
                   }
              }else{
                    flag1 = true;
                    $scope.frontDriverSideDamageErrorShow = false;
                   $scope.FrontDriverSideDamageHidden = "";
             }
             
             if(RearDriverSideDamage == "YES"){
                   if(RearDriverSideDamageHidden == null || RearDriverSideDamageHidden == "" || RearDriverSideDamageHidden == undefined){
                         
                         $scope.RearDriverSideDamageValidate ="*Please enter some description";
                         $scope.RearDriverSideDamageErrorShow = true;
                       //return false;
                         flag2 = false;
                   }else{
                         $scope.RearDriverSideDamageValidate = "";
                         flag2 = true;
                   }
              }else{
                    $scope.RearDriverSideDamageErrorShow = false;
                   $scope.RearDriverSideDamageHidden = "";
                   flag2 = true;
             }
             if(FrontPassengerSideDamage == "YES"){
                   if(FrontPassengerSideDamageHidden == null || FrontPassengerSideDamageHidden == "" || FrontPassengerSideDamageHidden == undefined){
                         
                         $scope.FrontPassengerSideDamageValidate ="*Please enter some description";
                         $scope.FrontPassengerSideDamageErrorShow = true;
                       //  return false;
                         flag3 = false;
                   }else{
                         $scope.FrontPassengerSideDamageValidate = "";
                       
                        flag3 = true;
                   }
             }else{
                   $scope.FrontPassengerSideDamageHidden = "";
                   $scope.FrontPassengerSideDamageErrorShow = false; 
                   flag3 = true;
             }
             
             if(RearPassengerSideDamage == "YES"){
                   if(RearPassengerSideDamageHidden == null || RearPassengerSideDamageHidden == "" || RearPassengerSideDamageHidden == undefined){
                         
                         $scope.RearPassengerSideDamageValidate =" *Please enter some description";
                         $scope.RearPassengerSideDamageErrorShow = true;
                       //  return false;
                         flag4 = false;
                   }else{
                         $scope.RearPassengerSideDamageValidate = "";
                       
                        flag4 = true;
                   }
                   
             }else{
                   $scope.RearPassengerSideDamageHidden = "";
                   $scope.RearPassengerSideDamageErrorShow = false;
                  flag4 = true;
             }
             
           
             if(PaintofFrontDriverSide == "YES"){
                   if(PaintofFrontDriverSideHidden == null || PaintofFrontDriverSideHidden == "" || PaintofFrontDriverSideHidden == undefined){
                         
                         $scope.PaintofFrontDriverSideValidate =" *Please enter some description";
                         $scope.PaintofFrontDriverSideErrorShow = true;
                       //  return false;
                         flag5 = false;
                   }else{
                         $scope.PaintofFrontDriverSideValidate = "";
                       
                        flag5 = true;
                   }
                   
             }else{
                   $scope.PaintofFrontDriverSideValidate = "";
                   $scope.PaintofFrontDriverSideErrorShow = false;
                  flag5 = true;
             }
             
             if(PaintonRearDriverSide == "YES"){
                   if(PaintonRearDriverSideHidden == null || PaintonRearDriverSideHidden == "" || PaintonRearDriverSideHidden == undefined){
                         
                         $scope.PaintonRearDriverSideValidate =" *Please enter some description";
                         $scope.PaintonRearDriverSideErrorShow = true;
                       //  return false;
                         flag6 = false;
                   }else{
                         $scope.PaintonRearDriverSideValidate = "";
                       flag6 = true;
                        
                   }
                   
             }else{
                   $scope.PaintonRearDriverSidealidate = "";
                   $scope.PaintonRearDriverSideErrorShow = false;
                  flag6 = true;
             }
             
             
             if(PaintonRearPassengerSide == "YES"){
                   if(PaintonRearPassengerSideHidden == null || PaintonRearPassengerSideHidden == "" || PaintonRearPassengerSideHidden == undefined){
                         
                         $scope.PaintonRearPassengerSideValidate =" *Please enter some description";
                         $scope.PaintonRearPassengerSideErrorShow = true;
                 //      return false;
                         flag7 = false;
                   }else{
                         $scope.PaintonRearPassengerSideValidate = "";
                       flag7 = true;
                        
                   }
                   
             }else{
                   $scope.PaintonRearPassengerSideValidate = "";
                   $scope.PaintonRearPassengerSideErrorShow = false;
                  flag7 = true;
             }
             
             if(PaintonFrontPassengerSide == "YES"){
                   if(PaintonFrontPassengerSideHidden == null || PaintonFrontPassengerSideHidden == "" || PaintonFrontPassengerSideHidden == undefined){
                         
                         $scope.PaintonFrontPassengerSideValidate =" *Please enter some description";
                         $scope.PaintonFrontPassengerSideErrorShow = true;
                 //      return false;
                         flag8 = false;
                   }else{
                         $scope.PaintonFrontPassengerSideValidate = "";
                       flag8 = true;
                        
                   }
                   
             }else{
                   $scope.PaintonFrontPassengerSideValidate = "";
                   $scope.PaintonFrontPassengerSideErrorShow = false;
                  flag8 = true;
             }
       
             if(flag1 == true && flag2 == true&& flag3 == true&& flag4 == true
                         && flag5 == true&& flag6 == true&& flag7 == true&& flag8 == true){
                   //return 
             }else{
                   return false;
             }
       
   
     console.log("exteriorDamageCheck"+extDamageChecked);
     console.log("paintWorkCheck"+paintWorkChecked);
     
    /* if(extDamageChecked) {
     // $scope.damageValidate="*Please describe at least one damage";
    
     }
     else {
  //    $scope.damageValidate="";
      
     }
     
     if(paintWorkChecked) {
   //   $scope.paintValidate="*Please describe at least one paint work";
     }
     else {
//      $scope.paintValidate="";
     }*/
     
   
     if(extDamageChecked) {
      return false;
     }
     else if(paintWorkChecked) {
      return false;
     }
     else {
      return true;
     }
     }else {
   return true;
  }

}

var WinfShieldDamage = '', TyreCondition = '', ProfessionalOpenion = '';
function validateAppraisalScreen5(type,$http,$scope){
     WinfShieldDamage = angular.element(document.querySelector('#WinfShieldDamage')).val();
     TyreCondition = angular.element(document.querySelector('#TyreCondition')).val();
     ProfessionalOpenion = angular.element(document.querySelector('#ProfessionalOpenion')).val();
    
     if(type=="next"){
         if(WinfShieldDamage=='none') {
       //console.log("Winf Shield Damage is null");
       $scope.WinfShieldDamageValidate='* Winf Shield Damage is a required field!';
       return false;
      }
      else {
       //console.log("Winf Shield Damage is not null");
       $scope.WinfShieldDamageValidate='';
      }
      if(TyreCondition=='none') {
       //console.log("Tire Condition is null");
       $scope.TyreConditionValidate='* Tire Condition is a required field!';
       return false;
      }
      else {
       //console.log("Tire Condition is not null");
       $scope.TyreConditionValidate='';
      }
      return true;
         }else {
       return true;
      }
}

var WHOLESALE_BUY_FIGURES_STATUS = 'No';
function validateAppraisalScreen6(type,$http,$scope){
	if(type == "next")
		WHOLESALE_BUY_FIGURES_STATUS = "Yes";
}

var BlackBookNumbers = '',Yourvalue = '';
function validateAppraisalScreen7(type,$http,$scope){
	 //console.log("validateAppraisalScreen7");
     BlackBookNumbers = angular.element(document.querySelector('#BlackBookNumbers')).val();
     Yourvalue = angular.element(document.querySelector('#apparaiseValue')).val();
     
     var apraisalValRegEx = /^(?=.*\d)\d*(?:\.\d+)?$/;
     
     if( angular.element(document.querySelector('#apparaiseValue')).val()=='') {
         $scope.YourvalueValidate='*Appraise Value is a required field';
         return false;
        }
        else {
         $scope.YourvalueValidate='';
        } 
     if((Yourvalue.match(apraisalValRegEx)))  
     {          
      $scope.YourvalueValidate=''
       return true;  
     }  
     else  
     {  
         
        $scope.YourvalueValidate='*Please enter a numeric value!';
        return false;  
     }
}

/* for loading the appraisal log data from serverfblack */
function loadAppraisalLog($http,$scope,$compile,url){
	var loadingImg = angular.element(document.querySelector('#apprialsImgLoading'));
	  loadingImg.css("display","block");
		$http.get(url+"GUID=&UserId=king&AppName="+platform+"&RequestDateTime=&rangestart=0&rangeend=10")
	      .success(function (data, status, headers,request,response,header) {
	    	 // console.log(JSON.stringify(data));
	    	  var apprialsText= angular.element(document.querySelector('#apprialsHeadingText'));
	    	  apprialsText.html(" ");
	    	  var logImgUrlData = angular.element( document.querySelector( '#apprialsData' ) ).html(" ");
	    	  if(data!=null && data != undefined && data != '' && status == "200"){
	    		  appendAppraisalLogsToView(data,$scope,$compile,apprialsText,logImgUrlData);
	    	  }else if(status == "500"){
				 $scope.apprisalLogText=["Apprails Logs are not available"];
				 processingSymbol("apprialsImgLoading","none");
	    		 displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");return;

	    	  }
	    	  else{
	    		  $scope.apprisalLogText=["Apprails Logs are not available"];
	    		  processingSymbol("apprialsImgLoading","none");
	    		  displayErrorPopUp("Black Book Data","","No Logs To Display");return;
	    	  }
	      })
	      .error(function (data, status, header) {
	    	  processingSymbol("apprialsImgLoading","none");
	    	  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");return;
	      });
}

angular.module('starter.controllers', [])
.constant('ApiEndpoint', {
  url: 'http://localhost:8100/blocbbook'
})
.constant('ApprasalEndPointLocation', {
  url: 'http://204.14.55.130:8011/TFCLOUD/RestService'
})
.constant('ORACLE_HOST_ADDRESS', {
  url: 'https://thefactorymcs-a420278.mobileenv.us2.oraclecloud.com:443'
})
.constant('APPRAISAL_CREATE_PATH', {
  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_CREATE/create'
})
.constant('APPRAISAL_LOG_PAGINATION', {
  url: '/mobile/custom/MCS_APPRAISE_VEHICLE_READ_PAG/VEHICLEREADPAG?'
})
.constant('APPRAISAL_VIEW_BY_VIN', {
  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_READ/VEHICLEREAD?'
})
.constant('APPRAISAL_VEHICLE_UPDATE_RETENTIONTIME', {
  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_READ/VEHICLEREAD?'
})
.constant('APPRAISAL_VEHICLE_DELETE', {
	  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_DELETE/delete'
})
.constant('APPRAISAL_VEH_UPD_RETENTTIME', {
	  url: '/mobile/custom/MCS_APPRAISAL_VEH_UPD_RETENTTIME/updateRetentionTime'
})
.constant('APPRAISAL_VEHICLE_UPD_FOLLOWUP', {
	  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_UPD_FOLLOWUP/update'
})
.constant('APPRAISAL_VEH_UPD_INVENTORY', {
	  url: '/mobile/custom/MCS_APPRAISAL_VEH_UPD_INVENTORY/updateInventory'
})
.constant('SEARCH_APPRAISAL_MAKE', {
  url: '/mobile/custom/MCS_APP_VEH_READ_MODEL_MAKE/getVehicleMake?'
})
.constant('SEARCH_APPRAISAL_SALESMAN', {
  url: '/mobile/custom/MCS_APP_VEH_READ_SALESMAN_VIEW/getSalesManDetails?'
})
.constant('SEARCH_APPRAISAL_MODEL', {
  url: '/mobile/custom/MCS_APP_VEH_READ_MODEL_VIEW_PAG/getModelValues?'
})
.constant('APPRAISAL_VEHICLE_UPDATE', {
	  url: '/mobile/custom/MCS_APPRAISAL_VEHICLE_UPDATE/update'
	})
.factory('Base64', function() {
    var keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                ////console.log("There were invalid base64 characters in the input text.\n" +
                 //       "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                  //      "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };
})
.factory('AppraisalServices', function($http) {
    return {
      updateAppraisal: function(data) {
         return $http.post('https://thefactorymcs-a420278.mobileenv.us2.oraclecloud.com:443/mobile/custom/MCS_APPRAISAL_VEHICLE_UPDATE/update ' + data);
      }
    }
 })
.controller('AppraisalController', function($scope,$ionicSideMenuDelegate, $ionicLoading, $state, 
		$stateParams,$http,Base64,ApiEndpoint,$ionicPopup,$compile,$cordovaCamera,ApprasalEndPointLocation,
		ORACLE_HOST_ADDRESS,APPRAISAL_CREATE_PATH,APPRAISAL_LOG_PAGINATION,APPRAISAL_VIEW_BY_VIN,
		$timeout,APPRAISAL_VEHICLE_DELETE,APPRAISAL_VEHICLE_UPD_FOLLOWUP,APPRAISAL_VEH_UPD_INVENTORY,
		APPRAISAL_VEH_UPD_RETENTTIME,SEARCH_APPRAISAL_MAKE,SEARCH_APPRAISAL_SALESMAN,SEARCH_APPRAISAL_MODEL,
		$ionicScrollDelegate,$ionicHistory,$filter,AppraisalServices,APPRAISAL_VEHICLE_UPDATE) {
	filterObj = $filter;
	ionicPopup = $ionicPopup;
	timeout = $timeout;
	
	var APPRAISAL_LOG_GET_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_LOG_PAGINATION.url;
	var APPRAISAL_VIEW_BY_VIN_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VIEW_BY_VIN.url;
	var APPRAISAL_VEHICLE_DELETE_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VEHICLE_DELETE.url;
	var APPRAISAL_LOG_RETENTION_TIME_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VEHICLE_DELETE.url;
	var APPRAISAL_VEHICLE_UPD_FOLLOWUP_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VEHICLE_UPD_FOLLOWUP.url;
	var APPRAISAL_VEH_UPD_INVENTORY_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VEH_UPD_INVENTORY.url;
	var APPRAISAL_VEH_UPD_RETENTTIME_URL = ORACLE_HOST_ADDRESS.url+APPRAISAL_VEH_UPD_RETENTTIME.url;
	
	var SEARCH_APPRAISAL_MAKE_URL = ORACLE_HOST_ADDRESS.url + SEARCH_APPRAISAL_MAKE.url;
	var SEARCH_APPRAISAL_SALESMAN_URL = ORACLE_HOST_ADDRESS.url + SEARCH_APPRAISAL_SALESMAN.url;
	var SEARCH_APPRAISAL_MODEL_URL = ORACLE_HOST_ADDRESS.url + SEARCH_APPRAISAL_MODEL.url;
	
	APPRAISAL_VEHICLE_UPDATE_URL = ORACLE_HOST_ADDRESS.url + APPRAISAL_VEHICLE_UPDATE.url;
	
	$ionicScrollDelegate.scrollTop();  // to scrole th epage top
	    
	
	/* for maintaining the selected data start */
	$scope.$on('$ionicView.beforeLeave', function(){
		previousUrl = currentUrl;
		currentUrl = $state.current.url;
		//console.log("Current Url : " + currentUrl + " \nPrevious Url : " + previousUrl);
		if($state.current.url == "/appraisal_home" && vinNumbers != '' ){
			setChangedValuesToScr2();
		}
		if(currentUrl == "/appraisal_scr2" && previousUrl == "/appraisal_scr3"){
			setChangedValuesToScr3();
		}
		if(currentUrl == "/appraisal_scr3" && previousUrl == "/appraisal_scr4"){
			setChangedValuesToScr4();
		}
		if(currentUrl == "/appraisal_scr4" && previousUrl == "/appraisal_scr5"){
			setChangedValuesToScr5();
		}
		if(currentUrl == "/appraisal_scr6" && previousUrl == "/appraisal_scr7"){
			setChangedValuesToScr7();
		}
		});
	/* for maintaining the selected data end */
		$scope.$on("$ionicView.enter", function(event, data,viewInfo, state){
		  if($state.current.url == "/app_home"){
			  //$ionicHistory.clearCache();
			  //$ionicHistory.clearHistory();
			  console.log("Home Page");
			  setHeaderDetails($http);
			  if(isAppraisalLogLoad == true && $state.current.url == "/app_home")
					loadAppraisalLog($http,$scope,$compile,APPRAISAL_LOG_GET_URL);
			    data.enableBack = true;
			    searchAppraisalYear($scope);
			    getSearchSalesManDetails($scope,$http,SEARCH_APPRAISAL_SALESMAN_URL);
			    getSearchModelValues($scope,$http,SEARCH_APPRAISAL_MODEL_URL);
			    setDefaultValuesToAppraisalScreen($scope);
		  }else if($state.current.url == "/appraisal_home"){
			  console.log("appraisal_home");
			  optionalEquipmentsArray =[];
			   if(isAppraisalEdit){
				   setValuesToAppraisalScreen($scope,selectedAppraisal);
			   }
			  if(!isAppraisalEdit){  
				  $scope.vehicleProperties = optionalEquipmentsArray;
				/*  var vinNumber = angular.element(document.querySelector('#scan_textbox')).val();
					if(vinNumber != undefined)
						if(vinNumber.length >= 17)
						   getCarDetailsFromBlackBook($scope,vinNumber,$http,Base64,ApiEndpoint.url,'',$ionicPopup,filterObj);
*/			  }
		  }else if($state.current.url == "/appraisal_scr2"){
			  if(isAppraisalEdit)
				  setAppraisalValuesToScreen2($scope,selectedAppraisal);
			  if(apCreate2)
				  setSelectedValuesToScr2($scope);
			}else if($state.current.url == "/appraisal_scr3"){
			  if(isAppraisalEdit)
				  setAppraisalValuesToScreen3($scope,selectedAppraisal);
			  if(apCreate3)
				  setSelectedValuesToScr3($scope);
			}else if($state.current.url == "/appraisal_scr4"){
			  if(isAppraisalEdit)
				  setAppraisalValuesToScreen4($scope,selectedAppraisal);
			  if(apCreate4)
				  setSelectedValuesToScr4($scope);
			}else if($state.current.url == "/appraisal_scr5"){
		  if(isAppraisalEdit)
			  setAppraisalValuesToScreen5($scope,selectedAppraisal);
		  if(apCreate5)
			  setSelectedValuesToScr5($scope);
			}else if($state.current.url == "/appraisal_scr6"){
		  if(isAppraisalEdit)
			  setAppraisalValuesToScreen6($scope,selectedAppraisal);
		  
			  appendDynamicDataToApprisalSixthScreen();
		  }
		  else if($state.current.url == "/appraisal_scr7"){
			  if(isAppraisalEdit)
				  setAppraisalValuesToScreen7($scope,selectedAppraisal);
			  if(apCreate7)
				  setSelectedValuesToScr7($scope);
			  appendDynamicDataToApprisalSeventhScreen(); 
		  } else if($state.current.url == "/appraisal_view"){
			  setValuesToAppraisalScreen($scope,selectedAppraisal);
			  setAppraisalValuesToScreen2($scope,selectedAppraisal);
			  setAppraisalValuesToScreen3($scope,selectedAppraisal);
			  setAppraisalValuesToScreen4($scope,selectedAppraisal);
			  setAppraisalValuesToScreen5($scope,selectedAppraisal);
			  setAppraisalValuesToScreen6($scope,selectedAppraisal);
			  setAppraisalValuesToScreen7($scope,selectedAppraisal);
			 
		  }
		   var vinNumber = angular.element(document.querySelector('#scan_textbox')).val();
		});

	$scope.getVINNumber = function() {
		////console.log("VIN Capsuring Started...");
	};
	
	$scope.isBrowser = function() {
		if(platform == "browser")
			return false;
		else 
			return true;
	};
	
	$scope.isRequired = function() {
		if(platform == "browser")
			return true;
		else 
			return false;
	};
	
	
	/*$scope.vehicleProperties=[{name:'NAVIGATION',  selected: false},
						{name:'HEATED SEATS',  selected: false},
						{name:'HEADS UP DISPLAY',  selected: false},
						{name:'CORDON FIBER TRIM',  selected: false},
						{name:'COLD WHEATHERE PCG',  selected: false}];*/
	
	
	
	$scope.selectionOfVechicleProperties=[];
	// toggle selection for a given vehicleProperties by name
	$scope.toggleSelection = function toggleSelection(vehiclePropertyName) {
   var valueOfIndex = $scope.selectionOfVechicleProperties.indexOf(vehiclePropertyName);
 

   // is currently selected
   if (valueOfIndex > -1) {
     $scope.selectionOfVechicleProperties.splice(valueOfIndex, 1);
     selectedValues.splice(valueOfIndex, 1);
   }

   else {
     $scope.selectionOfVechicleProperties.push(vehiclePropertyName);
     selectedValues.push(vehiclePropertyName);
   }
 };

	// from log to create new appraisal page
 $scope.createNewAppraisal = function() {
	  //console.log("new_appraisal");
	 isAppraisalLogLoad = false;
	 isAppraisalEdit = false;
	   $state.go('tab.appraisal_home');
	 };
	 //Screen one navigation
	 $scope.goToTestDriveFromAppraisalHome = function() {
	  //console.log("one");
	  var status = validateAppraisalScreen1('next',$http,$scope);
	  if(status) {
		  $state.go('tab.appraisal_scr2');
	  }
	 };
	 $scope.skipFromAppraisalHome = function(formName) {
	  //console.log("one");
	  var status = validateAppraisalScreen1('skip',$http,$scope);
	  skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL);
	     //$state.go('tab.appraisal_scr2');
	 };
	 //Screen two navigation
	 $scope.gotoApScreen3FromScreen2 = function() {
	  var status = validateAppraisalScreen2('next',$http,$scope);
	     if(status) {
	      $state.go('tab.appraisal_scr3');
	     }
	 };
	 $scope.skipFromAppraisalScreen2 = function() {
	  //console.log("two");
	  var status = validateAppraisalScreen2('skip',$http,$scope);
	  skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL);
	    // $state.go('tab.appraisal_scr3');
	 };
	 //screen three navigation
	 $scope.gotoApScreen4FromScreen3 = function() {
	  //console.log("three");
	  var status = validateAppraisalScreen3('next',$http,$scope);
	  if(status) {
	   $state.go('tab.appraisal_scr4');
	  }
	 };
	 $scope.skipFromAppraisalScreen3 = function() {
	  //console.log("three");
	  var status = validateAppraisalScreen3('skip',$http,$scope);
	  skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL);
	     //$state.go('tab.appraisal_scr4');
	 };
	 $scope.gotoApScreen5FromScreen4 = function() {
	    //console.log("four");
	    var status = validateAppraisalScreen4('next',$http,$scope);
	    if(status) {
	     $state.go('tab.appraisal_scr5');
	    }
	    else {
	     
	    }
	   
	   };
	   $scope.skipFromAppraisalScreen4 = function() {
	    //console.log("four");
	    validateAppraisalScreen4('skip',$http,$scope);
	    skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL);
	   };
	 $scope.gotoApScreen6FromScreen5 = function() {
	  //console.log("five");
	  var status = validateAppraisalScreen5('next',$http,$scope);
	     if(status) {
	      $state.go('tab.appraisal_scr6');
	     }
	 };
	 $scope.skipFromAppraisalScreen5 = function() {
	  //console.log("five");
	  var status = validateAppraisalScreen5('skip',$http,$scope);
	  skipPopupDisp($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_LOG_GET_URL);
	 };
	 $scope.gotoApScreen7FromScreen6 = function() {
	  validateAppraisalScreen5('next',$http,$scope);
	     $state.go('tab.appraisal_scr6');
	 };
	 $scope.skipFromAppraisalScreen6 = function() {
	  //validateAppraisalScreen6('skip',$http,$scope);
	   $state.go('tab.appraisal_scr7');
	 };

	 var sixthScreenPopUp;
	 $scope.gotoApScreen7FromScreen6 = function() {
		  validateAppraisalScreen6('next',$http,$scope);
		  sixthScreenPopUp = $ionicPopup.show({ 
			    template: '<button class="button okButtonStyle" ng-click="closePopUp()">Ok</button>',
			    title: "THIS APPRAISAL HAS BEEN PUSHED TO WHOLESALE BUY FIGURE",
			    subTitle: '',
			    scope: $scope,
		  });
	 };
	 $scope.closePopUp = function()
	 {
		 $state.go('tab.appraisal_scr7');
  	     sixthScreenPopUp.close(); 
	 }
	 /*$scope.gotoApScreen7FromScreen7 = function() {
	  //console.log("seven");
	  var status = validateAppraisalScreen7('next',$http,$scope);
	  if(status) {
	   $state.go('tab.appraisal_log');
	  }
	 };*/
 
	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
	$scope.verifyVinNumber = function(formName) {
		if(platform != "browser"){
		var vinNumber = formName.vinNumber;
		if(vinNumber.length >= 17)
			getCarDetailsFromBlackBook($scope,vinNumber,$http,Base64,ApiEndpoint.url,'',$ionicPopup,filterObj);
	   	}
	}
	   
	$scope.getBlockBookDetails = function()
	{
		if(!isAppraisalEdit){
			var vinNumber = angular.element(document.querySelector('#scan_textbox')).val();
			getCarDetailsFromBlackBook($scope,vinNumber,$http,Base64,ApiEndpoint.url,'',$ionicPopup);
		}
	}
		     
		$scope.searchDropDown = function() {
			var apprialsSearch = angular.element( document.querySelector( '#searchDropDown'));
			
			apprialsSearch.toggleClass('displaySearch');
		};
		
		$scope.hideSearchDropDown = function() {
			var apprialsSearchHide = angular.element( document.querySelector( '#searchDropDown'));
			apprialsSearchHide.removeClass("displaySearch");
			apprialsSearchHide.removeClass("firstDisplaySearchDropDown");
		    apprialsSearchHide.addClass('hideSearchDropDown');
		    
		    var displayPopUp=angular.element(document.querySelector('#displayPopUp'));
			displayPopUp.removeClass("displaylongPressSearchDropDown");
			displayPopUp.addClass('hideSearchDropDown');
			
			/*if(currentUrl == "/appraisal_scr2"){
				setChangedValuesToScr2();
			}*/
		    
		};
		
		
		$scope.displayPopup = function(count,id,vinNumberI,status) 
		{
			selectedAppraisal = {};
			console.log("Vin : " + vinNumberI);
			editAppraisalRef = vinNumberI;
			for(var i = 0 ; i <= count; i++)
			{
				var rightClickPopUpData = angular.element(document.querySelector('#rightClickPopUp' + i));
				rightClickPopUpData.html("");
			}
			var rightClickPopUp = angular.element(document.querySelector('#rightClickPopUp' + id));
			rightClickPopUp.append("<div class='row'  id='displayPopUp'>" + "<div class='col'>" + 
					"<div class='apprialsViewBackground'>" + "<p class='apprialsViewAnchor'>" + 
					'<button id="openButton" class="logPopUpBtnStyle"> </button>' + "</p>" + "<p class='apprialsViewAnchor'>" + '<button id="editButton" class="logPopUpBtnStyle"> </button>' + "</p>" + 
					"<p class='apprialsViewAnchor'>" + '<button id="deleteButton" class="logPopUpBtnStyle"> </button>' + "</p>" + 
					"<p class='apprialsViewAnchor'>" + '<button id="setFollowUpButton" class="logPopUpBtnStyle"> </button>' + "</p>" + 
					"<p class='apprialsViewAnchor'>" + '<button id="moveToInventoryButton" class="logPopUpBtnStyle"> </button>' + "</p>" +
					"</div>" + "</div>" + "</div>");
			
			var openBtn = angular.element( document.querySelector( '#openButton' ) );
		    var openDir = angular.element('<button ng-click="openAppraisal()" class="logPopUpBtnStyle">Open</button');
		    openBtn.append(openDir);
		    $compile(openDir)($scope); 
		    
		    var editBtn = angular.element( document.querySelector( '#editButton' ) );
		    var editDir = angular.element('<button ng-click="setRetentionTime()" class="logPopUpBtnStyle">Retention Time</button');
		    editBtn.append(editDir);
		    $compile(editDir)($scope); 
		    
		    var deleteBtn = angular.element( document.querySelector( '#deleteButton' ) );
		    var deleteDir = angular.element('<button ng-click="deleteAppraisal()" class="logPopUpBtnStyle">Delete</button');
		    deleteBtn.append(deleteDir);
		    $compile(deleteDir)($scope); 
		    
		    var setBtn = angular.element( document.querySelector( '#setFollowUpButton' ) );
		    var setDir = angular.element('<button ng-click="setFollowUp()" class="logPopUpBtnStyle">Set Follow Up</button');
		    setBtn.append(setDir);
		    $compile(setDir)($scope); 
		    
		    if(status == APPRAISAL_STATUS_VAL_SUBMITED){
		    var inventoryBtn = angular.element( document.querySelector( '#moveToInventoryButton' ) );
		    var inventoryDir = angular.element('<button ng-click="moveAppraisalToInventory()" class="logPopUpBtnStyle">Move To Inventory</button');
		    inventoryBtn.append(inventoryDir);
		    $compile(inventoryDir)($scope); 
		    }
		    
			  $scope.openAppraisal = function(action)
			  {
				  processingSymbol("apprialsViewImgLoading","block");
				  var id = editAppraisalRef;
				  $http.get(APPRAISAL_VIEW_BY_VIN_URL+"GUID="+id+"&UserId=king&AppName="+platform+"&V_VIN_NUM="+id+" ")
				 .success(function (data, status, headers,request,response,header) {
					 if(status == "200" && data != null && data != undefined && data != ""){
						 var dataObj = data.Body;//.APPRAISALVEHICLEREADResponse.ResponseBody;
						 if(dataObj != null && dataObj != undefined && dataObj != ""){
							 dataObj = data.Body.APPRAISALVEHICLEREADResponse;//.ResponseBody;
							 if(dataObj != null && dataObj != undefined && dataObj != ""){
								 dataObj = data.Body.APPRAISALVEHICLEREADResponse.ResponseBody;
								 if(dataObj != null && dataObj != undefined && dataObj != ""){
									 //console.log(JSON.stringify(data));
										 isAppraisalEdit = true;isVinValidVal=true;
										 console.log(dataObj.V_APPRAISAL_STATUS == APPRAISAL_STATUS_VAL_SUBMITED);
										 console.log(dataObj.V_APPRAISAL_STATUS == APPRAISAL_STATUS_VAL_DRAFT);
										 console.log(">>>" + dataObj.V_APPRAISAL_STATUS);
										 console.log(APPRAISAL_STATUS_VAL_SUBMITED);
										 if(dataObj.V_APPRAISAL_STATUS == APPRAISAL_STATUS_VAL_SUBMITED){
											 selectedAppraisal = dataObj;
											 $state.go('tab.appraisal_view');
										 }else if(dataObj.V_APPRAISAL_STATUS == APPRAISAL_STATUS_VAL_DRAFT){
											 selectedAppraisal = dataObj;
											 $state.go('tab.appraisal_home');
										 }
										 processingSymbol("apprialsViewImgLoading","none");
							 }
						 }else{
							 processingSymbol("apprialsViewImgLoading","none");
							 displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
						 }
					 }else{
						 processingSymbol("apprialsViewImgLoading","none");
						 displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
					 }
					 }else if(status == "500"){
						 processingSymbol("apprialsViewImgLoading","none");
						 displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
			    		 
					 }else{
						 processingSymbol("apprialsViewImgLoading","none");
						 displayErrorPopUp("Black Book Data","","Something went Wrong!!");
			    		 
					 }
				 })
			      .error(function (data, status, header) {
			    	  processingSymbol("apprialsViewImgLoading","none");
			      });
			  }
		};
		
		$scope.setRetentionTime = function(action){
			var template = '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
	    	+'HOW LONG WOULD YOU LIKE TO KEEP RECORD?<br><br><center>'
	    	+'<select style = "width: 50%;" id = "retentionTimemodel">'
	    	+'<option value = "60 Days">60 DAYS</option>'
	    	+'<option value = "90 Days">90 DAYS</option>'
	    	+'<option value = "6 Months">6 Months</option>'
	    	+'<option value = "1 Year">1 Year</option>'
	    	+'</select></center>';
			var title = "Retention Time"
			popupForAppraisalActions("rt",$ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEH_UPD_RETENTTIME_URL,template,title);
			//retentionPopupshow($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEH_UPD_RETENTTIME_URL);
		}
		$scope.deleteAppraisal = function(){
			var title = "Delete Appraisal";
			var template = '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'<center>Do You Want To Delete Appraisal? <br>'
		    	+ editAppraisalRef
		    	+'</center>';
			popupForAppraisalActions("delete",$ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEHICLE_DELETE_URL,template,title);
			//deleteAppraisalShow($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEHICLE_DELETE_URL,APPRAISAL_LOG_GET_URL);
		}
		$scope.setFollowUp = function(){
			var template = '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'Reminder : <br>'
		    	+'<center><select style = "width: 50%;" id = "setFollowupData">'
		    	+'<option value = "24 Hours">24 Hours</option>'
		    	+'<option value = "No Reminder">No Reminder</option>'
		    	+'<option value = "2 Days">2 Days</option>'
		    	+'<option value = "3 Days">3 Days</option>'
		    	+'</select>'
		    	+'</center>';
			var title = 'Set Followup';
			popupForAppraisalActions("sf",$ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEHICLE_UPD_FOLLOWUP_URL,template,title);
			//setFollowUpToAppraisal($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEHICLE_UPD_FOLLOWUP_URL);
		}
		$scope.moveAppraisalToInventory = function(){
			var template = '<img src="img/closeIcon.png" class="popUpCloseButton" ng-click="closePopUp()"></img>'
		    	+'<center> Would You Like to Move This Appraisal To Inventory? <br>'
		    	+editAppraisalRef
		    	+'</center>';
			var title = "Move to Inventory";
			popupForAppraisalActions("inventory",$ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEH_UPD_INVENTORY_URL,template,title);
			//moveVehicleToInventory($ionicPopup,$scope,$http,$state,$compile,APPRAISAL_VEH_UPD_INVENTORY_URL);
		}
		$scope.FinishAppraisal = function(status){
			
			var loadingImg = angular.element(document.querySelector('#finishApprLoading'));
			  loadingImg.css("display","block");
			  appraisalStatus = status;
			CREATED_BY = platform;
			 var result = false;
			 if(status == APPRAISAL_STATUS_VAL_DRAFT) {
				 result = true; processingSymbol("appraisalDraftProc","block");
			 }else{
			 result = validateAppraisalScreen7('finish',$http,$scope);
			 }
			if(result) {
			var data = prepareAppraisalData();
			setHeaderDetails($http);
			$http.post(ORACLE_HOST_ADDRESS.url+APPRAISAL_CREATE_PATH.url, data)
		      .success(function (data, status, headers) {
		    	  if(status == "200" && data != null && data != undefined && data != ""){
		    		  if(data.Body != null && data.Body != undefined && data.Body != ""){
		    			  if(data.Body.APPRAISALVEHICLECREATEResponse != null && data.Body.APPRAISALVEHICLECREATEResponse != undefined && data.Body.APPRAISALVEHICLECREATEResponse != ""){
		    		  		var dataO = data.Body.APPRAISALVEHICLECREATEResponse.ResponseBody;
		    		  		if(dataO != null && dataO != undefined && dataO != null){
		    		  			if(dataO.RETCODE == "0" || dataO.RETCODE == 0){
		    		  				isAppraisalLogLoad = true;
		    		  				apCreate1 = false,apCreate2 = false,apCreate3 = false,apCreate4 = false,apCreate5 = false,apCreate6 = false,apCreate7 = false;
		      						setDefaultValuesToAppraisalScreen($scope);
		      						processingSymbol("finishApprLoading","none");
		      						displayErrorPopUp("Black Book Data","","Appraisal Has Been Created For " + vinNumbers);
		      						$state.go('tab.app_home');
		    		  			}else{
		    		  				setDefaultValuesToAppraisalScreen($scope);
		    		  				processingSymbol("finishApprLoading","none");
						    		displayErrorPopUp("Black Book Data","",dataO.ERRBUF);
						    		$state.go('tab.app_home');return;
		    		  			}
		    		  		}else{
		    		  			  processingSymbol("finishApprLoading","none");
					    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
					    		  setDefaultValuesToAppraisalScreen($scope);
					    		  $state.go('tab.app_home');return;
		    		  		}
		    			  }else{
		    				  processingSymbol("finishApprLoading","none");
				    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
				    		  setDefaultValuesToAppraisalScreen($scope);
				    		  $state.go('tab.app_home');return;
		    			  }
		    		  }else{
		    			  processingSymbol("finishApprLoading","none");
			    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
			    		  setDefaultValuesToAppraisalScreen($scope);
			    		  $state.go('tab.app_home');return;
		    		  }
		    	  }else{
		    		  processingSymbol("finishApprLoading","none");
		    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
		    		  setDefaultValuesToAppraisalScreen($scope);
		    		  $state.go('tab.app_home');return;
		    	  }
		      })
		      .error(function (data, status, header) {
		          var loadingImg = angular.element(document.querySelector('#finishApprLoading'));
				  loadingImg.css("display","none");
				  setDefaultValuesToAppraisalScreen($scope);
	    		  $state.go('tab.app_home');return;
		      });
		}
		}
		$scope.damageStateChanged = function(){
			if(extDamageCheck == false){
				extDamageCheck = true;
				isHaveExternalDamage
			}
				
		if(extDamageCheck == true){
			extDamageCheck = false;
			isHaveExternalDamage
		}
			
		}
		$scope.isHaveExternalDamage = function(){
			if(extDamageCheck == false)
				return true;
			else return false;
		}
		/* paint work */
		$scope.paintWorkStateChanged = function(){
			if(paintWorkCheck == false){
				paintWorkCheck = true;
				isPaintWorkDone
			}
				
		if(paintWorkCheck == true){
			paintWorkCheck = false;
			isPaintWorkDone
		}
			
		}
		
		$scope.isPaintWorkDone = function(){
			if(paintWorkCheck == false)
				return true;
			else return false;
		}
		
		$scope.descriptionPopUp = function(id, hiddenId)
		{
			var idValue = angular.element(document.querySelector('#' + id)).val();
			if(idValue == "YES")
			{
				var descTextHiddenValue = angular.element(document.querySelector('#' + hiddenId)).val();
			 var descPopUp = $ionicPopup.show({ 
				    template: '<textarea class="descPopUpTextArea" placeholder="Description" id="descText">' + descTextHiddenValue +'</textarea>',
				    title:'Description',
				    subTitle: '',
				    scope: $scope,
				    buttons: [
				       { 
				    	   text: 'Save',
				    	   
				    	   onTap: function(e) {
				    		   
				    		   var descText = angular.element(document.querySelector('#descText')).val();
				    		   var descTextHidden = angular.element(document.querySelector('#' + hiddenId));
				    		   descTextHidden.val(descText);
				    		  
				    		   descPopUp.close(); 
				 	         }
				    	   
				      },
				       {
				         text: 'Cancel',
				         type: '',
				         onTap: function(e) {
				        	 descPopUp.close(); 
				          
				         }
				       },
				     ]
					
				   });
				 
				   
			      /*   descPopUp.then(function(res) {
				     //console.log('Tapped!', res);
				    });*/
				   
				 /*  $timeout(function() {
					   descPopUp.close(); //close the popup after 3 seconds for some reason
				   }, 9999999999999999999999999999999);*/
				   
			}
			
			return false;
				   
		};
		
		$scope.uploadFile = function(element,angle) {
			$scope.currentFile = element[0];
			   var reader = new FileReader();

			  reader.onload = function(event) {
				 if(angle == "frontleftangle"){
					 $scope.frontleftangle = event.target.result
					 angular.element(document.querySelector('#frontLeftAngleHidden')).val(event.target.result);
				 }
				else if(angle == "frontrightangle"){
					 $scope.frontrightangle = event.target.result
					 angular.element(document.querySelector('#frontRightAngleHidden')).val(event.target.result);
				}
				else if(angle == "rearleftangle"){
					 $scope.rearleftangle = event.target.result
					 angular.element(document.querySelector('#rearLeftAngleHidden')).val(event.target.result);
				}
				else if(angle == "rearrightangle"){
					 $scope.rearrightangle = event.target.result
					 angular.element(document.querySelector('#rearRightAngleHidden')).val(event.target.result);
				}
					 
				$scope.$apply()

			  }
			  // when the file is read it triggers the onload event above.
			  reader.readAsDataURL(element[0]);
			  
			  //console.log(">>>>>>>>>>>>>> \n"+event.target.result+"\n<<<<<<<<<<<<<<<<<<<<<<<");
		};
		
		$scope.takePicture = function(angle) {
			console.log("Camera Opening started");
	        var options = {
	            quality: 80,
	            destinationType: Camera.DestinationType.DATA_URL,
	            sourceType: Camera.PictureSourceType.CAMERA,
	            allowEdit: false,
				allowEdit: false,
	            encodingType: Camera.EncodingType.JPEG,
	            targetWidth: 250,
	            targetHeight: 250,
	            popoverOptions: CameraPopoverOptions,
	            saveToPhotoAlbum: false
	        };
	         
	        $cordovaCamera.getPicture(options).then(function(imageData) {
				console.log("Success Inserting image to src");
				 if(angle == "frontleftangle"){
					 $scope.frontleftangle = "data:image/jpeg;base64," + imageData;
					 angular.element(document.querySelector('#frontLeftAngleHidden')).val("data:image/jpeg;base64," + imageData);
				 }
				else if(angle == "frontrightangle"){
					 $scope.frontrightangle = "data:image/jpeg;base64," + imageData;
					 angular.element(document.querySelector('#frontRightAngleHidden')).val("data:image/jpeg;base64," + imageData);
				}
				else if(angle == "rearleftangle"){
					 $scope.rearleftangle = "data:image/jpeg;base64," + imageData;
					 angular.element(document.querySelector('#rearLeftAngleHidden')).val("data:image/jpeg;base64," + imageData);
				}
				else if(angle == "rearrightangle"){
					 $scope.rearrightangle = "data:image/jpeg;base64," + imageData;
					 angular.element(document.querySelector('#rearRightAngleHidden')).val("data:image/jpeg;base64," + imageData);
				}
				 
	        }, function(err) {
	            // error
				console.log("Erroe while appending the pic to img");
	        });
	    };
	    // to get the black book details
	$scope.readBlackBookDetails = function(){
		processingSymbol("apprialsOpenImgLoading","block");
		var vin =  vinNumbers = angular.element(document.querySelector('#scan_textbox')).val();
		 getCarDetailsFromBlackBook($scope,vin,$http,Base64,'','edit',$ionicPopup)
	}
	$scope.isAppraisalEditFlow = function(){
		if(isAppraisalEdit == true && platform != "browser")
			return true;
		else
			return false;
	}
	$scope.isEditOperation = function(){
		if(isAppraisalEdit == true)
			return true;
		else
			return false;
	}
	$scope.saveAppraisalViewPopUpDisp = function()
	{
		 saveAppraisalViewDetails($scope,$http);
		 var updateData = prepareAppraisalData();
		 console.log(JSON.stringify(updateData));
		saveAppraisalViewPopUpDisplay($ionicPopup,$scope,$http,$state,$compile,$timeout,updateData);
	}
	
	/* It will verify that, the given vin is valid or not. */
	$scope.isVinValid = function(){
		var  vinNum = angular.element(document.querySelector('#scan_textbox')).val();
		if(vinNum == null || vinNum == "" || vinNum == undefined){ return true;}
		else{ //return false;
			 var yr = angular.element(document.querySelector('#hiddenBlackBookYear')).val();
			 if(yr == '' || yr == null || yr == undefined)
				 return true;
			 else 
				 return false;
			}
	}
	/* It will redirect from appraisal view page to appraisal logs page */
	$scope.closeAppraisalView = function()
	{
		isAppraisalLogLoad == true;
		$state.go('tab.app_home');
		
	}
	
	$scope.updateAppraisalData = function(updateData){
		processingSymbol("appraisalUpdateProc","block");
		
		setHeaderDetails($http);
		$http.post(APPRAISAL_VEHICLE_UPDATE_URL, updateData)
	      .success(function (data, status, headers) {
	    	  if(status == "200" && data != null && data != undefined && data != ""){
	    		  if(data.Body != null && data.Body != undefined && data.Body != ""){
	    			  if(data.Body.APPRAISALVEHICLECREATEResponse != null && data.Body.APPRAISALVEHICLECREATEResponse != undefined && data.Body.APPRAISALVEHICLECREATEResponse != ""){
	    		  		var dataO = data.Body.APPRAISALVEHICLECREATEResponse.ResponseBody;
	    		  		if(dataO != null && dataO != undefined && dataO != null){
	    		  			if(dataO.RETCODE == "0" || dataO.RETCODE == 0){
	    		  				isAppraisalLogLoad = true;
	    		  				apCreate1 = false,apCreate2 = false,apCreate3 = false,apCreate4 = false,apCreate5 = false,apCreate6 = false,apCreate7 = false;
	      						setDefaultValuesToAppraisalScreen($scope);
	      						processingSymbol("appraisalUpdateProc","none");
	      						displayErrorPopUp("Black Book Data","","Appraisal Has Been Created For " + vinNumbers);
	      						$state.go('tab.app_home');
	    		  			}else{
	    		  				setDefaultValuesToAppraisalScreen($scope);
	    		  				processingSymbol("appraisalUpdateProc","none");
					    		displayErrorPopUp("Black Book Data","",dataO.ERRBUF);
					    		$state.go('tab.app_home');return;
	    		  			}
	    		  		}else{
	    		  			  processingSymbol("appraisalUpdateProc","none");
				    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
				    		  setDefaultValuesToAppraisalScreen($scope);
				    		  $state.go('tab.app_home');return;
	    		  		}
	    			  }else{
	    				  processingSymbol("appraisalUpdateProc","none");
			    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
			    		  setDefaultValuesToAppraisalScreen($scope);
			    		  $state.go('tab.app_home');return;
	    			  }
	    		  }else{
	    			  processingSymbol("appraisalUpdateProc","none");
		    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
		    		  setDefaultValuesToAppraisalScreen($scope);
		    		  $state.go('tab.app_home');return;
	    		  }
	    	  }else if(status == "500"){
	    		  processingSymbol("appraisalUpdateProc","none");
	    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
	    		  setDefaultValuesToAppraisalScreen($scope);
	    		  $state.go('tab.app_home');return;
	    	  } else{
	    		  processingSymbol("appraisalUpdateProc","none");
	    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
	    		  setDefaultValuesToAppraisalScreen($scope);
	    		  $state.go('tab.app_home');return;
	    	  }
	      })
		.error(function(data){
			console.log(JSON.stringify(data));
			  processingSymbol("appraisalUpdateProc","none");
    		  displayErrorPopUp("Black Book Data","","Internal Server Error, Please try after some time");
    		  setDefaultValuesToAppraisalScreen($scope);
    		  //$state.go('tab.app_home');return;
		})
		  /*var promise = AppraisalServices.updateAppraisal(updateData);
	        promise.then(
	           function(data,status) { 
	              // $scope.listingData = payload.data;
	        	   console.log(JSON.stringify(data));
	           },
	           function(data,status) {
	               console.log('failure loading movie', data);
	           });*/

	}
	/* $scope.getMovieListing = function(movie) {
		        var promise = 
		            movieService.getMovie('avengers');
		        promise.then(
		           function(payload) { 
		               $scope.listingData = payload.data;
		           },
		           function(errorPayload) {
		               $log.error('failure loading movie', errorPayload);
		           });
		      };
*/
	
	})
	

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('PurchaseCtrl', function($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	})
	
	.controller('OfferCtrl', function($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	})
	;
