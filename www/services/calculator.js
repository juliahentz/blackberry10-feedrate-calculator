angular.module('starter').factory('calculatorService', function($timeout){

  var service = {
    model : [
      {
        parameter: 'Z',
        value: 0,
        unit: '',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'D',
        value: 0,
        unit: 'mm',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'n',
        value: 0,
        unit: '1/U',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'F',
        value: 0,
        unit: 'mm/min',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'Vc',
        value: 0,
        unit: 'm/min',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'Fu',
        value: 0,
        unit: 'mm/U',
        canCalculate: false,
        calculated: false
      },
      {
        parameter: 'Fz',
        value: 0,
        unit: 'mm/U',
        canCalculate: false,
        calculated: false
      }
    ],
    calculator:function(){

      for(var i=0; i<service.model.length;i++){

        if(service.model[0].canCalculate === true &&
          service.model[1].canCalculate === true &&
          service.model[2].canCalculate === true &&
          service.model[3].canCalculate === true ){

          service.model[4].calculated = true;
          service.model[5].calculated = true;
          service.model[6].calculated = true;

            if(service.model[i].parameter === 'Vc'){
              service.model[i].value = Math.round ( service.model[1].value * 3.14 * service.model[2].value / 1000 * 100) / 100;
              service.model[i].calculated = true;
            }

            if(service.model[i].parameter === 'Fu'){
              service.model[i].value = Math.round ( service.model[3].value / service.model[2].value * 100 ) / 100;
              service.model[i].calculated = true;
            }

            if(service.model[i].parameter === 'Fz'){
              service.model[i].value = Math.round ( service.model[5].value / service.model[0].value * 100 ) / 100;
              service.model[i].calculated = true;
            }

        }else if(service.model[0].canCalculate === true &&
          service.model[1].canCalculate === true &&
          service.model[2].canCalculate === true &&
          service.model[6].canCalculate === true ){

            if(service.model[i].parameter === 'F'){
              service.model[i].value = Math.round ( service.model[6].value * service.model[0].value * service.model[2].value );
              service.model[i].calculated = true;
            }

            if(service.model[i].parameter === 'Vc'){
              service.model[i].value = Math.round ( service.model[1].value * 3.14 * service.model[2].value / 1000 * 100 ) / 100;
              service.model[i].calculated = true;
            }

            if(service.model[i].parameter === 'Fu'){
              service.model[i].value = Math.round ( service.model[6].value * service.model[0].value * 100) / 100;
              service.model[i].calculated = true;
            }

        }else if(service.model[0].canCalculate === true &&
          service.model[1].canCalculate === true &&
          service.model[3].canCalculate === true &&
          service.model[4].canCalculate === true &&
          service.model[6].canCalculate === true ){

          if(service.model[i].parameter === 'n'){
            service.model[i].value = Math.round ( 1000 * service.model[4].value / ( 3.14 * service.model[1].value ));
            service.model[i].calculated = true;
          }

          if(service.model[i].parameter === 'Fu'){
            service.model[i].value = Math.round ( service.model[6].value * service.model[0].value * 100) / 100;
            service.model[i].calculated = true;
          }
        }

      }

    },
    canCalculateFunction: function(){

      for(var i= 0; i<service.model.length; i++) {

        if (service.model[i].value !== 0 && !service.model[i].calculated) {

          service.model[i].canCalculate = true;

        }
      }

    },
    resetCalc:function(){

      for(var i= 0; i<service.model.length; i++) {

        service.model[i].value = 0;
        service.model[i].canCalculate = false;
        service.model[i].calculated = false;

      }

    }

  };

  return service;

});
