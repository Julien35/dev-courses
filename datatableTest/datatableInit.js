$(document).ready(function() {

  $('#example').DataTable({
    ajax: 'dataTableTest.json',
    columns: [{
      "data": "equipment_name"
    }, {
      "data": "hostname"
    }, {
      "data": "role"
    }, {
      "data": "customer"
    }, {
      "data": "site"
    }, {
      "data": "town"
    }]
  });

});
